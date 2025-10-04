import React from 'react';

const SectionWrapper = ({ children }) => {
  return (

    <section
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center
    bg-neutral-900"
    >
      {children}
    </section>

  );
};

export default SectionWrapper;
