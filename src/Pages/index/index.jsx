import React from 'react';
import Nav from "../../Components/Nav/Nav";

import heroImage from "../../assets/How to Create Website in Tailwind css/rev_home3_01.png"
import elemnt1 from '../../assets/How to Create Website in Tailwind css/h5_decor4.png'
import elemnt2 from "../../assets/How to Create Website in Tailwind css/rev_home3_04.png"
import elemnt3 from "../../assets/How to Create Website in Tailwind css/rev_home3_05.png"
import elemnt4 from "../../assets/How to Create Website in Tailwind css/rev_home3_06.png"
import slideImage01 from "../../assets/How to Create Website in Tailwind css/h3_bn-1.jpg"
import slideImage02 from "../../assets/How to Create Website in Tailwind css/h3_bn-2.jpg"
import slideImage03 from "../../assets/How to Create Website in Tailwind css/h3_bn-3.jpg"
import slideImage04 from "../../assets/How to Create Website in Tailwind css/h3_bn-4.jpg"
import slideImage05 from "../../assets/How to Create Website in Tailwind css/h3_cat-5.jpg"
import slideImage06 from "../../assets/How to Create Website in Tailwind css/h3_cat-7.jpg"
import {Swiper, SwiperSlide} from 'swiper';
import "swiper/css";
import { Autoplay } from 'swiper/modules';

