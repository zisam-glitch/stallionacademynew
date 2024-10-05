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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target;

    // Check if the target is an input element and has files
    const newValue = (e.target as HTMLInputElement).files ? (files as FileList)[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, such as sending data to an API
    console.log(formData);
  };

  return (
    <section className="bg-[#f4f4f4] py-24 ">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pb-14">
          <h2 className="font-mono font-light text-xl capitalize">
            Contact Us
          </h2>
        </div>
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
