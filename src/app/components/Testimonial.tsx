import React from "react";
// import { CgProfile } from "react-icons/cg";

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  location: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  position,
  location,
}) => {
  return (
    <div className="shadow-[#FFD6D63D] border-2 border-[#FB888842] bg-gradient-to-b from-[rgba(255,5,5,0.033)] via-[rgba(255,5,5,0.024)] to-[rgba(255,0,214,0)] rounded-2xl p-6 max-w-md mx-auto">
      <p className="text-gray-800 mb-4 text-lg text-center">{quote}</p>
      <div className="flex justify-center items-center gap-2 mb-2">
        <div className="w-10 h-10 flex justify-center items-center">
          {/* <CgProfile className="text-gray-500" size={48} /> */}
        </div>
        <p className="font-medium text-bold text-xl text-gray-900">{name}</p>
      </div>
      <p className="text-gray-800 text-xl text-center">
        {position}, {location}
      </p>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">What Our Alumni Have to Say</h2>
        <p className="text-gray-800 text-lg">
          We have a track record, and witnesses
        </p>
      </div>

      <div className="flex justify-center">
        <Testimonial
          quote="The content is first class and the price is very cheap especially considering what you would pay to take that workshop in person."
          name="John Odey"
          position="Blockchain Developer"
          location="Lagos"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
