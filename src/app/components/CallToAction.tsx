import Link from "./common/Link";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="flex h-[347px] bg-light rounded-[45px] mt-[125px] relative">
      <div className="flex ml-[60px] mt-[60px] mb-[60px] flex-col max-w-[500px]">
        <h3>Let&apos;s make things happen</h3>
        <p className="mt-[26px]">
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
        className="absolute right-[135px] bottom-[-30px]"
      ></Image>
    </section>
  );
}
