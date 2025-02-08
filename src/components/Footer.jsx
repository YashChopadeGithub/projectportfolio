import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/yash_chopade_10/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/yashgchopade/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition duration-300"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; Crafted by Yash Chopade. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
