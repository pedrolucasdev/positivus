import Link from "./common/Link";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="flex md:h-[347px] bg-white md:bg-light rounded-[45px] mt-[70px] md:mt-[125px] relative pl-5 xl:pl-0 pr-5 xl:pr-0">
      <div
        className="p-[50px] md:p-0 flex md:ml-[60px] md:mt-[60px] md:mb-[60px] flex-col md:max-w-[500px] bg-light rounded-[45px] md:rounded-[0px]"
        data-aos="fade-right"
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
      </div>
      <Image
        src="/images/things_happen.svg"
        width={360}
        height={394}
        alt="Hero"
        className="hidden md:flex absolute right-[50px] bottom-[-30px] xl:right-[135px] xl:bottom-[-30px]"
        data-aos="fade-left"
      ></Image>
    </section>
  );
}
