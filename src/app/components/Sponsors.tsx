import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="flex mt-[60px] md:mt-24 justify-between flex-wrap md:flex-nowrap gap-[32px]  md:gap-0 pl-5 xl:pl-0 pr-5 xl:pr-0">
      <Image
        src="/images/amazon.svg"
        width={124}
        height={48}
        alt="Amazon"
        className="brightness-0"
      ></Image>
      <Image
        src="/images/dribble.svg"
        width={126}
        height={48}
        alt="Dribble"
        className="brightness-0"
      ></Image>
      <Image
        src="/images/hubspot.svg"
        width={128}
        height={48}
        alt="Hubspot"
        className="brightness-0"
      ></Image>
      <Image
        src="/images/notion.svg"
        width={145}
        height={48}
        alt="Notion"
        className="brightness-0"
      ></Image>
      <Image
        src="/images/netflix.svg"
        width={125}
        height={48}
        alt="Netflix"
        className="brightness-0"
      ></Image>
      <Image
        src="/images/zoom.svg"
        width={110}
        height={48}
        alt="Zoom"
        className="brightness-0"
      ></Image>
    </div>
  );
}
