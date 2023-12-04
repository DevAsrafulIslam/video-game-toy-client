import React from "react";

const Contact = () => {
  return (
    <div className="container border rounded-md px-4 py-12 font-mono shadow-2xl shadow-[#67e52c86] mx-auto w-2/3 mt-12">
        <h2 className="text-center text-3xl font-bold font-mono ">Get In Touch</h2>
      <div className="grid grid-cols-3 mt-7 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered input-error w-full max-w-xs"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered input-error w-full max-w-xs"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="input input-bordered input-error w-full max-w-xs"
        />
      </div>
        <textarea
          className="textarea textarea-success w-full textarea-lg max-w-full mt-8"
          placeholder="Your Message"
        ></textarea>
      <button className="btn w-full input-error hover:input-success mt-12">Send Massage</button>
    </div>
  );
};

export default Contact;
