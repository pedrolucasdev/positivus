"use client";
import { animate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import { motion } from "framer-motion";
import { section } from "framer-motion/client";

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
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 100;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <section className="relative flex h-[100px] max-w-[100%] overflow-hidden md:mt-[104px]">
      <motion.div
        className="absolute left-0 top-0 flex mt-[60px] md:mt-0 justify-between flex-wrap md:flex-nowrap gap-[32px] md:gap-0 pl-5 xl:pl-0 pr-5 xl:pr-0"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...sponsors, ...sponsors].map((item, idx) => (
          <Image
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.alt}
            className="brightness-0 [&:not(:first-child)]:ml-[100px]"
            key={item.alt + idx}
          ></Image>
        ))}
      </motion.div>
    </section>
  );
}
