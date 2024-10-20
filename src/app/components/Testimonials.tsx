import { EmblaOptionsType } from "embla-carousel";
import Title from "./common/Title";
import Carousel from "./carousel/Carousel";
import { ReactElement } from "react";

export type Testmonial = {
  author: string;
  position: string;
  quote: ReactElement;
};

const testmonials: Testmonial[] = [
  {
    author: "John Doe",
    position: "Marketing Director at XYZ Corp",
    quote: (
      <p>
        We have been working with Positivus for the past year and have seen a
        significant increase in website traffic and leads as a result of their
        efforts. The team is professional, responsive, and truly cares about the
        success of our business. We highly recommend Positivus to any company
        looking to grow their online presence.
      </p>
    ),
  },
  {
    author: "Adam Smith",
    position: "Marketing Director at ABC Corp",
    quote: (
      <p>
        Working with this marketing agency has been a game-changer for our
        business. Their strategic approach, attention to detail, and commitment
        to delivering results have exceeded our expectations. From insightful
        market research to flawless execution and continual optimization,
        they&apos;ve helped us grow our brand and significantly boost our ROI.
      </p>
    ),
  },
  {
    author: "Curtis Welbeck",
    position: "Marketing Director at CDE Corp",
    quote: (
      <p>
        This agency has been incredible to work with. Their expertise and
        hands-on approach transformed our marketing efforts, delivering great
        results quickly. We're seeing better engagement and growth, and
        couldn&apos;t be happier!
      </p>
    ),
  },
  {
    author: "Robert Sanchez",
    position: "Marketing Director at RTY Corp",
    quote: (
      <p>
        Partnering with this agency was one of the best decisions we&apos;ve
        made. Their tailored strategies and responsive team helped us reach our
        target audience and achieve measurable success.
      </p>
    ),
  },
  {
    author: "Joe Fernandez",
    position: "Marketing Director at MC Corp",
    quote: (
      <p>
        The team truly understands our brand and goals. Their creative solutions
        and data-driven approach have elevated our marketing, delivering strong
        results and consistent growth.
      </p>
    ),
  },
];

export default function Testimonials() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <section className="flex flex-col mt-[163px]">
      <div className="flex">
        <Title>Testimonials</Title>
        <p className="max-w-[580px]">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="flex bg-dark w-full h-[625px] rounded-[45px] pt-[84px] pb-[68px] flex-col">
        <Carousel slides={testmonials} options={OPTIONS} />
      </div>
    </section>
  );
}
