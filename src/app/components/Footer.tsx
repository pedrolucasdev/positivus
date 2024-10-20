import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-[140px] rounded-tr-[45px] rounded-tl-[45px] h-[514px] bg-light pt-[55px] pb-[50px] pl-[60px] pr-[60px]">
      <div className="flex items-center justify-between">
        <Image
          src="/images/logo.svg"
          width={189}
          height={29}
          alt="Positivus"
        ></Image>
        <div className="flex">
          <a href="" className="text-[18px] underline text-dark">
            About us
          </a>
          <a href="" className="text-[18px] underline text-dark ml-10">
            Services
          </a>
          <a href="" className="text-[18px] underline text-dark ml-10">
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
      <div className="flex mt-[60px] h-[185px]">
        <div className="flex flex-col h-full min-w-[350px]">
          <h4 className="bg-green w-fit text-dark font-medium">Contact us:</h4>
          <div className="flex flex-col h-full justify-between mt-[26px]">
            <p className="text-dark mt-[9px]">Email: info@positivus.com</p>
            <p className="text-dark mt-[9px]">Phone: 555-567-8901</p>
            <p className="text-dark mt-[9px]">
              Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>
        <span className="ml-[154px] bg-[#edebeb] h-full w-full text-dark justify-center items-center flex rounded-[14px] p-10">
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
