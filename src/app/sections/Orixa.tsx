import Image from 'next/image'
import Link from 'next/link';
import { orixas } from '../_DATA/data';

export const Orixa = () => {
    return (
        <>
            {
                orixas.map((item, index) => (
                    <div className='w-full bg-white  rounded-lg p-5 shadow-md flex flex-col' key={item.id || index}>
                        <Image
                            src={item.avatar}
                            alt={`${item.name} - ${item.description}`}
                            height={650}
                            className='rounded-xl object-cover w-full h-[20rem]'
                        />
                        <div className='flex flex-col gap-3 items-start justify-start my-4 flex-grow'>
                            <h1 className="text-black uppercase text-xl">{item.name}</h1>
                            <p className="text-black line-clamp-2 text-sm">
                                {item.description}
                            </p>
                        </div>
                        <Link href={`/Details/${item.id}`} className='rounded-md w-full text-center hover:bg-yellow transition-colors duration-300 ease-in text-black uppercase bg-[#EEF0F2] py-3'>
                            Ver Mais
                        </Link>
                    </div>
                ))
            }
        </>
    );

}
