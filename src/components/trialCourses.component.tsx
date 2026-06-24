import { type ChangeEvent, type SyntheticEvent, useMemo, useState } from 'react';

type TrialCourseFormState = {
  firstName: string;
  lastName: string;
  age: string;
  course: string;
  email: string;
  telephone: string;
  website: string; // Honeypot field for spam prevention
};

const initialFormState: TrialCourseFormState = {
  age: '',
  course: 'Montpellier - Mardi 20h30 - 22h30',
  email: '',
  firstName: '',
  lastName: '',
  telephone: '',
  website: '',
};

const TrialCourses = () => {
  const [formData, setFormData] = useState<TrialCourseFormState>(initialFormState);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const openedAt = useMemo(() => Date.now(), []);

  const formSubmitUrl = import.meta.env.VITE_FORM_SUBMIT_ENDPOINT?.trim();

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback('');

    if (formData.website.trim()) {
      setFeedback('Soumission détectée comme spam. Veuillez réessayer.');
      return;
    }

    if (Date.now() - openedAt < 3000) {
      setFeedback('Veuillez patienter quelques secondes avant de soumettre le formulaire.');
      return;
    }

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.age.trim() ||
      !formData.email.trim() ||
      !formData.telephone.trim()
    ) {
      setFeedback('Merci de remplir tous les champs obligatoires.');
      return;
    }

    if (!formSubmitUrl) {
      setFeedback('La configuration FormSubmit n’est pas encore définie. Merci de contacter l’administrateur du site.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(formSubmitUrl, {
        body: JSON.stringify({
          _captcha: 'false',
          _replyto: formData.email.trim(),
          _subject: `Cours d'essai - ${formData.firstName.trim()} ${formData.lastName.trim()}`,
          _template: 'table',
          Age: formData.age.trim(),
          Cours: formData.course,
          Email: formData.email.trim(),
          Nom: formData.lastName.trim(),
          Prénom: formData.firstName.trim(),
          Téléphone: formData.telephone.trim(),
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('La soumission a échoué.');
      }

      setFeedback('Votre demande a bien été envoyée. Merci !');
      setFormData(initialFormState);
    } catch {
      setFeedback('Une erreur est survenue lors de l’envoi du formulaire. Merci de réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section aria-labelledby='trial-courses-title'>
      <h2 className='mb-4 block text-center font-bold text-primary text-xl uppercase' id='trial-courses-title'>
        Cours d'essai
      </h2>

      <p className='mb-4 text-center'>
        Vous souhaitez participer à un cours d'essai ? Remplissez ce formulaire et votre demande sera envoyée via mail.
      </p>

      <form
        className='mx-auto flex max-w-xl flex-col gap-4 rounded-lg border border-white/20 bg-slate-900/70 p-6 shadow-lg'
        onSubmit={handleSubmit}>
        <div className='grid gap-4 md:grid-cols-2'>
          <label className='flex flex-col gap-2 font-semibold text-slate-100 text-sm' htmlFor='firstName'>
            Prénom *
            <input
              className='rounded border border-slate-600 bg-slate-950/70 px-3 py-2 text-white outline-none ring-0 transition focus:border-primary'
              id='firstName'
              name='firstName'
              onChange={handleChange}
              required
              type='text'
              value={formData.firstName}
            />
          </label>

          <label className='flex flex-col gap-2 font-semibold text-slate-100 text-sm' htmlFor='lastName'>
            Nom *
            <input
              className='rounded border border-slate-600 bg-slate-950/70 px-3 py-2 text-white outline-none ring-0 transition focus:border-primary'
              id='lastName'
              name='lastName'
              onChange={handleChange}
              required
              type='text'
              value={formData.lastName}
            />
          </label>
        </div>

        <label className='flex flex-col gap-2 font-semibold text-slate-100 text-sm' htmlFor='age'>
          Âge *
          <input
            className='rounded border border-slate-600 bg-slate-950/70 px-3 py-2 text-white outline-none ring-0 transition focus:border-primary'
            id='age'
            min='14'
            name='age'
            onChange={handleChange}
            required
            type='number'
            value={formData.age}
          />
        </label>

        <label className='flex flex-col gap-2 font-semibold text-slate-100 text-sm' htmlFor='course'>
          Cours *
          <select
            className='rounded border border-slate-600 bg-slate-950/70 px-3 py-2 text-white outline-none ring-0 transition focus:border-primary'
            id='course'
            name='course'
            onChange={handleChange}
            value={formData.course}>
            <option value='Montpellier - Mardi 20h30 - 22h30'>Montpellier - Mardi 20h30 - 22h30</option>
            <option value='Nîmes - Mardi 20h30 - 22h30'>Nîmes - Mardi 20h30 - 22h30</option>
          </select>
        </label>

        <label className='flex flex-col gap-2 font-semibold text-slate-100 text-sm' htmlFor='email'>
          Email *
          <input
            className='rounded border border-slate-600 bg-slate-950/70 px-3 py-2 text-white outline-none ring-0 transition focus:border-primary'
            id='email'
            name='email'
            onChange={handleChange}
            placeholder='ex. prenom@example.com'
            required
            type='email'
            value={formData.email}
          />
        </label>

        <label className='flex flex-col gap-2 font-semibold text-slate-100 text-sm' htmlFor='telephone'>
          Téléphone *
          <input
            className='rounded border border-slate-600 bg-slate-950/70 px-3 py-2 text-white outline-none ring-0 transition focus:border-primary'
            id='telephone'
            name='telephone'
            onChange={handleChange}
            placeholder='ex. 06 12 34 56 78'
            required
            type='tel'
            value={formData.telephone}
          />
        </label>

        <input
          autoComplete='off'
          className='hidden'
          name='website'
          onChange={handleChange}
          tabIndex={-1}
          type='text'
          value={formData.website}
        />

        {feedback ? <p className='text-primary text-sm'>{feedback}</p> : null}

        <button
          className='rounded bg-primary px-4 py-2 font-bold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70'
          disabled={isSubmitting}
          type='submit'>
          {isSubmitting ? 'Envoi en cours...' : "Participer à un cours d'essai"}
        </button>
      </form>
    </section>
  );
};

export default TrialCourses;
