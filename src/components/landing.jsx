import author from '../assets/al-Afasy.jpg';
import ShareIcon from '../assets/icons/Share.jsx';
import Status from '../assets/icons/Status';
function Landing() {
  return (
    <div className='wraper flex max-lg:flex-col  gap-8 lg:items-center  min-h-screen py-4 '>
      <Overlay />
      <Thumbnail />
      <Info />
    </div>
  );
}
function Thumbnail(props) {
  return (
    <div className='flex gap-1 max-md:flex-col-reverse max-md:gap-3 max-lg:justify-center'>
      <p className='md:vertical-rl'>
        <span className='text-teal-700 font-bold text-lg'>سورة البقرة</span>{' '}
        &#x2014; تم إصدارها <span>2023-04-24</span>
      </p>
      <div className='max-md:mx-auto'>
        <img
          className='w-full rounded-sm lg:w-96 '
          src={author}
          alt='author image'
        />
      </div>
    </div>
  );
}
function Info(props) {
  const iconClass = 'inline group-hover:stroke-black';
  const btnClass = `btn min-h-[55px] group px-3 sm:px-6 rounded-sm mx-3 
    leading-[1.5] hover:text-black hover:bg-white  
    transition-colors [transition-timing-function:linear] `;

  const Btn = (props) => (
    <button className={`${btnClass} ${props.className}`}>
      {props.children}
    </button>
  );

  return (
    <div>
      <h1 className='text-4xl md:text-6xl md:text-[#0000]  font-normal md:[-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#fff] '>
        القرآن الكريم
      </h1>

      <p className='font-bold py-2 text-xl md:text-3xl '>العفاسي</p>

      <div className='mt-5 text-xl md:text-2xl'>
        <Btn className='bg-teal-700'>
          <Status className={iconClass} /> إستمع
        </Btn>

        <Btn className='border '>
          <ShareIcon className={iconClass + ' ml-1'} /> شارك
        </Btn>
      </div>
    </div>
  );
}

function Overlay() {
  const full = 'w-full h-full  absolute inset-0 ';
  return (
    <div
      className={`${full} bg-[url(../assets/landing-bg.jpg)] bg-gd bg-no-repeat bg-cover  bg-center blur-[6px]
z-[-1] backdrop-blur-[8px] bg-black bg-opacity-60`}
    ></div>
  );
}

export default Landing;
