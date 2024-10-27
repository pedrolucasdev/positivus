"use client";
import Link from "./common/Link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="flex md:h-[347px] bg-white md:bg-light rounded-[45px] mt-[70px] md:mt-[125px] relative pl-5 xl:pl-0 pr-5 xl:pr-0">
      <motion.div
        className="p-[50px] md:p-0 flex md:ml-[60px] md:mt-[60px] md:mb-[60px] flex-col md:max-w-[500px] bg-light rounded-[45px] md:rounded-[0px]"
        initial={{ opacity: 0, x: "-50%" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h3>Let&apos;s make things happen</h3>
        <p className="mt-[26px] call-to-action">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <div className="flex mt-[26px]">
          <Link href="mailto:positivus@gmail.com" style="dark">
            Get your free proposal
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "50%" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="hidden md:flex absolute right-[50px] bottom-[-30px] xl:right-[135px] xl:bottom-[-30px]"
      >
        <Image
          src="/images/things_happen.svg"
          width={360}
          height={394}
          alt="Hero"
        ></Image>
      </motion.div>
    </section>
  );
}
