import Image from 'next/image'

export default function CardMarquee(props){
    return(
        <div className="bg-badge-item py-4 px-8 flex justify-center items-center rounded-[8px] mr-10 h-[67px]">
            <Image src={props.image} alt="Imagem do card" width={35} height={35} className="mr-2"/>
            <h2 className='text-white'>{props.word}</h2>
        </div>
    )
}
