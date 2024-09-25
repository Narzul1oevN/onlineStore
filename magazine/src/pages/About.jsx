import React from "react";
import port from "../assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png";
import ser1 from "../assets/erwerwer.png"
import ser2 from "../assets/erwerwersadewd.png"
import ser4 from "../assets/Serviceseeee.png"
import service1 from "../assets/Services.png";
import service2 from "../assets/Services (1).png";
import service3 from "../assets/Services (2).png";
import mens11 from "../assets/mens11.png"
import iconeee from "../assets/iconabput.png"
import frame87 from "../assets/Frame 875.png"
import frame876 from "../assets/Frame 876.png"


const About = () => {
  return (
    <div className="bg-white w-[100%] flex flex-col gap-[50px] m-auto pt-[20px] pb-[20px]">
      {/* secion1 */}
      <div className="w-[90%] flex items-center justify-center m-auto flex-wrap gap-[20px]">
        <div className="flex flex-col justify-center gap-[30px] items-start">
          <h1 className="text-[54px] ">Our Story</h1>
          <p className="sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px]  2xl:w-[525px] text-[16px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px]  2xl:w-[525px] text-[16px]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img className="rounded" src={port} alt="" />
      </div>

      {/* secion2 */}
      <div className="w-[90%] m-auto flex flex-wrap items-center justify-center gap-[20px]">
        <div className="w-[270px] h-[230px] flex flex-col items-center gap-[20px] p-[20px] border-[2px] border-[#808080ac] hover:border-none rounded group hover:bg-[#DB4444] border-[2px] border-[#91919170] w-[170px] h-[145px] flex flex-col justify-evenly items-center">
          <img className="group-hover:filter group-hover:invert group-hover:contrast-100" src={ser1} alt="" />
          <p className=" text-center group-hover:text-white text-[32px] font-[800]">10.5k</p>
          <p className=" text-center group-hover:text-white text-[16px]">Sallers active our site</p>
        </div>

        <div className="w-[270px] h-[230px] flex flex-col items-center gap-[20px] p-[20px] border-[2px] border-[#808080ac] hover:border-none rounded group hover:bg-[#DB4444] border-[2px] border-[#91919170] w-[170px] h-[145px] flex flex-col justify-evenly items-center">
          <img className="group-hover:filter group-hover:invert group-hover:contrast-100" src={ser2} alt="" />
          <p className=" text-center group-hover:text-white text-[32px] font-[800]">10.5k</p>
          <p className=" text-center group-hover:text-white text-[16px]">Sallers active our site</p>
        </div>

        <div className="w-[270px] h-[230px] flex flex-col items-center gap-[20px] p-[20px] border-[2px] border-[#808080ac] hover:border-none rounded group hover:bg-[#DB4444] border-[2px] border-[#91919170] w-[170px] h-[145px] flex flex-col justify-evenly items-center">
          <img className="group-hover:filter group-hover:invert group-hover:contrast-100" src={ser4} alt="" />
          <p className=" text-center group-hover:text-white text-[32px] font-[800]">10.5k</p>
          <p className=" text-center group-hover:text-white text-[16px]">Sallers active our site</p>
        </div>

        <div className="w-[270px] h-[230px] flex flex-col items-center gap-[20px] p-[20px] border-[2px] border-[#808080ac] hover:border-none rounded group hover:bg-[#DB4444] border-[2px] border-[#91919170] w-[170px] h-[145px] flex flex-col justify-evenly items-center">
          <img className="group-hover:filter group-hover:invert group-hover:contrast-100" src={ser4} alt="" />
          <p className=" text-center group-hover:text-white text-[32px] font-[800]">10.5k</p>
          <p className=" text-center group-hover:text-white text-[16px]">Sallers active our site</p>
        </div>
      </div>

      {/* secion3 */}
      <div className="w-[90%] m-auto flex flex-wrap items-center justify-center gap-[20px]">
        <div className="w-[370px] flex flex-col items-start">
          <img src={mens11} alt="" />
          <h1 className="text-[32px] ">Tom Cruise</h1>
          <h1 className="text-[16px] ">Founder & Chairman</h1>
          <img src={iconeee} alt="" />
        </div>

        <div className="w-[370px] flex flex-col items-start">
          <img src={frame87} alt="" />
          <h1 className="text-[32px] ">Tom Cruise</h1>
          <h1 className="text-[16px] ">Founder & Chairman</h1>
          <img src={iconeee} alt="" />
        </div>

        <div className="w-[370px] flex flex-col items-start">
          <img src={frame876} alt="" />
          <h1 className="text-[32px] ">Tom Cruise</h1>
          <h1 className="text-[16px] ">Founder & Chairman</h1>
          <img src={iconeee} alt="" />
        </div>
      </div>
    
      {/* secion4 */}
      <div className="w-[100%] m-auto flex justify-center items-center pt-[50px] pb-[50px]">
        <div className="w-[80%] m-auto flex flex-wrap justify-center items-center gap-[20px]">
          <div className="w-[270px] h-[161px] flex flex-col items-center gap-[5px]">
            <img src={service1} alt="" />
            <h1 className="text-[20px] text-black font-[700]">
              FREE AND FAST DELIVERY
            </h1>
            <p className="text-[14px]">
              Free delivery for all orders over $140
            </p>
          </div>

          <div className="w-[270px] h-[161px] flex flex-col items-center gap-[5px]">
            <img src={service2} alt="" />
            <h1 className="text-[20px] text-black font-[700]">
              FREE AND FAST DELIVERY
            </h1>
            <p className="text-[14px]">
              Free delivery for all orders over $140
            </p>
          </div>

          <div className="w-[270px] h-[161px] flex flex-col items-center gap-[5px]">
            <img src={service3} alt="" />
            <h1 className="text-[20px] text-black font-[700]">
              FREE AND FAST DELIVERY
            </h1>
            <p className="text-[14px]">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
