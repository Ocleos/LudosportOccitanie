function TrialCourses() {
  return (
    <div>
      <span className='text-primary text-center font-bold block uppercase text-xl mb-4'>Cours d'essai</span>

      <p className='mb-4 text-center'>
        Vous souhaitez participer à un cours d'essai, n'hésitez pas à vous inscrire sur le formulaire suivant :
      </p>

      <div className='flex flex-row justify-center'>
        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLScpqAm2JQG9D3aI4ynLw-SKDNSAPz6cxy97FU-kzb6e2rI7YA/viewform?usp=pp_url'
          target='_blank'
          rel='noreferrer'
        >
          <button className='bg-primary hover:bg-primary-dark font-bold py-2 px-4 rounded' type='button'>
            Participer à un cours d'essai
          </button>
        </a>
      </div>
    </div>
  );
}

export default TrialCourses;
