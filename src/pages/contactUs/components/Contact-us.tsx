import { memo } from "react";
import adressIMG from "../../../assets/contactUs/address.png";
import callIMG from "../../../assets/contactUs/call.png";
import mailIMG from "../../../assets/contactUs/mail.png";
import mapIMG from "../../../assets/contactUs/map.png";

const ContactUsIn = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <div className="flex md:flex-row justify-center gap-6 mb-12">
        <div className="flex flex-col items-center justify-center bg-py w-full md:w-[357px] h-[156px] text-center p-4">
          <img src={adressIMG} alt="" className="w-10 mb-3" />
          <h3 className="font-semibold text-sm">ADDRESS</h3>
          <p className="text-gray-700 text-sm">234 Hai Trieu, Ho Chi Minh City, Viet Nam</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-py w-full md:w-[357px] h-[156px] text-center p-4">
          <img src={callIMG} alt="" className="w-10 mb-3" />
          <h3 className="font-semibold text-sm">CONTACT US</h3>
          <p className="text-gray-700 text-sm">+84 234 567 890</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-py w-full md:w-[357px] h-[156px] text-center p-4">
          <img src={mailIMG} alt="" className="w-10 mb-3" />
          <h3 className="font-semibold text-sm">EMAIL</h3>
          <p className="text-gray-700 text-sm">hello@3legant.com</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <form className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">FULL NAME</label>
            <input type="text" placeholder="Your Name" className="w-full border rounded-md px-4 py-2  "/>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">EMAIL ADDRESS
            </label>
            <input type="email" placeholder="Your Email" className="w-full border rounded-md px-4 py-2  "/>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">MESSAGE</label>
            <textarea placeholder="Your message" className="w-full border rounded-md px-4 py-2 h-32  "/>
          </div>
          <button type="submit" className="bg-black text-white px-6 py-2 rounded-md">
            Send Message
          </button>
        </form>
        <div className="flex-1">
          <img src={mapIMG} alt="" className="w-full h-full  rounded-md"/>
        </div>
      </div>
    </div>
  );
};

export default memo(ContactUsIn);
