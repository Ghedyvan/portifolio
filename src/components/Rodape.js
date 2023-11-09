import Logo from '@/assets/GVlogo.svg';
import Image from 'next/image';

export default function Rodape(){
    return(
        <div className="w-full max-w-[1246px] h-[131px] bg-gradient-to-br from-gray-950 justify-between flex items-center">
            <div>
                <Image src={ Logo } alt='Logo gv' className="max-w-[70px]"/>
            </div>
            <p className='text-neutral-100 text-sm leading-[16.80px]'>Copyright 2023 - Todos os direitos reservados</p>
        </div>
    )
}