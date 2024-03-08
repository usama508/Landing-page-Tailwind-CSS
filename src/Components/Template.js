/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import logo from '../images/logo.webp'
import img1 from '../images/img1.webp'
import card from '../images/card.webp'
import img2 from '../images/img2.webp'
import service from '../images/service.webp'
import '../App.css'
import { MdPhone } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {/*Navbar*/}
      <div className='w-full   bg-head '>
        <div className=' lg:block md:hidden sm:hidden hidden'>
          <div className=' flex justify-between pt-3'>
            <img src={logo} alt="" className='ml-24' />
            <div className='text-white '>
              <a href="" className='ml-5'>Home</a>
              <a href="" className='ml-5'>Services</a>
              <a href="" className='ml-5'>Button</a>
              <a href="" className='ml-5'>Contact Us</a>


            </div>

            <div className='text-blue-500 mr-9 flex flex-row justify-between'>
              <a href="" className='pt-1'><MdPhone /> </a>
              <span className='ml-3 '>700 000 00 00</span>
            </div>
          </div>
        </div>

        <div className='lg:hidden '>
          <div className='flex justify-between pt-5' onClick={() => setIsOpen((prev) => !prev)}>
            <div className='md:w-72 w-32 ml-10'>
              <img src={logo} alt="" />
            </div>

            <div className="w-16">
              {
                isOpen ? <AiOutlineClose className='text-white' /> : <GiHamburgerMenu className='text-2xl text-white' />
              }
            </div>



          </div>


          {

            isOpen ? <><div onClick={() => setIsOpen(false)}>

            </div>
              <div className='text-blue-500 bg-white absolute w-full  grid'  >
                <a href="" className='ml-5 text-center p-2'>Home</a>
                <a href="" className='ml-5 text-center p-2'>Services</a>
                <a href="" className='ml-5 text-center p-2'>Button</a>
                <a href="" className='ml-5 text-center p-2'>Contact Us</a>
                <div className=' ml-16 flex flex-row justify-center p-2'>
                  <a href="" className='pt-1 text-blue-500 '><MdPhone /> </a>
                  <span className='ml-3 text-blue-500 '>700 000 00 00</span>
                </div>


              </div> </> : ''
          }
        </div>








        <div className='flex justify-between'>
          <div className=' lg:ml-24 md:ml-24 sm:ml-24 mx-auto  pt-28 pb-56'>

            <h1 className='text-white lg:w-80 font-extrabold lg:text-6xl lg:text-left md:text-left sm:text-left  text-center text-2xl'>Handyman services</h1>
            <p className=' lg:w-96 w-56 mx-auto lg:text-left  md:text-left sm:text-left text-center text-white pt-8 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <div className='lg:w-96 pt-8 lg:text-left  md:text-left sm:text-left text-center'>
              <button type='submit' className='lg:w-36 w-20  font-bold bg-yellow-400 text-sm text-gray-800 rounded-full p-3'>Help Me</button><span className='font-bold text-yellow-400 ml-10 text-sm'>Help Me</span>
            </div>


          </div>

          <div className='pt-24 lg:block md:block sm:block hidden '>
            <img src={img1} alt="" srcset="" className='lg:h-96' />
          </div>
        </div>




      </div>

      {/*Cards*/}
      <div className='w-full mx-auto'>
        <div className=' flex flex-wrap  '>
          <div className='w-96 bg-white mx-auto -mt-24  shadow-lg  rounded-2xl'>
            <div className='pt-5 '>
              <img src={card} alt="" className='w-24 mx-auto bg-slate-100 rounded-full' />
            </div>

            <h1 className='text-4xl pt-5 font-bold w-80 text-center mx-auto text-gray-700'>Handyman <span className='text-yellow-400'>&</span> Moving services</h1>
            <p className='pt-5 w-72 text-sm text-center mx-auto text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            <div className='w-48 text-center mx-auto pt-5 pb-5'>
              <button type='submit' className='lg:w-36 w-28  font-bold bg-yellow-400 text-sm text-gray-800 rounded-full p-3'>Help Me</button>
            </div>


          </div>

          <div className='w-96 bg-white lg:-mt-16 md:mt-10 mx-auto mt-10   shadow-lg rounded-2xl'>
            <div className='pt-5 '>
              <img src={card} alt="" className='w-24 mx-auto bg-slate-100 rounded-full' />
            </div>

            <h1 className='text-4xl pt-5 font-bold w-80 text-center mx-auto text-gray-700'>Handyman <span className='text-yellow-400'>&</span> Moving services</h1>
            <p className='pt-5 w-72 text-sm text-center mx-auto text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            <div className='w-48 text-center mx-auto pt-5 pb-5'>
              <button type='submit' className='lg:w-36 w-28  font-bold bg-slate-100 text-sm text-blue-200 rounded-full p-3'>Help Me</button>
            </div>


          </div>

          <div className='w-96 bg-white lg:-mt-24 md:mt-10 mx-auto mt-10  shadow-lg rounded-2xl'>
            <div className='pt-5 '>
              <img src={card} alt="" className='w-24 mx-auto bg-slate-100 rounded-full' />
            </div>

            <h1 className='text-4xl pt-5 font-bold w-80 text-center mx-auto text-gray-700'>Handyman <span className='text-yellow-400'>&</span> Moving services</h1>
            <p className='pt-5 w-72 text-sm text-center mx-auto text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            <div className='w-48 text-center mx-auto pt-5 pb-5'>
              <button type='submit' className='lg:w-36 w-28  font-bold bg-slate-100 text-sm text-blue-200 rounded-full p-3'>Help Me</button>
            </div>


          </div>


        </div>
      </div>


      {/*About Us*/}
      <div className='pt-12 '>
        <div className='w-full about-bg pt-12 pb-12 '>
          <h1 className='text-center text-blue-300 text-4xl font-bold'>About Us</h1>
          <p className='text-center text-sm'>Lorem Ipsum is simply</p>
          <div className='  flex lg:flex-row md:flex-col sm:flex-col flex-col'>

            <img src={img2} alt="" className='pt-10 lg:w-full md:w-96 w-64' />


            <div className='flex flex-wrap justify-center'>
              <div className='pt-10'>
                <p className=' w-6 border text-center text-blue-300 border-blue-300 rounded-full'>1</p>
                <p className='w-80 text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
              </div>

              <div className='pt-10 '>
                <p className=' w-6 border text-center text-blue-300 border-blue-300 rounded-full'>2</p>
                <p className='w-80 text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
              </div>

              <div className='pt-10'>
                <p className=' w-6 border text-center text-blue-300 border-blue-300 rounded-full'>3</p>
                <p className='w-80 text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
              </div>

              <div className='pt-10 '>
                <p className=' w-6 border text-center text-blue-300 border-blue-300 rounded-full'>4</p>
                <p className='w-80 text-gray-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
              </div>



            </div>


          </div>
        </div>

      </div>


      {/*Services*/}
      <div className='pt-10'>
        <h1 className='text-center text-blue-300 text-4xl font-bold'>Services</h1>
        <p className='text-center text-sm'>Lorem Ipsum is simply</p>
      </div>

      <div className='flex flex-wrap justify-center  '>
        <div className='w-48 mx-auto  pt-10'>
          <img src={service} alt="" className='' />
          <h1 className='text-lg  w-36 text-center font-bold  mx-auto text-gray-700'>Handyman <span className='text-yellow-400'>&</span> Moving services</h1>
        </div>

        <div className='w-48 mx-auto  pt-10'>
          <img src={service} alt="" className='' />
          <h1 className='text-lg  w-36 text-center font-bold  mx-auto text-gray-700'>Handyman <span className='text-yellow-400'>&</span> Moving services</h1>
        </div>

        <div className='w-48 mx-auto pt-10 '>
          <img src={service} alt="" className='' />
          <h1 className='text-lg  w-36 text-center font-bold  mx-auto text-gray-700'>Handyman <span className='text-yellow-400'>&</span> Moving services</h1>
        </div>

        <div className='w-48 mx-auto pt-10'>
          <img src={service} alt="" className='' />
          <h1 className='text-lg  w-36 text-center font-bold  mx-auto text-gray-700'>Handyman <span className='text-yellow-400'>&</span> Moving services</h1>
        </div>

        <div className='w-48 mx-auto pt-10'>
          <img src={service} alt="" className='' />
          <h1 className='text-lg  w-36 text-center font-bold  mx-auto text-gray-700'>Handyman <span className='text-yellow-400'>&</span> Moving services</h1>
        </div>


      </div>

      {/*Form*/}

      <div className='pt-24'>
        <div className='flex  bg-blue-300'>
          <div className='lg:w-1/2 w-full  pt-10'>
            <div className='flex flex-col w-5/6 mx-auto'>
              <input type="text" className='bg-white w-4/5 mx-auto outline-none  mt-3 rounded-sm p-2' placeholder='Your Name' />
              <input type="text" className='bg-white  w-4/5 mx-auto outline-none mt-3 rounded-sm p-2' placeholder='Phone Number' />
              <input type="text" className='bg-white w-4/5 mx-auto outline-none mt-3 rounded-sm p-2' placeholder='E-Mail' />
              <input type="text" className='bg-white w-4/5 mx-auto outline-none mt-3 rounded-sm p-4' placeholder='Message' />

              <div className=' w-4/5 mx-auto  mt-3 pb-5'>
                <button type='submit' className='lg:w-36 w-28  font-bold bg-yellow-400 text-sm text-gray-800 rounded-full p-3'>Submit</button>
              </div>

            </div>
          </div>

          <div className='w-1/2 form-bg lg:block md:block sm:block hidden'>
            <h1 className='text-right w-5/6 text-white text-4xl font-extrabold pt-48'>We help you</h1>

          </div>
        </div>
      </div>







    </>


  )
}

export default App