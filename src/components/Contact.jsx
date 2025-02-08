import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/raeqjora", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">Contact</h1>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 flex flex-col md:flex-row gap-10"
      >
        
        {/* Contact Form */}
        <div className="flex flex-col md:w-1/2 bg-slate-200 p-6 rounded-xl shadow-lg flex-grow">
          
        
          <div className="flex flex-col items-center justify-center mt-5">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full px-8 py-6 rounded-xl"
            >
              <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
              <div className="flex flex-col mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  {...register("name", { required: true })}
                  className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="flex flex-col mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  {...register("email", { required: true })}
                  className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="text"
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="flex flex-col mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                />
                {errors.message && <span>This field is required</span>}
              </div>
              <button
                type="submit"
                className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Side Card with Download Resume */}
        <div className="md:w-1/2 bg-slate-200 p-6 rounded-xl shadow-lg flex-grow text-center flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-6">Get Resume</h2>
          <p className="mb-6 text-gray-700">
            Download my resume to learn more about my experience and skills.
          </p>
          <a
            href="/path/to/your/resume.pdf"  // Replace with your actual resume file path
            download
            className="bg-black text-white py-2 px-6 rounded-xl text-center hover:bg-slate-700 duration-300 mb-4"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
