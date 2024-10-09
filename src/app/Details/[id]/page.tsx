import { orixas } from '@/app/_DATA/data'; // Certifique-se de que o caminho está correto
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {
  params: {
    id: string;
  };
};

const Inner = ({ params }: Props) => {
  const { id } = params;
  const orixa = orixas.find((item) => item.id === parseInt(id));

  if (!orixa) {
    return (
      <div className="w-full p-3 bg-red-200 rounded-lg flex flex-col shadow-sm">
        <p>Orixá não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="w-full p-3 lg:p-0 bg-[#FCFCFC] rounded-lg flex flex-col lg:flex-row lg:gap-4 shadow-sm">
      
      <Image
        src={orixa.avatar}
        alt={orixa.name}
        height={250}
        width={250}
        className="w-full h-96 lg:w-[30rem] lg:h-screen object-cover rounded-md lg:rounded-l-md lg:rounded-r-none"
      />
      <div className="my-4 flex flex-col gap-6 items-start justify-center lg:justify-start lg:p-6 ">
        <div>
          <h1 className='text-black text-5xl lg:text-6xl mb-2'>{orixa.name}</h1>
          <p className='text-black mt-4 text-sm lg:text-lg'>{orixa.description}</p>
          <div>
            <h2 className='text-black mt-4 text-2xl lg:text-3xl mb-2 flex flex-col gap-2'>Saudação</h2>
            <p className='text-black text-sm lg:text-lg'>{orixa.greeting}</p>
          </div>
        </div>
        <div>
          <h2 className='text-black text-2xl lg:text-3xl  mb-2 flex flex-col gap-2'>Reza</h2>
          <p className='text-black text-sm lg:text-lg '>{orixa.reza}</p>
        </div>
        <div>
          <p>Player para áudio ou vídeo pode ser inserido aqui.</p>
        </div>
      </div>
    </div>
  );
};

export default Inner;
