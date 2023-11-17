import Logo from '@/assets/GVlogo.svg';
import Image from 'next/image';

export default function Rodape(){
    return(
        <div className="w-full max-w-[1246px] h-[160px] md:h-[131px] bg-gradient-to-br from-gray-950 justify-between flex flex-col md:flex-row items-center">
            <div>
                <Image src={ Logo } alt='Logo gv' className="max-w-[70px] mt-8 md:mt-0"/>
            </div>
            <p className='text-neutral-100 text-center text-sm leading-[16.80px] pb-6 md:pb-0'>Copyright 2023 - Todos os direitos reservados</p>
        </div>
    )
}