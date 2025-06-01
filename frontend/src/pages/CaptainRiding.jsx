import {React,useState, useRef} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'

const CaptainRiding = (props) => {
    const [FinishRidePanel, setFinishRidePanel] = useState(false )
    const FinishRidePanleRef = useRef(null)
    useGSAP(() => {
    if (FinishRidePanel) {
      gsap.to(FinishRidePanleRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(FinishRidePanleRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [FinishRidePanel]);

  return (
    <>
          <div className='h-screen'>

        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
         <Link to=''
       className=' h-10 w-10 bg-white flex items-center justify-center rounded-full text-lg font-medium  '>
       <i className="ri-logout-box-r-line"></i>
      </Link>

        </div>
        <div className='h-4/5'>
        <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=""
          />
       </div>
       <div  className='h-1/5 p-6 relative bg-yellow-400 flex justify-between items-center'>
                 <h5
        onClick={() =>setFinishRidePanel(true)}
        className="p-1 text-center w-[93%] absolute top-0 rotate-180"
      >
        <i className="ri-arrow-down-wide-fill text-3xl text-black"></i>
      </h5>

       <h4 className='font-semibold text-xl'>4 KM Away</h4>
       <button onClick={() =>setFinishRidePanel(true)}
            className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg"
        >Complete Ride</button>
       </div> 

       <div ref={FinishRidePanleRef}  className="fixed w-full h-screen z-10 bg-white bottom-0  px-3 py-10 pt-12" >
       <FinishRide setFinishRidePanel = {setFinishRidePanel} />
       </div>
       </div> 
    </>
  )
}

export default CaptainRiding