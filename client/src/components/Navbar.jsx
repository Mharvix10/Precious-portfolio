import {useState, useRef} from 'react'
import { MdCancel } from "react-icons/md";
import { FaBars } from "react-icons/fa6";

function Navbar({navigateHome, navigateAbout, navigateService, navigateContact}) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className='navbar z-10 px-[30px] flex w-full h-[70px] bg-black text-white justify-between items-center fixed top-0'>
          <div>Portfolio.</div>
          <div className='hidden md:block'>
              <ul className='flex gap-[50px]'>
                  <li onClick={navigateHome} className='hover:text-blue-400 hover:cursor-pointer'>Home</li>
                  <li onClick={navigateAbout} className='hover:text-blue-400 hover:cursor-pointer'>About</li>
                  <li onClick={navigateService} className='hover:text-blue-400 hover:cursor-pointer'>Services</li>
                  <li onClick={navigateContact} className='hover:text-blue-400 hover:cursor-pointer'>Contact</li>
              </ul>
          </div>

          <div className='md:hidden'>
            <FaBars size={30} onClick={()=>{setOpen((prev)=> !prev)}}/>
          </div>


      </div>


      {
        open && (
          <div className='fixed top-0 w-[100vw] bg-black text-white text-[20px] opacity-90 h-[50vh] pt-[100px] z-10'>
            
            <ul className='block w-[100px] mx-auto'>
              <li onClick={()=>{
                navigateHome();
                setOpen(false)
              }}>Home  </li>
              <li onClick={()=>{
                navigateAbout();
                setOpen(false)
              }}>About me</li>
              <li onClick={()=>{
                navigateService();
                setOpen(false)
              }}>Services</li>
              <li onClick={()=>{
                navigateContact();
                setOpen(false)
              }}>Contact</li>
            </ul>
            <MdCancel size={50} color='red' className='mx-auto mt-[150px]' onClick={()=>{setOpen((prev)=> !prev)}}/>
        </div>
        )
      }

      
    </>

  )
}

export default Navbar