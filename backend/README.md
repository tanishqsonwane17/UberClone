# Captain Routes Documentation

## Captain Registration

### Endpoint

`POST /captains/register`

### Request Body

```json
{
  "fullname": {
    "firstname": "Ali",         // required, min 3 chars
    "lastname": "Khan"          // optional, min 3 chars if provided
  },
  "email": "ali.khan@example.com", // required, valid email
  "password": "yourpassword",      // required, min 6 chars
  "vehicle": {
    "color": "Red",                // required, min 3 chars
    "plate": "ABC123",             // required, min 3 chars
    "capacity": 4,                 // required, number
    "vehicleType": "car"           // required, one of: car, motorcycle, auto
  }
}
```

### Success Response

```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "6640c1e2f8c1a2b0012345678",
    "fullname": {
      "firstname": "Ali",
      "lastname": "Khan"
    },
    "email": "ali.khan@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
    // ...other fields
  }
}
```

### Validation Error

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long", // example error
      "param": "fullname.firstname",
      "location": "body"
    }
    // ...other errors
  ]
}
```

---

## Captain Login

### Endpoint

`POST /captains/login`

### Request Body

```json
{
  "email": "ali.khan@example.com", // required, valid email
  "password": "yourpassword"       // required, min 6 chars
}
```

### Success Response

```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "6640c1e2f8c1a2b0012345678",
    "fullname": {
      "firstname": "Ali",
      "lastname": "Khan"
    },
    "email": "ali.khan@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
    // ...other fields
  }
}
```

### Error Response

```json
{
  "message": "Invalid email or password"
}
```

---

## Captain Profile

### Endpoint

`GET /captains/profile`

### Headers

- `Authorization: Bearer <jwt_token>` (required)

### Success Response

```json
{
  "captain": {
    "_id": "6640c1e2f8c1a2b0012345678",
    "fullname": {
      "firstname": "Ali",
      "lastname": "Khan"
    },
    "email": "ali.khan@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
    // ...other fields
  }
}
```

### Unauthorized Response

```json
{
  "message": "Unauthorized"
}
```

---

## Captain Logout

### Endpoint

`GET /captains/logout`

### Headers

- `Authorization: Bearer <jwt_token>` (required)

### Success Response

```json
{
  "message": "Logged out successfully"
}
```

### Unauthorized Response

```json
{
  "message": "Unauthorized"
}
```

---

# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

## Method

**POST**

## Description

Registers a new user in the system. On successful registration, returns a JWT authentication token and the created user object.

## Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, required): Minimum 3 characters.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

## Responses

### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "_id": "663b1e2f8c1a2b0012345678",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

### Example Request

```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "Jane", "lastname": "Smith" },
    "email": "janesmith@example.com",
    "password": "securepassword"
  }'
```

### Example Success Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "663b1e2f8c1a2b0012345678",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "janesmith@example.com"
  }
}
```

---

# User Login Endpoint Documentation

## Endpoint

`POST /users/login`

## Method

**POST**

## Description

Authenticates a user with email and password. Returns a JWT authentication token and the user object on successful login.

## Request Body

Send a JSON object with the following structure:

```json
{
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "_id": "663b1e2f8c1a2b0012345678",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Email is not valid",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

### Authentication Error

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Example Request

```bash
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "johndoe@example.com",
    "password": "yourpassword"
  }'
```

### Example Success Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "663b1e2f8c1a2b0012345678",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
}
```

---

# User Profile Endpoint Documentation

## Endpoint

`GET /users/profile`

## Method

**GET**

## Description

Returns the authenticated user's profile information. Requires a valid JWT token in the `Authorization` header or as a cookie.

## Authentication

- **Header:** `Authorization: Bearer <token>`
- **Or Cookie:** `token=<token>`

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "_id": "663b1e2f8c1a2b0012345678",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": "optional-socket-id"
  }
  ```

### Unauthorized

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Example Request

```bash
curl -X GET http://localhost:3000/users/profile \
  -H "Authorization: Bearer <your_jwt_token>"
```

---

# User Logout Endpoint Documentation

## Endpoint

`GET /users/logout`

## Method

**GET**

## Description

Logs out the authenticated user by blacklisting the current JWT token and clearing the authentication cookie.

## Authentication

- **Header:** `Authorization: Bearer <token>`
- **Or Cookie:** `token=<token>`

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logout successful"
  }
  ```

### Unauthorized

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Example Request

```bash
curl -X GET http://localhost:3000/users/logout \
  -H "Authorization: Bearer <your_jwt_token>"
```

---