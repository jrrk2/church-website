import React from 'react';

const HistorySection = () => {
  return (
    <section id='history' className='px-primary mt-[107px]'>
      <h2 className='font-bold text-xl md:text-2xl text-center mb-5'>OUR HISTORY</h2>
      <p className='text-center font-bold text-primary text-[30px] md:text-[35px] lg:text-[40px] mb-10 font-secondary'>
        Girton Baptist Church
      </p>
      <div className='flex flex-col gap-5 md:text-lg w-full'>
        <p>The date on the foundation stone at Girton Baptist Chapel is April 6th 1860
	and although that date is significant for the building,
	for the origin of the church we need to go back a few years into the first part of the nineteenth century.
	In 1831 an organisation was formed called the Cambridge Village Preachers Association
	and the history of the work in Girton is very much tied up with the CVPA. </p>
      </div>
    </section>
  );
};

export default HistorySection;
