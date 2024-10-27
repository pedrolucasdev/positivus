"use client";
import Image from "next/image";
import Link from "./common/Link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="flex w-full justify-center pl-5 xl:pl-0 pr-5 xl:pr-0">
      <div className="flex-col md:flex-row flex mt-10 md:mt-[8%] w-full ">
        <div className="flex max-w-[531px] flex-col">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: "-25%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Navigating the digital landscape for success
          </motion.h1>
          <Image
            src="/images/hero.svg"
            width={600}
            height={515}
            alt="Hero"
            className="flex mt-5 md:hidden hero-mobile-image"
          ></Image>
          <motion.p
            className="mt-5 md:mt-9 hero-description"
            initial={{ opacity: 0, x: "-25%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </motion.p>
          <motion.div
            className="flex mt-10  md:mt-9 hero-action"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="mailto:positivus@gmail.com" style="dark">
              Book a consultation
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="hidden md:flex ml-auto hero-image"
        >
          <Image
            src="/images/hero.svg"
            width={600}
            height={515}
            alt="Hero"
          ></Image>
        </motion.div>
      </div>
    </section>
  );
}
