import author from '../assets/al-Afasy.jpg';
import ShareIcon from '../assets/icons/Share.jsx';
import Status from '../assets/icons/Status';
function Landing() {
  return (
    <div className='flex gap-8 items-center wraper min-h-screen'>
      <Overlay />
      <div className='flex gap-1'>
        <p className='md:vertical-rl max-md:block'>
          <span className='text-teal-700 font-bold text-lg'>سورة البقرة</span>{' '}
          &#x2014; تم إصدارها <span>2023-04-24</span>
        </p>
        <div className='w-80'>
          <img src={author} alt='author image' />
        </div>
      </div>
      <div className=''>
        <h1 className='text-2xl md:text-4xl text-[#0000]  font-normal [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#fff] '>
          القرآن الكريم
        </h1>
        <p className='font-bold py-2 text-xl md:text-3xl '>العفاسي</p>

        <div className='mt-5 text-2xl'>
          <button className='btn bg-teal-700 h-[55px] group px-6 mx-3 rounded-sm  leading-[1.5] hover:text-black hover:bg-white transition-colors [transition-timing-function:linear] '>
            إستمع{' '}
            <Status className='fill-transparent stroke-white inline group-hover:stroke-black ' />
          </button>
          <button className=' btn h-[55px] group border-[1px] rounded-sm outline-white  leading-[1.5] hover:bg-white hover:text-black transition-colors [transition-timing-function:linear]'>
            شارك <ShareIcon className='inline mr-2 group-hover:stroke-black' />
          </button>
        </div>
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
