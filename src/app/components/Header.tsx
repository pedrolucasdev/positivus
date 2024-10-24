import Image from "next/image";
import Link from "./common/Link";

export default function Header() {
  return (
    <header className="flex pl-5 xl:pl-0 pr-5 xl:pr-0 items-center">
      <Image
        src="/images/logo.svg"
        width={220}
        height={36}
        alt="Positivus"
        className="h-[26px] md:h-[36px] w-[144px] md:w-[220px] header-logo"
      ></Image>
      <nav className="hidden md:flex ml-auto">
        <ul className="flex">
          <li className="ml-3">
            <Link href="#about-us" style="plain">
              About us
            </Link>
          </li>
          <li className="ml-5">
            <Link href="#services" style="plain">
              Services
            </Link>
          </li>
          <li className="ml-5">
            <Link href="#use-cases" style="plain">
              Use Cases
            </Link>
          </li>
          <li className="ml-5">
            <Link href="mailto:positivus@gmail.com" style="outline">
              Request a quote
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
