import React from "react";
import iconphone from "../assets/icons-phone.png";

const Contact = () => {
  return (
    <div className="w-[100%] pt-[20px] pb-[20px]">
      <div className="w-[80%] m-auto flex flex-wrap gap-[30px] items-center">
        <div className="sm:w-[310px] md:w-[320px] lg:w-[330px] xl:w-[340px] 2xl:w-[350px] h-[410px] pt-[43px] pb-[43px] flex flex-col gap-[20px] items-center justify-between border-[2px] rounded-[5px] border-[#a6a6a6af]">
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[20px]">
              <img src={iconphone} alt="" />
              <p className="text-[20px] font-[600]">Call To Us</p>
            </div>
            <p className="text-[14px]">We are available 24/7, 7 days a week.</p>
            <p className="text-[14px]">Phone: +8801611112222</p>
          </div>
          <div className="w-[90%] h-[2px] bg-[#a6a6a6af]"></div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[20px]">
              <img src={iconphone} alt="" />
              <p className="text-[20px] font-[600]">Call To Us</p>
            </div>
            <p className="text-[14px]">We are available 24/7, 7 days a week.</p>
            <p className="text-[14px]">Phone: +8801611112222</p>
          </div>
        </div>

        <div className="sm:w-[310px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[800px] pt-[20px] pb-[20px] flex flex-col gap-[20px] items-center justify-between border-[2px] rounded-[5px] border-[#a6a6a6af]">
          <div className="w-[100%] m-auto flex flex-wrap justify-center items-center gap-[20px]">
          <input className="w-[230px] pl-[10px] h-[40px] rounded outline-none" placeholder="Name" type="text" name="" id="" />
          <input className="w-[230px] pl-[10px] h-[40px] rounded outline-none" placeholder="Email" type="text" name="" id="" />
          <input className="w-[230px] pl-[10px] h-[40px] rounded outline-none" placeholder="Phone" type="text" name="" id="" />
          </div>
          <textarea placeholder="Your Massage" className="w-[92%] m-auto outline-none p-[10px] rounded" name=""  id="" cols="30" rows="10"></textarea>
          <div className="w-[90%] flex items-end justify-end">
            <button className="w-[215px] h-[56px] bg-[#DB4444] text-[white] font-[700] rounded-[5px]">Send Massage</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
