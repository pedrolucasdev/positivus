"use client";
import { useState } from "react";
import Title from "./common/Title";
import Image from "next/image";

export function Process(
  onClickCallback: Function,
  isExpanded: boolean,
  step: string,
  title: string,
  description: string
) {
  return (
    <div
      key={step}
      onClick={() => onClickCallback(step)}
      className={`${
        isExpanded ? "bg-green" : "bg-light"
      } flex min-h-[159px] flex-col border border-dark p-[50px] w-full rounded-[45px] dark-shadow hover:bg-green cursor-pointer pl-[60px] pr-[60px] pb-10 pt-10`}
    >
      <div className="flex items-center w-full">
        <span className="text-[60px] mr-[25px]">{step}</span>
        <h3>{title}</h3>
        <span className="flex ml-auto w-[58px] h-[58px] border border-dark rounded-full justify-center items-center">
          <Image
            src={isExpanded ? "/images/minus.svg" : "/images/plus.svg"}
            width={25}
            height={25}
            alt="expand"
          ></Image>
        </span>
      </div>
      {isExpanded ? (
        <>
          <div className="flex w-full h-[1px] bg-dark mt-[30px] mb-[30px]"></div>
          <p>{description}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default function WorkingProcess() {
  const [expandedProcess, setExpandedProcess] = useState("-1");
  const steps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      step: "02",
      title: "Research and Strategy Development",
      description:
        "Research and strategy development form the backbone of every successful campaign. By leveraging in-depth market analysis and consumer insights, we craft tailored strategies designed to align with your business objectives, drive engagement, and deliver measurable results.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Our implementation services bring your marketing strategy to life with precision and efficiency. From executing campaigns across digital platforms to managing content, ads, and timelines, we ensure seamless execution that delivers on your goals while maintaining brand consistency.",
    },
    {
      step: "04",
      title: "Monitoring and Optimization",
      description:
        "We continuously monitor and optimize your campaigns to ensure maximum performance and ROI. By analyzing key metrics and making data-driven adjustments, we refine strategies in real-time to enhance effectiveness, drive engagement, and adapt to evolving market conditions.",
    },
    {
      step: "05",
      title: "Reporting and Communication",
      description:
        "Our reporting and communication services provide transparent, comprehensive insights into your campaign’s performance. Through detailed reports and regular updates, we keep you informed on key metrics and progress, fostering clear, ongoing communication to ensure alignment and continuous improvement.",
    },
    {
      step: "06",
      title: "Continual Improvement",
      description:
        "Continual improvement is at the core of our approach, ensuring your marketing efforts evolve and grow with your business. By consistently analyzing performance data, refining strategies, and staying ahead of industry trends, we drive long-term success through ongoing innovation and optimization.",
    },
  ];

  const onProccessClick = (step: string) => {
    if (expandedProcess == step) {
      setExpandedProcess("-1");
      return;
    }
    setExpandedProcess(step);
  };

  return (
    <section className="flex flex-col mt-[163px]">
      <div className="flex">
        <Title>Our Working Process </Title>
        <p className="max-w-[580px]">
          Step-by-Step Guide to Achieving <br></br> Your Business Goals
        </p>
      </div>
      <div className="flex flex-col gap-[30px]">
        {steps.map((item) =>
          Process(
            onProccessClick,
            expandedProcess == item.step,
            item.step,
            item.title,
            item.description
          )
        )}
      </div>
    </section>
  );
}
