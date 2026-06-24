const Presentation = () => {
  return (
    <section aria-labelledby='presentation-title'>
      <h2 className='mb-4 block text-center font-bold text-primary text-xl uppercase' id='presentation-title'>
        Présentation
      </h2>
      <iframe
        allowFullScreen
        className='aspect-video-short w-full md:aspect-video'
        loading='lazy'
        src='https://www.youtube.com/embed/EzOmiJ-AufY'
        title='Présentation de Ludosport Occitanie'
      />
    </section>
  );
};

export default Presentation;
