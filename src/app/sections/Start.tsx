import Link from 'next/link';

export const Start = () => {
    return (
        <div className='bg-yellow/20 flex flex-col justify-between items-center w-full rounded-md h-[35rem] overflow-hidden '>
            <h1 className='text-6xl  lg:text-9xl p-10 self-center'>Conheça Mais Sobre Os Orixás</h1>

            <Link
                href="/Home"
                className='bg-white text-lgpx-3 border-2 border-gray-50 py-6 transition-colors ease-in duration-200 hover:bg-yellow rounded-sm w-full'
            >
                Conheça sobre os Orixas 🗝️
            </Link>
        </div>
    )
};
