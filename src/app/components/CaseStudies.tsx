import Title from "./common/Title";
import Image from "next/image";

export default function CaseStudies() {
  return (
    <section className="flex flex-col mt-[163px]" id="use-cases">
      <div className="flex">
        <Title>Case Studies</Title>
        <p className="max-w-[580px]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="flex rounded-[45px] bg-dark h-[326px] pb-[70px] pt-[70px] pl-[60px] pr-[60px]">
        <div className="flex flex-col w-full text-white">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a className="flex text-green mt-[20px] text-xl" href="">
            Learn more
            <Image
              src="/images/arrow_green.svg"
              width={20}
              height={20}
              alt="arrow"
              className="ml-[15px]"
            ></Image>
          </a>
        </div>
        <div className="flex h-full w-[1px] bg-white ml-16 mr-16"></div>
        <div className="flex flex-col w-full text-white">
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <a className="flex text-green mt-[20px] text-xl" href="">
            Learn more
            <Image
              src="/images/arrow_green.svg"
              width={20}
              height={20}
              alt="arrow"
              className="ml-[15px]"
            ></Image>
          </a>
        </div>
        <div className="flex h-full w-[1px] bg-white ml-16 mr-16"></div>
        <div className="flex flex-col w-full text-white">
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <a className="flex text-green mt-[20px] text-xl" href="">
            Learn more
            <Image
              src="/images/arrow_green.svg"
              width={20}
              height={20}
              alt="arrow"
              className="ml-[15px]"
            ></Image>
          </a>
        </div>
      </div>
    </section>
  );
}
