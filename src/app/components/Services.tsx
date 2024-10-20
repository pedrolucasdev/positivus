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
  children: React.ReactNode;
}) {
  const { heading, description, style, children } = props;
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
  return (
    <div
      className={`${wrapperBaxground} flex h-[310px] border border-dark p-[50px] w-full rounded-[45px] dark-shadow`}
    >
      <div className="flex flex-col max-w-[230px] h-full">
        <h3 className={`${titleBackground} rounded-[7px] pl-[7px] pr-[7px] `}>
          {heading}
        </h3>
        <h3 className={`${titleBackground} rounded-[7px] pl-[7px] pr-[7px]`}>
          {description}
        </h3>
        <a className={`${arrowColor} flex mt-auto items-center`} href="">
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
      <div className="relative ml-auto block w-[210px] h-[210px]">
        {children}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="flex flex-col mt-[120px]" id="services">
      <div className="flex">
        <Title>Services</Title>
        <p className="max-w-[580px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex gap-10 justify-between">
          <Service
            heading="Search engine"
            description="optimization"
            style={ServiceStyle.light}
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
          >
            <Image
              src="/images/click.svg"
              fill
              className="w-full h-full"
              alt="click"
            ></Image>
          </Service>
        </div>
        <div className="flex gap-10 justify-between mt-10">
          <Service
            heading="Social Media"
            description="Marketing"
            style={ServiceStyle.green}
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
          >
            <Image
              src="/images/email.svg"
              fill
              className="w-full h-full"
              alt="email"
            ></Image>
          </Service>
        </div>
        <div className="flex gap-10 justify-between mt-10">
          <Service
            heading="Content"
            description="Creation"
            style={ServiceStyle.light}
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
