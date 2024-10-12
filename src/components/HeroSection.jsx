import React from 'react';

const FeatureItem = ({ imgSrc, text }) => (
  <div className="item flex items-center md:flex-col">
    <img src={imgSrc} alt={text} className="w-20" />
    <span className="font-medium md:w-[8rem] inline-block md:text-center text-sm my-4">{text}</span>
  </div>
);

const HeroSection = () => {
  const features = [
    { imgSrc: '/img/feature1.svg', text: 'Choose your Microsoft 365' },
    { imgSrc: '/img/feature2.svg', text: 'Office Suite' },
    { imgSrc: '/img/feature3.svg', text: 'Windows 11' },
    { imgSrc: '/img/feature4.svg', text: 'Surface Devices' },
  ];

  return (
    <>
      <section className="slider flex flex-col-reverse md:flex-row bg-[#f2f2f2]">
        <div className="left flex flex-col justify-center items-center md:items-baseline py-12 md:ml-32 space-y-5">
          <h1 className="text-2xl font-medium md:text-4xl mx-5">Surface Laptop 4</h1>
          <p className="w-3/4 mx-5 text-center md:text-left">
            Do it all with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance.
          </p>
          <button className="text-white bg-black px-4 py-2 my-6 font-bold mx-5">
            Shop Now
          </button>
        </div>
        <div className="right">
          <img className="w-[60rem] md:w-[64rem]" src="/img/hero1.png" alt="Surface Laptop 4" />
        </div>
      </section>

      <section className="featuresSection flex flex-col sm:flex-row justify-center w-[80%] mx-auto space-y-6 sm:space-y-0 sm:space-x-6">
        {features.map((feature, index) => (
          <FeatureItem key={index} imgSrc={feature.imgSrc} text={feature.text} />
        ))}
      </section>
    </>
  );
};

export default HeroSection;
