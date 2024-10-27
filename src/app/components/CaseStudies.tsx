import Title from "./common/Title";
import Image from "next/image";

export default function CaseStudies() {
  return (
    <section
      className="flex flex-col mt-[60px] md:mt-[163px] pl-5 xl:pl-0 pr-5 xl:pr-0"
      id="use-cases"
    >
      <div className="items-center xl:items-start flex-col xl:flex-row flex">
        <Title>Case Studies</Title>
        <p className="max-w-[580px]  mt-[30px] xl:mt-0 description">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="flex flex-col xl:flex-row xl:rounded-[45px] xl:bg-dark xl:h-[326px] xl:pb-[70px] xl:pt-[70px] xl:pl-[60px] xl:pr-[60px]">
        <div className="flex flex-col w-full text-white bg-dark rounded-[45px] xl:round-[0px] p-10 xl:p-0 mt-[30px]  md:mt-[60px] xl:mt-0">
          <p className="case-study">
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
        <div className="hidden xl:flex h-full w-[1px] bg-white ml-16 mr-16"></div>
        <div className="flex flex-col w-full text-white bg-dark rounded-[45px] xl:round-[0px] p-10 xl:p-0 mt-[30px]  md:mt-[60px] xl:mt-0">
          <p className="case-study">
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
        <div className="hidden h-full w-[1px] bg-white ml-16 mr-16 xl:flex"></div>
        <div className="flex flex-col w-full text-white bg-dark rounded-[45px] xl:round-[0px] p-10 xl:p-0 mt-[30px]  md:mt-[60px] xl:mt-0">
          <p className="case-study">
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
