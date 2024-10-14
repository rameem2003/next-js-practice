import React from "react";
import AnimationType from "./components/AnimationType";
import Container from "./components/common/Container";
import Flex from "./components/common/Flex";
import Image from "next/image";
import me from "@/assets/images/me.jpg";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const page = () => {
  return (
    <main className="w-full max-h-screen">
      <Container>
        <Flex className="items-center justify-between w-full ">
          <div className="w-7/12 ">
            <h4 className=" font-code font-medium text-white text-4xl mb-5">
              Hi, I am
            </h4>

            <h1 className="font-dm font-bold text-white text-5xl mb-5 uppercase">
              Mahmood Hassan Rameem
            </h1>
            <AnimationType />

            <Flex className="mt-10 gap-5">
              <a
                href="https://www.linkedin.com/in/mahmood-hassan-rameem/"
                target="_blank"
                className=" inline-block p-3 rounded-full border-[2px] border-white text-2xl text-white hover:bg-white hover:text-black duration-200 ease-in-out"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/rameem2003"
                target="_blank"
                className=" inline-block p-3 rounded-full border-[2px] border-white text-2xl text-white hover:bg-white hover:text-black duration-200 ease-in-out"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/mahmood.rameem"
                target="_blank"
                className=" inline-block p-3 rounded-full border-[2px] border-white text-2xl text-white hover:bg-white hover:text-black duration-200 ease-in-out"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/MHRameem2003"
                target="_blank"
                className=" inline-block p-3 rounded-full border-[2px] border-white text-2xl text-white hover:bg-white hover:text-black duration-200 ease-in-out"
              >
                <FaXTwitter />
              </a>
            </Flex>

            <a
              className=" uppercase mt-10 duration-300 ease-in-out inline-block px-5 text-center text-white py-2 border-[2px] border-white font-dm font-medium xl:text-lg 2xl:text-xl hover:bg-white hover:text-black"
              href="http://"
            >
              My Resume
            </a>
          </div>
          <div className="w-4/12">
            <div className="relative w-full h-[600px] bg-red-500">
              <div className=" absolute w-full h-full bg-[#0c153f] top-[-30px] left-[-30px]"></div>
              <div className=" absolute w-full h-full bg-[#0c153f6e] top-[30px] left-[30px]"></div>

              <Image
                src={me}
                alt="me"
                placeholder="blur"
                className=" absolute w-full h-full top-0 left-0"
              />
            </div>
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default page;
