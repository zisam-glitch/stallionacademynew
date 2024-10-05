"use client";
import { useState } from "react";

export default function Service() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    postcode: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending data to an API
    console.log(formData);
  };

  return (
    <section className="bg-[#f4f4f4] py-24 mx-8 rounded-ee-[40px] rounded-ss-[40px]">
      <div className="container w-10/12 mx-auto px-8">
        
        <form onSubmit={handleSubmit} className=" font-mono space-y-12">
          <div className="flex justify-between space-x-10">
            <div className="w-1/2">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name*"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border-b border-b-[#000000] p-2 placeholder:text-lg bg-transparent focus:placeholder:text-black focus:outline-none focus:border-b-1 focus:border-b-black"
              />
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border-b border-b-[#000000] p-2 placeholder:text-lg bg-transparent focus:placeholder:text-black focus:outline-none focus:border-b-1 focus:border-b-black"
              />
            </div>
          </div>

          <div className="flex justify-between space-x-10">
            <div className="w-1/2">
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-b-[#000000] p-2 placeholder:text-lg bg-transparent focus:placeholder:text-black focus:outline-none focus:border-b-1 focus:border-b-black"
              />
            </div>

            <div className="w-1/2">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-b-[#000000] p-2 placeholder:text-lg bg-transparent focus:placeholder:text-black focus:outline-none focus:border-b-1 focus:border-b-black"
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-b-[#000000] p-2 placeholder:text-lg bg-transparent focus:placeholder:text-black focus:outline-none focus:border-b-1 focus:border-b-black"
            ></textarea>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            *Specified fields must be completed
          </p>
          <button
            type="submit"
            className="bg-[#171721]     font-mono text-white py-[15px] px-[24px] rounded-[50px] hover:underline"
          >
            <div className="flex gap-4 items-center justify-center">
              <p>Send Message</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="9"
                viewBox="0 0 13 9"
                fill="none"
              >
                <path
                  d="M12.7279 4.5L5.22792 0.169873V8.83013L12.7279 4.5ZM0 5.25H5.97792V3.75L0 3.75L0 5.25Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
}
