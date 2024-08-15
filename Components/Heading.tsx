type HeadingProps = {
  title: string;
  iscenterd?: Boolean;
};
function Heading({ title, iscenterd }: HeadingProps) {
  return (
    <div>
      <h1
        className={`leading-10 bg-clip-text text-transparent  bg-gradient-to-tr from-sky-200 via-sky-500 to-sky-200 font-extrabold text-4xl sm:text-4xl lg:text-5xl py-1 text-center lg:text-left${
          iscenterd ? "text-center" : ""
        }`}
      >
        {title}
      </h1>
    </div>
  );
}

export default Heading;
