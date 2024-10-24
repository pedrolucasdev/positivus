import Image from "next/image";
import Link from "./common/Link";

export default function Header() {
  return (
    <section className="flex w-full justify-center pl-5 xl:pl-0 pr-5 xl:pr-0">
      <div className="flex-col md:flex-row flex mt-10 md:mt-[8%] w-full ">
        <div className="flex max-w-[531px] flex-col">
          <h1 data-aos="fade-down" className="hero-title">
            Navigating the digital landscape for success
          </h1>
          <Image
            src="/images/hero.svg"
            width={600}
            height={515}
            alt="Hero"
            className="flex mt-5 md:hidden hero-mobile-image"
            data-aos="zoom-in"
          ></Image>
          <p className="mt-5 md:mt-9 hero-description" data-aos="fade-right">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <div className="flex mt-10  md:mt-9 hero-action" data-aos="fade-up">
            <Link href="mailto:positivus@gmail.com" style="dark">
              Book a consultation
            </Link>
          </div>
        </div>
        <Image
          src="/images/hero.svg"
          width={600}
          height={515}
          alt="Hero"
          className="hidden md:flex ml-auto hero-image"
          data-aos="zoom-in"
        ></Image>
      </div>
    </section>
  );
}
