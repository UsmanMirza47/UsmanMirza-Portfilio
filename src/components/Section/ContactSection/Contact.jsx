import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-5 w-full text-[#ffffffeb]">
      <div className="max-w-[419px] mx-auto">
        <p className="text-[56px] mb-5 text-center w-full">Let's Connect</p>
        <form className="flex flex-col w-full gap-5">
          <input
            type="text"
            placeholder="Name"
            className="p-[15px] text-[16px] rounded-[15px] text-white bg-[#121212]"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-[15px] text-[16px] rounded-[15px] text-white bg-[#121212]"
            required
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="p-[15px] text-[16px] rounded-[15px] text-white bg-[#121212]"
            required
          ></textarea>
          <button className="w-full rounded-[25px] px-[32px] py-[12px] flex justify-center items-center hover:bg-[#ffffff29] bg-gradient-to-r from-pink-500 to-purple-700">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