export default function index() {
  return (
    <>
    
    <div className='flex flex-col gap-[20px] relative min-h-[90vh] bg-[#ffded1]'>
        <Nav/>

        <div className='w-full px-[12%] pt-[100px] flex flex-col lg:flex-row gap-[20px]'>
          <div className='flex flex-col lg:w-[50%] w-full  items-start gap-4 justify-center'>
            <small className='text-4xl title font-dancing'>best seller</small>
            <h2 className='text-7xl 2xl:text-8xl font-medium text-red-600 font-Kalnia'>ice cream <br /> novelties</h2>
            <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat est similique soluta perferendis, doloribus repellendus fugiat voluptates ducimus, esse consectetur accusantium, repellat temporibus neque eius asperiores dolore dolorum deserunt? Recusandae.</p>
          <button className='btn header-btn'>shop now <i className='ri-arrow-right-line'></i></button>
          </div>
          <div className='lg:w-[50%] w-full flex items-center justify-center z-[1] relative right-0 bottom-0'>
            <img src={heroImage} alt="" className='w-full sm:w-[400px] 2xl:w-[600px]' />
          </div>

          <img src={elemnt1} alt="" className='w-[80px] h-[80px] absolute -top-[-80%] left-5' />
          <img src={elemnt2} alt="" className='w-[80px] h-[80px] absolute -top-[-20%] lg:left-[90%] left-[65%] hidden sm:flex' />
          <img src={elemnt3} alt="" className='w-[90px] h-[90px] absolute -top-[-10%] left-5' />
          <img src={elemnt4} alt="" className='w-[90px] h-[90px] absolute -top-[-85%] sm:-top-[-85%] lg:left-[85%] left-[-75%]' />
          
        </div>
    </div>

        {/* category section */}

        <section id='category'>
          <h3 className='section_heading'>shope by category</h3>

          <Swiper className="w-full mt-[80px]" slidesPerView={5} spaceBetween={10} 
          autoplay={
            {
              delay:2500
            }
            
          }
          modules={[Autoplay]}
          loop={true}
           breakpoints={{
            0:{
              slidesPerView:1.5,
            },
            768:{
              slidesPerView:2.5

            },
            1024:{
              slidesPerView:4.5

            }

          }}>


            <SwiperSlide>
              <div className='w-[180px] card group'>
                <img src={slideImage01} className='w-full rounded mb-4' alt="" />
                <span className='slide_text'>ice cream bar</span>
                <span className='text-center w-full hidden group-hover:inline-block text-base'>2 Products</span>
              </div>

            </SwiperSlide>


            <SwiperSlide>
              <div className='w-[180px] card group'>
                <img src={slideImage02} className='w-full rounded mb-4' alt="" />
                <span className='slide_text'>Frozen yogurt</span>
                <span className='text-center w-full hidden group-hover:inline-block text-base'>6 Products</span>
              </div>

            </SwiperSlide>

            


            <SwiperSlide>
              <div className='w-[180px] card group'>
                <img src={slideImage03} className='w-full rounded mb-4' alt="" />
                <span className='slide_text'>Rolled Ice Cream</span>
                <span className='text-center w-full hidden group-hover:inline-block text-base'>3 Products</span>
              </div>

            </SwiperSlide>



            <SwiperSlide>
              <div className='w-[180px] card group'>
                <img src={slideImage04} className='w-full rounded mb-4' alt="" />
                <span className='slide_text'>vegan ice cream </span>
                <span className='text-center w-full hidden group-hover:inline-block text-base'>2 Products</span>
              </div>

            </SwiperSlide>





            <SwiperSlide>
              <div className='w-[180px] card group'>
                <img src={slideImage05} className='w-full rounded mb-4' alt="" />
                <span className='slide_text'>vegan Gelato</span>
                <span className='text-center w-full hidden group-hover:inline-block text-base'>3 Products</span>
              </div>

            </SwiperSlide>




            <SwiperSlide>
              <div className='w-[180px] card group'>
                <img src={slideImage06} className='w-full rounded mb-4' alt="" />
                <span className='slide_text'>vegan Gelato</span>
                <span className='text-center w-full hidden group-hover:inline-block text-base'>3 Products</span>
              </div>

            </SwiperSlide>



          </Swiper>


        </section>

        <section className='flex gap-[10px] flex-wrap lg:flex-nowrap'>
          <div className=''>
            <div className='w-full sm:w-[46%] lg:w-[33%] h-[550px] bg-[url(../../assets/How to Create Website in Tailwind css/h3_bn-2.jpg)] bg-cover p-6 flex flex-col items-center pt-15 gap-2 text-white'>
              <small className='text-2xl'>save 20% off</small>
              <h3>summer 2025</h3>
              <p className='text-center'>smooth & refreshing , Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laborum?</p>
              <button  className='btn headerbtn'>shop now <i className='ri-arrow-right-line'></i> </button>
            </div>
            <div className='w-full sm:w-[46%] lg:w-[33%] h-[550px] bg-[url(../../assets/How to Create Website in Tailwind css/h3_bn-2.jpg)] bg-cover p-6 flex flex-col items-center pt-15 gap-2 text-white'>
              <small>save 20% off</small>
              <h3>summer 2025</h3>
              <p>smooth & refreshing , Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laborum?</p>
              <button>shop now <i className='ri-arrow-right-line'></i> </button>
            </div>
            <div className='w-full sm:w-[46%] lg:w-[33%] h-[550px] bg-[url(../../assets/How to Create Website in Tailwind css/h3_bn-2.jpg)] bg-cover p-6 flex flex-col items-center pt-15 gap-2 text-white'>
          
          
            <div className='h-[250px] w-full bg-[url(../../assets/How to Create Website in Tailwind css/h3_bn-2.jpg)] text-white bg-cover flex flex-col pt-4 gap-2'>
              <h3 className='text-3xl'>best selling</h3>
              <p className='pt-20'>smooth & creamy <br /> Lorem, ipsum dolor. </p> 
            </div>
          
            <div className='h-[250px] w-full bg-[url(../../assets/How to Create Website in Tailwind css/h3_bn-2.jpg)] text-white bg-cover flex flex-col pt-4 gap-2'>
            <h3 className='text-3xl'>best selling</h3>
              <p className='pt-20'>smooth & creamy <br /> Lorem, ipsum dolor. </p> 
            </div>



            </div>

          </div>

        </section>


         {/* popular flavor section */}


        <section id='popular'>
          <h3 className='section_heading'>popular flavor </h3>

          <Swiper className="mt-20 w-full" slidesPerView={3} spaceBetween={30} breakpoints={{
            0:{
              slidesPerView:1.5,
            },
            768:{
              slidesPerView:2.5,
            },
            1024:{
              slidesPerView:3.5,
            },
          }}

          >
            <SwiperSlide>
              <div className='relative flex flex-col gap-[10px] card'>
                <div className='w-full'>
                  <img src={slideImage06} alt="" className='w-full'/>

                  <div className='absolute top-5 flex flex-col right-5 gap-2 icon-card hidden'>
                    <i className='ri-heart-line icon-card'></i>
                    <i className='ri-shuffle-line icon-card'></i>
                    <i className='ri-eye-line icon-card'></i>

                  </div>
                </div>

                <div className='flex flex-col items-center gap-2'>
                  <div>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-line'></i>
                  </div>

                  <h2 className='text-lg font-bold text-rose-400 text-center'>Chocolate Fudge Browning</h2>
                  <span>$7.50</span>
                </div>

              </div>
            </SwiperSlide>
          
          
            <SwiperSlide>
              <div className='relative flex flex-col gap-[10px] card'>
                <div className='w-full'>
                  <img src={slideImage06} alt="" className='w-full'/>

                  <div className='absolute top-5 flex flex-col right-5 gap-2 icon-card hidden'>
                    <i className='ri-heart-line icon-card'></i>
                    <i className='ri-shuffle-line icon-card'></i>
                    <i className='ri-eye-line icon-card'></i>

                  </div>
                </div>

                <div className='flex flex-col items-center gap-2'>
                  <div>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-line'></i>
                  </div>

                  <h2 className='text-lg font-bold text-rose-400 text-center'>Chocolate Fudge Browning</h2>
                  <span>$7.50</span>
                </div>

              </div>
            </SwiperSlide>
          
          
            <SwiperSlide>
              <div className='relative flex flex-col gap-[10px] card'>
                <div className='w-full'>
                  <img src={slideImage06} alt="" className='w-full'/>

                  <div className='absolute top-5 flex flex-col right-5 gap-2 icon-card hidden'>
                    <i className='ri-heart-line icon-card'></i>
                    <i className='ri-shuffle-line icon-card'></i>
                    <i className='ri-eye-line icon-card'></i>

                  </div>
                </div>

                <div className='flex flex-col items-center gap-2'>
                  <div>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-line'></i>
                  </div>

                  <h2 className='text-lg font-bold text-rose-400 text-center'>Chocolate Fudge Browning</h2>
                  <span>$7.50</span>
                </div>

              </div>
            </SwiperSlide>
          
          
            <SwiperSlide>
              <div className='relative flex flex-col gap-[10px] card'>
                <div className='w-full'>
                  <img src={slideImage06} alt="" className='w-full'/>

                  <div className='absolute top-5 flex flex-col right-5 gap-2 icon-card hidden'>
                    <i className='ri-heart-line icon-card'></i>
                    <i className='ri-shuffle-line icon-card'></i>
                    <i className='ri-eye-line icon-card'></i>

                  </div>
                </div>

                <div className='flex flex-col items-center gap-2'>
                  <div>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-line'></i>
                  </div>

                  <h2 className='text-lg font-bold text-rose-400 text-center'>Chocolate Fudge Browning</h2>
                  <span>$7.50</span>
                </div>

              </div>
            </SwiperSlide>
          
          
            <SwiperSlide>
              <div className='relative flex flex-col gap-[10px] card'>
                <div className='w-full'>
                  <img src={slideImage06} alt="" className='w-full'/>

                  <div className='absolute top-5 flex flex-col right-5 gap-2 icon-card hidden'>
                    <i className='ri-heart-line icon-card'></i>
                    <i className='ri-shuffle-line icon-card'></i>
                    <i className='ri-eye-line icon-card'></i>

                  </div>
                </div>

                <div className='flex flex-col items-center gap-2'>
                  <div>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-line'></i>
                  </div>

                  <h2 className='text-lg font-bold text-rose-400 text-center'>Chocolate Fudge Browning</h2>
                  <span>$7.50</span>
                </div>

              </div>
            </SwiperSlide>
          
          
          </Swiper>

        </section>
      </>
    
  )
}



// 1:31:10  