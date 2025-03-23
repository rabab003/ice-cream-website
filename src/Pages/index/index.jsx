import React from 'react';
import Nav from "../../Components/Nav/Nav";

import heroImage from "../../assets/How to Create Website in Tailwind css/rev_home3_01.png"
import elemnt1 from '../../assets/How to Create Website in Tailwind css/h5_decor4.png'
import elemnt2 from "../../assets/How to Create Website in Tailwind css/rev_home3_04.png"

export default function index() {
  return (
    <div className='flex flex-col gap-[20px] relative min-h-[90vh] bg-[#ffded1]'>
        <Nav/>

        <div className='w-full px-[12%] pt-[100px] flex flex-col lg:flex-row gap-[20px]'>
          <div className='flex flex-col w-[50%] items-start gap-4 justify-center'>
            <small className='text-4xl title font-dancing'>best seller</small>
            <h2 className='text-7xl 2xl:text-8xl font-medium text-red-600 font-Kalnia'>ice cream <br /> novelties</h2>
            <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat est similique soluta perferendis, doloribus repellendus fugiat voluptates ducimus, esse consectetur accusantium, repellat temporibus neque eius asperiores dolore dolorum deserunt? Recusandae.</p>
          <button className='btn header-btn'>shop now <i className='ri-arrow-right-line'></i></button>
          </div>
          <div className='w-[50%] flex items-center justify-center z-[1] relative right-0 bottom-0'>
            <img src={heroImage} alt="" className='w-full sm:w-[400px] 2xl:w-[600px]' />
          </div>

          <img src={elemnt1} alt="" className='w-[80px] h-[80px] absolute -top-[-80%] left-5' />
          <img src={elemnt2} alt="" className='w-[80px] h-[80px] absolute -top-[-20%] lg:left-[90%] left-[65%] hidden sm:flex' />
        </div>
      
    </div>
  )
}



// 47 min in the video project (adding the third img (element3))