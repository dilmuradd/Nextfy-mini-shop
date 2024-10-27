import { ThemeContextT } from "@/Context/ThemeContext";
import { useContext, useEffect, useState,useMemo } from "react";
import CardBlock from "./CardBlock";
import axios from 'axios';
import {
  Skeleton,
} from "@chakra-ui/react"
import PaginationComponet from "./PaginationComponet";
import { PaginationContext } from "@/Context/PaginationContext";
import { SearchContext } from "@/Context/SearchContext";
import { BasketContext } from "@/Context/BasketContext";

const Card = () => {
  const { isHandleTheme } = useContext(ThemeContextT);
  let api = `https://fakestoreapi.in/api/products`
  const [isAllProduct, setIsAllProduct] = useState([]);
let [categoryValue,setcategoryValue] = useState(api) 
  const getProductData = async (apiR) => {
    try {
      let getData = await axios.get(apiR ? apiR : categoryValue)
      setIsAllProduct(getData.data.products);
      setisSkleton(true)
    } catch (error) {
      setisSkleton(false)
      console.log(error);
    }
  };
let [isSkleton,setisSkleton] = useState(false)
  useEffect(() => {
    getProductData();
  }, []);
  useEffect(() => {
    getProductData();
  }, [categoryValue]);


let {PaginCOMP} = useContext(PaginationContext)
useEffect(()=>{


  Fdata()

},[PaginCOMP])
let Fdata = ()=>{
  setcategoryValue(api+"?page="+PaginCOMP)
}

// useEffect(()=>{setSearchValue('')},[getProductData])
let {setSearchValue,SearchValue} = useContext(SearchContext)
let filterSearch = isAllProduct.filter((product)=> product.title.toLowerCase().includes(SearchValue.toLowerCase()))

let {BasketData,setBasketData,BasketGetData} = useContext(BasketContext)


  return (
    <div>
      <div className={`flex border-white scroll_bar p-[5px] items-center md:justify-center gap-[15px] overflow-x-scroll mt-[40px]`}>
        <div onClick={()=>setcategoryValue(api)} className={` ${isHandleTheme ? 'text-black' : 'text-white bg-gray-800'} w-[100px] hover:bg-gray-400 transition-all font-bold cursor-pointer h-[30px] bg-gray-300 flex items-center justify-center rounded-3xl text-blue-950 flex-shrink-0`}>
          <p>All</p>
        </div>

        <div onClick={()=>setcategoryValue(`${api}/category?type=tv`)} className={` ${isHandleTheme ? 'text-black' : 'text-white bg-gray-800'} w-[100px] hover:bg-gray-400 font-bold cursor-pointer h-[30px] bg-gray-300 flex items-center justify-center rounded-3xl text-blue-950 flex-shrink-0`}>
          Tv
        </div>

        <div onClick={()=>setcategoryValue(`${api}/category?type=audio`)} className={` ${isHandleTheme ? 'text-black' : 'text-white bg-gray-800'} w-[100px] hover:bg-gray-400 font-bold cursor-pointer h-[30px] bg-gray-300 flex items-center justify-center rounded-3xl text-blue-950 flex-shrink-0`}>
          Audio
        </div>

        <div onClick={()=>setcategoryValue(`${api}/category?type=laptop`)} className={` ${isHandleTheme ? 'text-black' : 'text-white bg-gray-800'} w-[100px] hover:bg-gray-400 font-bold cursor-pointer h-[30px] bg-gray-300 flex items-center justify-center rounded-3xl text-blue-950 flex-shrink-0`}>
          Laptop
        </div>

        <div onClick={()=>setcategoryValue(`${api}/category?type=mobile`)} className={` ${isHandleTheme ? 'text-black' : 'text-white bg-gray-800'} w-[100px] hover:bg-gray-400 font-bold cursor-pointer h-[30px] bg-gray-300 flex items-center justify-center rounded-3xl text-blue-950 flex-shrink-0`}>
          Mobile
        </div>

        <div onClick={()=>setcategoryValue(`${api}/category?type=gaming`)} className={` ${isHandleTheme ? 'text-black' : 'text-white bg-gray-800'} w-[100px] hover:bg-gray-400 font-bold cursor-pointer h-[30px] bg-gray-300 flex items-center justify-center rounded-3xl text-blue-950 flex-shrink-0`}>
          Gaming
        </div>

        <div onClick={()=>setcategoryValue(`${api}/category?type=appliances`)} className={` ${isHandleTheme ? 'text-black' : 'text-white bg-gray-800'} w-[100px] hover:bg-gray-400 font-bold cursor-pointer h-[30px] bg-gray-300 flex items-center justify-center rounded-3xl text-blue-950 flex-shrink-0`}>
          Appliances
        </div>
      </div>

      <h1 className={`text-center font-bold text-[32px]  mt-[20px] ${isHandleTheme ? 'text-white' : 'text-black'} `}>Mahsulotlar</h1>
    {!isSkleton ?
<div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 sm:px-[100px] gap-5">
<Skeleton  rounded={'30px'} h={'400px'} w={'100%'} />
<Skeleton  rounded={'30px'} h={'400px'} w={'100%'} />
<Skeleton  rounded={'30px'} h={'400px'} w={'100%'} />
<Skeleton  rounded={'30px'} h={'400px'} w={'100%'} />
<Skeleton  rounded={'30px'} h={'400px'} w={'100%'} />
<Skeleton  rounded={'30px'} h={'400px'} w={'100%'} />
<Skeleton  rounded={'30px'} h={'400px'} w={'100%'} />
<Skeleton  rounded={'30px'} h={'400px'} w={'100%'} />
<Skeleton  rounded={'30px'} h={'400px'} w={'100%'} />
<Skeleton  rounded={'30px'} h={'400px'} w={'100%'} />
</div> : 
<div className={` ${filterSearch.length === 0 ? 'flex items-center justify-center' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} mt-[50px]  sm:px-[100px]`}>
{
  filterSearch.length === 0 &&    <div className="flex  flex-col items-center justify-center h-[40vh]">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16 text-red-600" 
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
  <p className="mt-4 text-lg text-gray-600">Ma'lumot topilmadi</p>
</div>
}

        {filterSearch.map(value => (
          <CardBlock key={value.id} img={value.image} value={value} title={value.title} price={value.price} top={value.popular} />
        ))}
      </div>
      }
{/* <Pagination/> */}
{
  filterSearch.length === 0 ? '' : <PaginationComponet/>
}


    </div>
  );
}

export default Card;
