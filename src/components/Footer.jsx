import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="py-8 mt-36 " id="contact">
      <div className="md:w-[90%] lg:w-[85%] 2xl:max-w-[92rem] mx-auto px-4">
        <div className="flex items-center text-center md:text-start justify-between flex-col md:flex-row">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-10 text-white/50">
              Get in <span className="text-gray-400">touch</span>
            </h2>
            <a
              className="text-2xl md:text-4xl font-semibold text-white underline decoration-gray-400 decoration-2
                                    underline-offset-4 hover:decoration-gray-200 transition duration-300"
              href="mailto:yusufrhmann@gmail.com"
            >
              yusufrhmann@gmail.com
            </a>
          </div>

          <div className="text-white/50 mt-12">
            <div className="mb-8">
              <p className="text-lg mb-1">Phone</p>
              <a
                href="https://wa.me/6283183000267"
                target="_blank"
                className="text-2xl font-semibold underline decoration-gray-400 decoration-2
                                    underline-offset-4 hover:decoration-gray-400 transition duration-300"
              >
                +62 831 83000 267
              </a>
            </div>

            <div className="text-lg mb-8">
              <p>Surabaya</p>
              <p>Indonesia</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center mt-8 py-12">
          <h1 className=" text-3xl md:text-5xl lg:text-8xl font-bold text-white opacity-10">
            M YUSUF RAHMAN
          </h1>
        </div>

        <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="text-gray-200 caption text-n-4 lg:block">
            © {new Date().getFullYear()}. All rights reserved.
          </p>

          <ul className="flex gap-5 flex-wrap">
            <a
              href="https://github.com/Yusufrhman"
              target="_blank"
              aria-label="GitHub"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillGithub size={30} />
            </a>
            <a
              href="https://instagram.com/yusufrhmann"
              target="_blank"
              aria-label="Instagram"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-yusuf-rahman/"
              target="_blank"
              aria-label="Linkedin"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillLinkedin size={30} />
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};
