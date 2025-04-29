import React from "react";
import Image from "next/image";
const Home = () => {
  return (
    <>
      <section id="about">
        <div className="bg-[#1F1E1B] font-Inconsolata flex  flex-col-reverse lg:flex-col justify-center items-center py-40 gap-14">
          <div className="flex flex-col md:flex-row justify-center text-lg items-center gap-3 text-[#F0E3CA] flex-wrap p-4">
            <div className="relative w-48 h-48">
              <Image src="/home1.png" alt="home icon not found" fill />
            </div>
            <div className="lg:w-1/2 text-center lg:text-start">
              <p>
                A former technical translator, I recently completed a year-long course in Full-stack Web development. I'm now looking for opportunities to put my skills into real-world action.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center  gap-10">
            <div className="flex flex-col lg:items-start justify-center items-center gap-2 p-5">
              <h1 className="text-[#FF8303] text-4xl font-bold">
                Jaime Hyland
              </h1>
              <label className="text-[#F0E3CA] text-3xl">
                Full-stack web developer
              </label>
              <span className="text-[#F0E3CA] text-lg text-center lg:text-start">
                ... in search a creative team building real-world projects.
              </span>
            </div>
            <div className="relative w-96 h-96 bg-cover">
              <Image src="/homepic2.png" fill alt={"Np Image Found"} />

              <div className="w-56 h-56 absolute left-20  top-24" >
                <Image src="/pp.png" fill alt={"No Image Found"}/>
            </div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
