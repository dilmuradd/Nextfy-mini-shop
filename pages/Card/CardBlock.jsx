import { BasketContext } from '@/Context/BasketContext';
import { ThemeContextT } from '@/Context/ThemeContext';
import { useContext, useState } from 'react';
import { FaCheck } from "react-icons/fa6";
const CardBlock = ({ title, img,price,top ,value }) => {
  const { isHandleTheme } = useContext(ThemeContextT);
  let {BasketData,setBasketData,BasketGetData,isToast,setisToast} = useContext(BasketContext)
let [isBtn,setisBtn] = useState(false)
  return (
    <div className={`relative m-5 h-[360px] flex flex-col overflow-hidden rounded-lg shadow-md ${isHandleTheme ? 'border border-gray-200 bg-white' : 'border border-gray-700 shadow-xl bg-gray-800'}`}>
      
      <div className="relative flex h-48 overflow-hidden rounded-t-lg bg-white" >
        <img className="object-contain w-full" src={img} alt="product" />
{
top ? <span className="absolute top-2 left-2 bg-red-600 text-white text-sm font-semibold rounded-full px-2">TOP</span> : ''
}

      </div>
      <div className={`p-5 ${isHandleTheme ? 'text-black' : 'text-white'}`}>
        <a href="#">
          <h5 className={`text-[22px] font-bold ${isHandleTheme ? 'text-gray-900' : 'text-white'} h-[40px] overflow-hidden`}>{title}</h5>
        </a>
        <div className="mt-2 flex items-center justify-between">
          <p>
            <span className={`text-2xl font-semibold ${isHandleTheme ? 'text-gray-900' : 'text-white'}`}>${price}</span>
           
          </p>
          <div className="flex items-center">
            <span className="ml-2 bg-yellow-200 px-2 text-xs font-semibold rounded">5.0</span>
          </div>
        </div>
        {
          !isBtn ? <button
          onClick={() => {
            BasketGetData(value); 
            setisBtn(true)
        }}
            className={`mt-4 flex items-center w-full justify-center rounded-md ${isHandleTheme ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 hover:bg-gray-400'} px-4 py-2 text-sm font-medium ${isHandleTheme ? 'text-white' : 'text-black'} transition duration-200`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Savatga Qo'shish
          </button> : <button
     
          className={`mt-4 flex items-center w-full justify-center border h-[35px] border-red-600 rounded-md transition duration-200`}
        >
          <FaCheck className='mr-[10px]' />
         Savatga Qo`shildi
        </button>
        }
        
        
      </div>

    
    </div>
  );
};

export default CardBlock;
