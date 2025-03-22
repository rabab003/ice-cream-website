import React from 'react';
import Nav from "../../Components/Nav/Nav";

import heroImage from "../../assets/How to Create Website in Tailwind css/rev_home3_01.png"

export default function index() {
  return (
    <div className='flex flex-col gap-[20px] relative min-h-[90vh] bg-[#ffded1]'>
        <Nav/>

        <div className='w-full px-[12%] pt-[100px] flex flex-col lg:flex-row gap-[20px]'>
          <div className='flex flex-col w-[50%] items-start gap-4 justify-center'>
            <small className='text-4xl title font-dancing'>best seller</small>
            <h2 className='text-7xl 2xl:text-8xl font-medium text-red-600 font-Kalnia'>ice cream <br /> novelties</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat est similique soluta perferendis, doloribus repellendus fugiat voluptates ducimus, esse consectetur accusantium, repellat temporibus neque eius asperiores dolore dolorum deserunt? Recusandae.</p>
          <button>shop now <i className='ri-arrow-right-line'></i></button>
          </div>
          <div className=''>
            <img src={heroImage} alt="" className='' />
          </div>
        </div>
      
    </div>
  )
}



// 40 min in the video project 