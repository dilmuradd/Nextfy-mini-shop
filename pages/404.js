import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex bg-[#0b052d] flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-xl text-white">Bu sahifa topilmadi!</p>
      <p className="mt-2 text-gray-300">Siz qidirayotgan sahifa mavjud emas.</p>
      <Link className='mt-[40px]' href="/">
        <span className=" mt-[40px] px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Bosh sahifaga qaytish
        </span>
      </Link>
    </div>
  );
};

export default Custom404;
