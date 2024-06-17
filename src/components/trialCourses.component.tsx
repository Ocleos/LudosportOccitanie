function TrialCourses() {
  return (
    <div>
      <span className='mb-4 block text-center font-bold text-primary text-xl uppercase'>Cours d'essai</span>

      <p className='mb-4 text-center'>
        Vous souhaitez participer à un cours d'essai, n'hésitez pas à vous inscrire sur le formulaire suivant :
      </p>

      <div className='flex flex-row justify-center'>
        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLScpqAm2JQG9D3aI4ynLw-SKDNSAPz6cxy97FU-kzb6e2rI7YA/viewform?usp=pp_url'
          target='_blank'
          rel='noreferrer'>
          <button className='rounded bg-primary px-4 py-2 font-bold hover:bg-primary-dark' type='button'>
            Participer à un cours d'essai
          </button>
        </a>
      </div>
    </div>
  );
}

export default TrialCourses;
