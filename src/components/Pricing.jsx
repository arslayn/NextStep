import BAImage from "../assets/BA.jpg";
import BDSImage from "../assets/BDS.jpg";
import LLBImage from "../assets/LLB.jpg";
import BiotechImage from "../assets/Biotech.jpg";
import McomImage from "../assets/Mcom.jpg";
import MtechImage from "../assets/Mtech.jpg";
const Pricing = () => {
  return (
    <div id="Roadmaps" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Roadmaps
      </h2>
      <div className="flex flex-col items-center justify-center zmax-w-4xl p-10 bg-neutral-900 border border-neutral-700 rounded-lg mt-10">
        <h2 className="text-3xl font-semibold text-center mb-6">
          WHO IS THIS FOR?
        </h2>
        <p className="text-lg text-neutral-400 mb-4">This is for you if:</p>
        <ul className="text-neutral-400 text-left list-disc list-inside space-y-3">
          <li>
            You’re in Year 11 or Year 12 and know you want to pursue further
            study at a university or TAFE.
          </li>
          <li>
            You want to see a range of pathways that show you exactly how you
            can get into your dream course and career so that you can make an
            informed decision about your next steps.
          </li>
          <li>
            You want clarity and direction to help you get excited and feel
            confident about your future.
          </li>
        </ul>
      </div>
      <div className="items-center justify-center mt-12 max-w-5xl w-full">
        <img
          src={BAImage}
          alt="BA Student Roadmap"
          className="items-center justify-center w-full h-auto object-contain rounded-lg shadow-lg"
        />
      </div>

      <div className="items-center justify-center mt-12 max-w-5xl w-full">
        <img
          src={BDSImage}
          alt="BA Student Roadmap"
          className="items-center justify-center w-full h-auto object-contain rounded-lg shadow-lg"
        />
      </div>

      <div className="items-center justify-center mt-12 max-w-5xl w-full">
        <img
          src={LLBImage}
          alt="BA Student Roadmap"
          className="items-center justify-center w-full h-auto object-contain rounded-lg shadow-lg"
        />
      </div>

      <div className="items-center justify-center mt-12 max-w-5xl w-full">
        <img
          src={BiotechImage}
          alt="BA Student Roadmap"
          className="items-center justify-center w-full h-auto object-contain rounded-lg shadow-lg"
        />
      </div>

      <div className="items-center justify-center mt-12 max-w-5xl w-full">
        <img
          src={McomImage}
          alt="BA Student Roadmap"
          className="items-center justify-center w-full h-auto object-contain rounded-lg shadow-lg"
        />
      </div>

      <div className="items-center justify-center mt-12 max-w-5xl w-full">
        <img
          src={MtechImage}
          alt="BA Student Roadmap"
          className="items-center justify-center w-full h-auto object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Pricing;
