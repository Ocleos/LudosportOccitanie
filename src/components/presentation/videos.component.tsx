import Card from '../ui/card.component';
import Title from '../ui/title.component';
import YoutubeVideo from '../ui/youtubeVideo.component';

const Videos = () => {
  return (
    <>
      <Title id='videos-title' text='Vidéos' />
      <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-3'>
        <Card>
          <p className='font-bold text-xl'>Les bases de Ludosport</p>
          <YoutubeVideo isShort={false} title='Découvrir Ludosport' youtubeVideoId='PkHZ8upmsCE' />
        </Card>

        <Card>
          <p className='font-bold text-xl'>Une communauté international</p>
          <YoutubeVideo isShort={false} title='Découvrir Ludosport' youtubeVideoId='fmhDb_SwKU0' />
        </Card>

        <Card>
          <p className='font-bold text-xl'>Les valeurs et principes</p>
          <YoutubeVideo isShort={false} title='Découvrir Ludosport' youtubeVideoId='3zO06CHwMcQ' />
        </Card>
      </div>
    </>
  );
};

export default Videos;
