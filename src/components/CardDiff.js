import Image from 'next/image'

export default function CardDiff(props){
    return(
        <div className="py-8 px-8 flex justify-start flex-col rounded-[8px] h-[230px] w-full lg:w-[384px] bg-neutral-100">
            <Image src={props.image} alt="Imagem do card" width={40} height={40} className="mb-4"/>
            <h2 className='mb-4 text-gray-950 text-xl font-semibold'>{props.word}</h2>
            <p className='text-neutral-500 text-base'>{props.text}</p>
        </div>
    )
}
