import Image from "next/image";
import Link from "./common/Link";

export default function Header() {
  return (
    <header className="flex">
      <Image
        src="/images/logo.svg"
        width={220}
        height={36}
        alt="Positivus"
      ></Image>
      <nav className="flex ml-auto">
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
