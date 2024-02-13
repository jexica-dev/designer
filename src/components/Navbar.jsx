import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <div className=" absolute z-50 right-0 w-64 h-screen md:invisible sm:invisible lg:visible invisible">
        <div
          className={
            props.themeMode !== "dark"
              ? "text-left h-full fixed border-l font-space text-5xl "
              : "text-left h-full fixed border-l font-space text-5xl text-white "
          }
        >
          {/* <div
            onClick={props.toggleColorMode}
            className="hover:bg-yellow-300 cursor-pointer p-7 font-semibold text-base text-right"
          >
            light or dark mode
          </div> */}
          <h1>
            {/* <span className=" opacity-0 hover:opacity-100 absolute font-roboto top-100 left-0  text-cyan">
              {" "}
              Light Mode or Dark Mode
            </span> */}

            <div className="pl-3 pb-3 pt-3 border-b">
              <Link to="/" className="">
                <span className="text-dark font-semibold">jessica</span>{" "}
                <span className="text-dark font-semibold">ayran</span>{" "}
              </Link>{" "}
              <br />
              <span className="text-3xl hover:underline">
                <a href="http://jexica.design" target="_blank">
                  aka jexica
                </a>
              </span>
            </div>

            <div className="border-l">
              <img
                className="w-[13rem]"
                src="/jexica-profile.jpg"
                alt=""
                srcset=""
              />
            </div>

            {/* <a
              className="hover:underline underline-offset-8 font-bold italic text-3xl"
              href="https://jexica.design/"
            >
              {" "}
            </a> */}
          </h1>

          {/* <p className="font-base text-base sm:text-base md:text-xl lg:3xl border-t  p-7 overflow-scroll overscroll-y-contain"></p> */}

          <div className="text-sm p-3">
            A designer and web developer from the SF Bay Area. Her work
            encompasses architectural design to full stack web development apps.
          </div>

          <div className="text-sm py-3 px-10 ">
            <a
              className="block"
              href="mailto:jess.ayran@gmail.com"
              target="_blank"
            >
              -> email
            </a>
            <a className="block" href="https://www.linkedin.com/in/jexica/">
              -> linkedin
            </a>
            <a className="block" href="https://github.com/jexica-dev">
              -> github
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
