import {React,useState} from 'react';
import { Link } from 'react-router-dom';
import CaptainRiding from '../pages/CaptainRiding';

const ConfirmRidePopup = (props) => {
  const [Otp, setOtp] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <>
    <div >
       <h5
        onClick={() => props.setConfirmridePopupPanel(false)}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="ri-arrow-down-wide-fill text-3xl text-gray-400"></i>
      </h5>

      {/* Ride Heading */}
      <h3 className="text-2xl font-semibold mb-5 mt-10">Confirm this ride to Start</h3>

      {/* Rider Info */}
      <div className="flex justify-between items-center p-3 bg-yellow-300 rounded-xl mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1618306842557-a2515acf2112"
            alt="User"
          />
          <h2 className="text-lg font-medium">Bixi  </h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      {/* Ride Details */}
      <div className="flex flex-col items-center gap-2 mt-5 w-full">
        <div className="w-full">
          <div className="flex items-center gap-5 p-3 border-b border-gray-400">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="-mt-1 text-gray-600 text-sm">Kankariya Talab, Ahmedabad</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b border-gray-400">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="-mt-1 text-gray-600 text-sm">Kankariya Talab, Ahmedabad</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹ 193.20</h3>
              <p className="-mt-1 text-gray-600 text-sm">Cash</p>
            </div>
          </div>
        </div>

        {/* Accept Button */}
         <form >
         </form>
        <div className='mt-6 w-full'>
           <form onSubmit={(e)=>{
            submitHandler(e)
           }}>
            <input value={Otp} onChange={(e)=>{
                e.target.value
            }} type="Number" placeholder='Enter OTP' className='bg-[#eee] px-6 py-4 text-lg font-mono rounded-lg mt-3 w-full'/>
             <Link to={'/captain-riding'} onClick={() => {
           props.setConfirmRidePopupPanel(true);  // Close confirm popup
           props.setRidePopupPanel(true);          // Open accept popup
          }} className="w-full text-lg flex justify-center items-center mt-3 bg-green-600 text-white font-semibold p-3 rounded-lg"  >
          Confirm
        </Link>
        {/* Ignore Button */}
        <button 
          onClick={() => {
           props.setConfirmRidePopupPanel(false);
           props.setRidePopupPanel(false)
        //    props.setRidePopupPanel(false);
          }} className="w-full text-lg mt-1 bg-red-600 text-white font-semibold p-3 rounded-lg" >
          Cancel
        </button>

           </form>
        </div>
      </div>

    </div>
    </>
  );
};

export default ConfirmRidePopup;
