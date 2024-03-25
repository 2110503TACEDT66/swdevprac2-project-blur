import Image  from 'next/image'
import InteractiveCard from './InteractiveCard';

export default function ProducCard ( { dentistName, imgSrc, onCompare } : { dentistName:string,
imgSrc:string, onCompare?:Function}){

  function useCarSelected(){
    alert("You select " + dentistName)
  }

  return(
    <InteractiveCard contentName={dentistName}>
      <div className='w-full h-[70%] relative rounded-t-lg'>
      <Image 
          src={imgSrc}
          alt='Produvt Picture'
          fill={true}
          className='object-cover rounded-t-lg'/>
      </div>
      <div className='w-full h-[15%] p-[10px]'>{dentistName}</div>
      {
        onCompare? <button className='text-sm block h-[10%] rounded-md bg-sky-600
        hover:bg-indigo-600 mx-2 px-1 py-1 shadow-sm text-white'
        onClick={(e)=>{e.preventDefault(); onCompare(dentistName)}}>
          Compare</button>:''
      }
    </InteractiveCard>
    
  );

}