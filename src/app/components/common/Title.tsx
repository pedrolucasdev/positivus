export default function Title(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <h2 className="bg-green w-fit pl-[7px] pr-[7px] md:mr-[40px] md:mb-[80px] rounded-[7px]">
      {children}
    </h2>
  );
}
