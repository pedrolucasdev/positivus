"use client";
import { animate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import { motion } from "framer-motion";

interface Sponsor {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const sponsors: Sponsor[] = [
  {
    src: "/images/amazon.svg",
    width: 124,
    height: 48,
    alt: "Amazon",
  },
  {
    src: "/images/dribble.svg",
    width: 126,
    height: 48,
    alt: "Dribble",
  },
  {
    src: "/images/hubspot.svg",
    width: 128,
    height: 48,
    alt: "Hubspot",
  },
  {
    src: "/images/notion.svg",
    width: 145,
    height: 48,
    alt: "Notion",
  },
  {
    src: "/images/netflix.svg",
    width: 125,
    height: 48,
    alt: "Netflix",
  },
  {
    src: "/images/zoom.svg",
    width: 110,
    height: 48,
    alt: "Zoom",
  },
];

export default function Sponsors() {
  const [ref, { width }] = useMeasure();
  const isMobile = width < 768;
  const marginLeft = isMobile ? 8 : 100;

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    if (isMobile) return;
    const finalPosition = -width / 2 - marginLeft;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width, marginLeft, isMobile]);

  const sponsorsList = isMobile ? [...sponsors] : [...sponsors, ...sponsors];

  return (
    <section
      className={`${
        isMobile ? "" : "overflow-hidden h-[100px]"
      } relative flex  max-w-[100%] md:mt-[104px]`}
    >
      <motion.div
        className={`${
          isMobile ? "" : "absolute left-0 top-0"
        } flex mt-[60px] md:mt-0 justify-between flex-wrap md:flex-nowrap gap-[32px] md:gap-0 pl-5 xl:pl-0 pr-5 xl:pr-0`}
        ref={isMobile ? ref : null}
        style={isMobile ? {} : { x: xTranslation }}
      >
        {sponsorsList.map((item, idx) => (
          <Image
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.alt}
            className={`brightness-0 [&:not(:first-child)]:ml-[${marginLeft}px]`}
            key={item.alt + idx}
          ></Image>
        ))}
      </motion.div>
    </section>
  );
}
