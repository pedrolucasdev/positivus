import Image from "next/image";
import Link from "./common/Link";

export default function Header() {
  return (
    <section className="flex w-full justify-center">
      <div className="flex mt-[8%] w-full ">
        <div className="flex max-w-[531px] flex-col">
          <h1>Navigating the digital landscape for success</h1>
          <p className="mt-9">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <div className="flex mt-9">
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
          className="ml-auto"
        ></Image>
      </div>
    </section>
  );
}
