import React from "react";

function Mobile(props) {
  return (
    <div className="text-wrap py-24  flex flex-col lg:invisible md:visible sm:visible lg:h-0 lg:p-0">
      <div className="pl-10 text-left lg:w-[45rem]  selection:bg-fuchsia-300 selection:text-fuchsia-900 ">
        Hello, <br className="mb-3" />
        I’m <span className="tracking-wider"> Jessica Ayran</span> (
        <a
          className="underline"
          target="_blank"
          href="https://me.jexica.design/"
        >
          jexica
        </a>
        ), <br />a designer and programmer from the SF Bay Area, <br /> focused
        on web development and parametric to graphic design.
        <br />
        <p className="mt-3 text-sm">
          <span className="text-yellow-300">&#10022;</span> California College
          of the Arts (SF, CA):
          <br /> Bachelor of Architecture, 2016.
        </p>
        <p className="mt-3 text-sm">
          <span className="text-yellow-300">&#10022;</span> General Assembly:
          Software Engineering Immersive, 2021.
          <span className="mt-3 block">
            <span className="text-yellow-300">&#10022;&nbsp;</span>
            Available for freelance and remote work.
            <div className="mt-3">
              <p className="text-sm  ">
                <span className="text-yellow-300">&#10022; &nbsp;</span>
                <a
                  href="mailto:jess.ayran@gmail.com"
                  className="text-sm underline"
                  target="_blank"
                >
                  email_me
                </a>
                &nbsp;
                {/* <Link href="" passHref>
              <a className="underline text-sm" target="_blank">
                resume
              </a>
            </Link> */}
                <a
                  className="underline"
                  href="https://drive.google.com/file/d/1vNq72WyHiFver28D86C2fiV1UcFhW04W/view?usp=sharing"
                  target="_blank"
                >
                  resume
                </a>
                &nbsp;
                <a
                  className="underline"
                  href="https://issuu.com/jessicaayran/docs/jayran_samplework_2d327ad19bd1f0"
                  target="_blank"
                >
                  samplework
                </a>
                {/* <Link to="/samplework">samplework</Link> */}
              </p>
            </div>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Mobile;
