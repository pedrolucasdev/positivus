import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-[90px] md:mt-[140px] md:rounded-tr-[45px] md:rounded-tl-[45px] md:h-[514px] bg-light p-5 md:pt-[55px] md:pb-[50px] md:pl-[60px] md:pr-[60px] flex-col md:flex-row gap-[30px] md:gap-0 items-center">
      <div className="flex items-center justify-between flex-col md:flex-row gap-[30px] md:gap-0 md:mt-0 mt-[30px]">
        <Image
          src="/images/logo.svg"
          width={189}
          height={29}
          alt="Positivus"
          className="h-[23px] md:h-[29px] w-[144px] md:w-[189px]"
        ></Image>
        <div className="flex flex-col md:flex-row gap-[30px] md:gap-0 items-center">
          <a href="" className="text-[18px] underline text-dark">
            About us
          </a>
          <a href="" className="text-[18px] underline text-dark md:ml-10">
            Services
          </a>
          <a href="" className="text-[18px] underline text-dark md:ml-10">
            Use Cases
          </a>
        </div>
        <div className="flex">
          <a
            className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-dark"
            href=""
          >
            <Image
              src="/images/linkedin.svg"
              width={15}
              height={15}
              alt="Linkedin"
            ></Image>
          </a>
          <a
            className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-dark ml-[20px]"
            href=""
          >
            <Image
              src="/images/facebook.svg"
              width={10}
              height={10}
              alt="Facebook"
            ></Image>
          </a>
          <a
            className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-dark ml-[20px]"
            href=""
          >
            <Image
              src="/images/twitter.svg"
              width={15}
              height={15}
              alt="Twitter"
            ></Image>
          </a>
        </div>
      </div>
      <div className="flex mt-[60px] md:h-[185px] flex-col  md:flex-row gap-[30px] md:gap-0 items-center">
        <div className="flex flex-col h-full md:min-w-[350px] items-center md:items-start">
          <p className="bg-green w-fit text-dark font-medium text-[20px]">
            Contact us:
          </p>
          <div className="flex flex-col h-full justify-between mt-[26px] text-center md:text-start">
            <p className="text-dark mt-[30px] md:mt-[9px]">
              Email: info@positivus.com
            </p>
            <p className="text-dark mt-[30px] md:mt-[9px]">
              Phone: 555-567-8901
            </p>
            <p className="text-dark mt-[30px] md:mt-[9px]">
              Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>
        <span className="ml-0 md:ml-[154px] bg-[#edebeb] h-full w-full text-dark justify-center items-center flex rounded-[14px] p-10">
          <div className="inline-block">
            This is a mock project based on{" "}
            <a
              href="https://www.figma.com/community/file/1230604708032389430"
              className="underline text-[18px]"
            >
              this design
            </a>{" "}
            by Olga Averchenko. Please check out her beautiful work.
          </div>
        </span>
      </div>
      <div className="flex w-full h-[1px] bg-dark mt-[50px] mb-[50px]"></div>
      <div className="flex items-center">
        <span>@ {currentYear} Positivus. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
