"use client";
import { motion } from "framer-motion";

enum LinkStyle {
  plain = "plain",
  dark = "dark",
  outline = "outline",
}

export default function Link(props: {
  href: string;
  style: string;
  children: React.ReactNode;
}) {
  const { href, style, children } = props;
  const headerMenuClassName =
    style === LinkStyle.dark
      ? "text-white bg-dark hover:hover:shadow-xl"
      : style == LinkStyle.outline
      ? "text-black hover:bg-green border border-dark"
      : "text-black hover:bg-green";
  return (
    <motion.a
      href={href}
      className={`${headerMenuClassName} h-14 w-full md:w-auto p-0 md:p-4 rounded-[14px] flex justify-center items-center link`}
      whileHover={{ scale: 1.1 }}
      transition={{
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.a>
  );
}
