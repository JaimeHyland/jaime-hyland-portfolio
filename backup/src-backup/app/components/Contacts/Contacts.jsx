import React from "react";
import Image from "next/image";
import Link from "next/link";
const Contacts = () => {
  return (
    <>
      <section id="contact">
        <div className="bg-[#1F1E1B] flex flex-col  xl:flex-row justify-center p-20 gap-5 font-Inconsolata ">
          <div className="flex flex-col  gap-4 p-6">
            <h1 className="text-3xl text-[#F0E3CA]">
              <span className="text-[#FF8303]">&lt;J</span>aime 
              <span className="text-[#FF8303]"> H</span>yland
              <span className="text-[#FF8303]">&gt;</span>
            </h1>
             <p className="text-[#F0E3CA] text-xl">
              If you&apos;re interested in my skills and like my work, Please get in touch.
            </p>
          </div>
          <div className="flex flex-col  items-start gap-5  flex-wrap">
            <h1 className="text-[#FF8303] text-3xl font-bold">Contact email</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
              <div className="flex justify-center items-center gap-4">
                <Image
                  src="/mail.png"
                  width={32}
                  height={32}
                  alt="image not found"
                />
                <Link
                  className="text-[#FF8303] text-xl text-center"
                  href="mailto:jaime.hyland@language-landscapes.com"
                >
                  jaime.hyland@language-landscapes.com
                </Link>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Image
                  src="/github.png"
                  width={32}
                  height={32}
                  alt="image not found"
                />
                <Link
                  className="text-[#FF8303] text-2xl text-center"
                  href="https://github.com/JaimeHyland/"
                >
                  Jaime&apos;s Repos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;