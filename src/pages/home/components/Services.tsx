import { memo } from "react";
import services_truck from "../../../assets/fast delivery.svg";
import services_camera from "../../../assets/money.svg";
import services_lock from "../../../assets/call.svg";
import services_phone from "../../../assets/lock 01.png";

const Services = () => {
  return (
    <section className="mb-12">
      <div className="container">
        <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-py py-14 px-9 ">
            <img src={services_truck} alt="Free Shipping" />
            <p className="font-semibold lg:font-medium text-[14px] lg:text-[20px] text-sy mt-4">
              Free Shipping
            </p>
            <p className="max-w-[75%] font-normal text-[14px] mt-2 text-text-sy">
              Order above $200
            </p>
          </div>
          <div className="bg-py py-14 px-9">
            <img src={services_camera} alt="Money-back" />
            <p className="font-semibold lg:font-medium text-[14px] lg:text-[20px] text-sy mt-4">
              Money-back
            </p>
            <p className=" max-w-[75%] font-normal text-[14px] mt-2 text-text-sy">
              30 days guarantee
            </p>
          </div>
          <div className="bg-py py-14 px-9 ">
            <img src={services_phone} alt="Secure Payments" />
            <p className="font-semibold lg:font-medium text-[14px] lg:text-[20px] text-sy mt-4">
              Secure Payments
            </p>
            <p className="max-w-[75%] font-normal text-[14px] mt-2 text-text-sy">
              Secured by Stripe
            </p>
          </div>
          <div className="bg-py py-14 px-9 ">
            <img src={services_lock} alt="24/7 Support" />
            <p className="font-semibold lg:font-medium text-[14px] lg:text-[20px] text-sy mt-4">
              24/7 Support
            </p>
            <p className=" max-w-[75%] font-normal text-[14px] mt-2 text-text-sy">
              Phone and Email support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Services);
