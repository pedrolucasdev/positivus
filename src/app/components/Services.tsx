"use client";
import { motion } from "framer-motion";
import Title from "./common/Title";
import Image from "next/image";

enum ServiceStyle {
  light = "light",
  dark = "dark",
  green = "green",
}
function Service(props: {
  heading: string;
  description: string;
  style: string;
  firstChild: boolean;
  children: React.ReactNode;
}) {
  const { heading, description, style, children, firstChild } = props;
  const wrapperBaxground =
    style == ServiceStyle.light
      ? "bg-light"
      : style == ServiceStyle.dark
      ? "bg-dark"
      : "bg-green";
  const titleBackground = style == ServiceStyle.light ? "bg-green" : "bg-white";
  const arrow = style == ServiceStyle.dark ? "arrow" : "arrow_green";
  const arrowColor = style == ServiceStyle.dark ? "text-white" : "text-dark";
  const arrowBackground = style == ServiceStyle.dark ? "bg-white" : "bg-dark";
  const xPosition = firstChild ? "-25%" : "50%";
  const redirectUserToService = () => {
    window.location.href = "";
  };
  return (
    <motion.div
      className={`${wrapperBaxground} service flex h-[310px] border border-dark p-[50px] w-full md:w-[48%] xl:w-full rounded-[45px] dark-shadow md:flex-row flex-col pointer`}
      onClick={($event) => {
        redirectUserToService();
        $event.stopPropagation();
      }}
      initial={{ opacity: 0, x: xPosition }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col max-w-[230px] h-full">
        <h3
          className={`${titleBackground} rounded-[7px] pl-[7px] pr-[7px] serviceTitle`}
        >
          {heading}
        </h3>
        <h3 className={`${titleBackground} rounded-[7px] pl-[7px] pr-[7px]`}>
          {description}
        </h3>
        <a
          className={`${arrowColor}  hidden md:flex mt-auto items-center `}
          href=""
        >
          <span
            className={`${arrowBackground} ${arrowColor} rounded-full w-[40px] h-[40px] flex items-center justify-center mr-4`}
          >
            <Image
              src={`/images/${arrow}.svg`}
              width={20}
              height={20}
              alt="arrow"
            ></Image>
          </span>
          Learn more
        </a>
      </div>
      <div className="relative flex md:block w-full h-[275px] md:w-[210px] md:h-[210px] ml-0 md:ml-auto">
        {children}
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      className="flex flex-col mt-[60px] md:mt-[104px] pl-5 xl:pl-0 pr-5 xl:pr-0"
      id="services"
    >
      <motion.div
        className="items-center md:items-start flex-col md:flex-row flex"
        initial={{ opacity: 0, y: "-25%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Title>Services</Title>
        <p className="max-w-[580px] mt-[30px] md:mt-0 description">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </motion.div>
      <div className="flex flex-col w-full mt-10 md:mt-0">
        <div className="flex gap-10 justify-between md:flex-row flex-col">
          <Service
            heading="Search engine"
            description="optimization"
            style={ServiceStyle.light}
            firstChild={true}
          >
            <Image
              src="/images/search.svg"
              alt="search"
              fill
              className="w-full h-full"
            ></Image>
          </Service>
          <Service
            heading="Pay-per-click"
            description="advertising"
            style={ServiceStyle.green}
            firstChild={false}
          >
            <Image
              src="/images/click.svg"
              fill
              className="w-full h-full"
              alt="click"
            ></Image>
          </Service>
        </div>
        <div className="flex gap-10 justify-between mt-10 md:flex-row flex-col">
          <Service
            heading="Social Media"
            description="Marketing"
            style={ServiceStyle.green}
            firstChild={true}
          >
            <Image
              src="/images/social.svg"
              fill
              alt="social"
              className="w-full h-full"
            ></Image>
          </Service>
          <Service
            heading="Email"
            description="Marketing"
            style={ServiceStyle.light}
            firstChild={false}
          >
            <Image
              src="/images/email.svg"
              fill
              className="w-full h-full"
              alt="email"
            ></Image>
          </Service>
        </div>
        <div className="flex gap-10 justify-between mt-10 md:flex-row flex-col">
          <Service
            heading="Content"
            description="Creation"
            style={ServiceStyle.light}
            firstChild={true}
          >
            <Image
              src="/images/content.svg"
              fill
              alt="content"
              className="w-full h-full"
            ></Image>
          </Service>
          <Service
            heading="Analytics and"
            description="tracking"
            style={ServiceStyle.green}
            firstChild={false}
          >
            <Image
              src="/images/analytics.svg"
              fill
              className="w-full h-full"
              alt="analytics"
            ></Image>
          </Service>
        </div>
      </div>
    </section>
  );
}
