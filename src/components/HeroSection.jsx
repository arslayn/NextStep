const HeroSection = () => {
  // Edited
  // const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);

  // .map((item, index) => (
  //   <li
  //     key={index}
  //     className="cursor-pointer"
  //     onClick={() => {
  //       scrollToSection(item.href);
  //       console.log(item);
  //     }}
  //   >
  //     {item.label}
  //   </li>
  // till here
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Guidance and Counselling
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for students
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Welcome to NextStep, your trusted partner in career guidance and
        counseling. We provide personalized support to help students navigate
        academic decisions, explore career options, and develop essential skills
        for their future. Take the next step towards a successful and fulfilling
        career with expert advice tailored to your goals.
      </p>
      <div id="High" className="flex justify-center my-10">
        <a className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
          For high school
        </a>
        <a id="Uni" className="py-3 px-4 mx-3 rounded-md border">
          For College
        </a>
      </div>
      <div className="flex mt-10 justify-center"></div>
    </div>
  );
};

export default HeroSection;
