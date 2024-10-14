import React from "react";
import List from "../common/List";
import ListItem from "../common/ListItem";
import Link from "next/link";
import Container from "../common/Container";
import Flex from "../common/Flex";

const Navbar = () => {
  return (
    <nav className="  w-full absolute top-0 left-0 p-3">
      <Container>
        <Flex className="items-center ">
          <div className="w-3/12">
            <Link
              href="/"
              className=" font-code font-bold text-4xl text-white uppercase"
            >
              MHR
            </Link>
          </div>
          <div className="w-6/12">
            <List className="flex items-center justify-center gap-5">
              <ListItem className=" font-dm font-medium xl:text-lg 2xl:text-xl text-white uppercase">
                <Link href="/">Home</Link>
              </ListItem>
              <ListItem className=" font-dm font-medium xl:text-lg 2xl:text-xl text-white uppercase">
                <Link href="/about">About</Link>
              </ListItem>
              <ListItem className=" font-dm font-medium xl:text-lg 2xl:text-xl text-white uppercase">
                <Link href={""}>Projects</Link>
              </ListItem>
              <ListItem className=" font-dm font-medium xl:text-lg 2xl:text-xl text-white uppercase">
                <Link href={""}>Education</Link>
              </ListItem>
              <ListItem className=" font-dm font-medium xl:text-lg 2xl:text-xl text-white uppercase">
                <Link href={""}>Contact</Link>
              </ListItem>
            </List>
          </div>
          <div className="w-3/12">
            <Flex className="items-center justify-end">
              <Flex></Flex>

              <a
                className=" uppercase duration-300 ease-in-out inline-block px-5 text-center text-white py-2 border-[2px] border-white font-dm font-medium xl:text-lg 2xl:text-xl hover:bg-white hover:text-black"
                href="http://"
              >
                My Resume
              </a>
            </Flex>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
