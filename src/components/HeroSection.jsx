const HeroSection = () => {
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
        <a
          href="http://127.0.0.1:5000/"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          For high school
        </a>
        <a id="Uni" className="py-3 px-4 mx-3 rounded-md border">
          For College
        </a>
      </div>
      <div className="flex mt-10 justify-center"></div>
      <div className="flex flex-col items-center mt-11 max-w-7xl text-center text-neutral-500 space-y-6">
        <p>
          At NextStep, we believe that every student has unique potential, and
          we are here to help you uncover it. Our well built website will be
          guiding you through the choices and challenges you may face on your
          educational journey.
        </p>
        <p>
          Our services are going to cover a broad range of support areas, from
          academic planning and test preparation to extracurricular activities
          and personal development. Whether you're aiming for a specific career
          path or simply exploring your interests, we're here to help you make
          informed decisions.
        </p>
        <p>
          With our comprehensive career roadmaps, future-personalized
          counseling, and resources designed for students at different stages,
          NextStep ensures that you are well-equipped to make choices that align
          with your aspirations and values.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
