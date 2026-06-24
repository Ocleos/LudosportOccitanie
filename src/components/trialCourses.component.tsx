const TrialCourses = () => {
  return (
    <section aria-labelledby='trial-courses-title'>
      <h2 className='mb-4 block text-center font-bold text-primary text-xl uppercase' id='trial-courses-title'>
        Cours d'essai
      </h2>

      <p className='mb-4 text-center'>
        Vous souhaitez participer à un cours d'essai, n'hésitez pas à vous inscrire sur le formulaire suivant :
      </p>

      <div className='flex flex-row justify-center'>
        <a
          className='rounded bg-primary px-4 py-2 font-bold text-white transition-colors hover:bg-primary-dark'
          href='https://forms.gle/3yFPJ21Rjw5KAvj58'
          rel='noreferrer'
          target='_blank'>
          Participer à un cours d'essai
        </a>
      </div>
    </section>
  );
};

export default TrialCourses;
