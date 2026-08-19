type TitleProps = {
  text: string;
  id: string;
  /** Defaults to `h2` for sub-headings within a page. Set to `h1` once per route for the page's own title. */
  level?: 'h1' | 'h2';
};

const Title: React.FC<TitleProps> = ({ text, id, level = 'h2' }) => {
  const Heading = level;

  return (
    <Heading className='block text-center font-bold text-2xl text-primary uppercase' id={id}>
      {text}
    </Heading>
  );
};

export default Title;
