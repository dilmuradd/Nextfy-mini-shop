import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { FaMinus } from "react-icons/fa6";
import { SlBasketLoaded } from "react-icons/sl";
import { LuSunMoon } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { ThemeContextT } from "@/Context/ThemeContext";
import { SearchContext } from "@/Context/SearchContext";
import { BasketContext } from "@/Context/BasketContext";
import { FaPlus } from "react-icons/fa6";
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
const {isHandleTheme,setIsHandletheme} = useContext(ThemeContextT)
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
const handletheme = (value)=>{
    setIsHandletheme(value)
}
let {setSearchValue} = useContext(SearchContext)
let handlesearch = (value)=>{
setSearchValue(value)
}
let {BasketData,AddCount,RemoveCount,RemoveCart,setBasketData,ProductPrice,} = useContext(BasketContext)

  return (
    <Box display={'flex'} position={'fixed'} w={'100%'} zIndex={'80'} className="shadow-xl" p={'15px'} alignItems={'center'} transition={'0.3s'} bg={isHandleTheme ? '#0b053d' :'#eee'} justifyContent={'space-between'} gap={'20px'}>
      <Box textColor={ isHandleTheme ? 'white' : 'black'}>
        <h1 className="font-bold text-[32px] ">Nexify</h1>
      </Box>

      <Box display={'flex'} alignItems={'center'} gap={'25px'}>
        <Box
          display={'flex'}
          border={ isHandleTheme ? '2px solid white' : '2px solid black'}
          pr={'10px'}
          rounded={'12px'}
          _hover={{ border: '2px solid blue' }}
          transition={'0.3s'}
          alignItems={'center'}
          gap={'5px'}
         
        >
          <Input
            placeholder="Search"
            onChange={(e)=>handlesearch(e.target.value)}
            textColor={'white'}
            rounded={'12px'}
            border={'none'}
            outline={'none'}
            _focusVisible={{
              outline: "none",
            }}
            color={isHandleTheme ? 'white' : 'black'}
          />
          <FaSearch className="text-[28px] font-bold "  color={isHandleTheme ? 'white' : 'black' } />
        </Box>
<div className="relative">

        <button  onClick={openDrawer}  className={ `${isHandleTheme ? 'text-white' :'text-black'} inline-block text-[28px]`} >
          <SlBasketLoaded />
        </button>
       {
BasketData ?
        <div className="w-[15px] flex text-[9px] cursor-pointer items-center justify-center text-white h-[15px] rounded-full bg-red-700 absolute bottom-[3px] left-[2px]">
{BasketData.length}
        </div>
      : <div></div>
      }
</div>
       {
       isHandleTheme ? <button onClick={()=>handletheme(false)} className="text-white hover:rotate-[40deg] transition-[5s] text-[28px] hidden md:inline-block">
          <LuSunMoon />
        </button> : 
        <button onClick={()=>handletheme(true)} className="text-black hover:rotate-[-40deg] transition-[5s] text-[28px] hidden md:inline-block">
        <FaRegMoon />
      </button>
        }

        {/* <Box className="md:hidden inline-block" cursor={'pointer'}>
          <FaBars color={isHandleTheme ? 'white' : 'black'} className="font-bold text-white text-[32px]" />
        </Box> */}
      </Box>

      <Drawer isOpen={isDrawerOpen} placement="right"   onClose={closeDrawer}>
        <DrawerOverlay   />
        <DrawerContent  bg={isHandleTheme ? '#0b053d' : 'white'} >
          <DrawerCloseButton textColor={isHandleTheme ? 'white' : 'black'} />
          <DrawerHeader color={isHandleTheme ? 'white' : 'black'} className="text-white flex items-center  gap-5">Savat  
          {
       isHandleTheme ? <button onClick={()=>handletheme(false)} className="text-white hover:rotate-[40deg] transition-[5s] text-[28px] inline-block  md:hidden">
          <LuSunMoon />
        </button> : 
        <button onClick={()=>handletheme(true)} className="text-black hover:rotate-[-40deg] transition-[5s] text-[28px] inline-block  md:hidden">
        <FaRegMoon />
      </button>
        }

          </DrawerHeader>
{BasketData && BasketData.length !== 0 ?

          <DrawerBody>

{
  BasketData.map(item=>(
    <div key={item.id} className="flex items-center justify-between bg-white shadow-md rounded-lg p-2 mb-2 transition-transform transform hover:scale-105">
    <div className="flex items-center">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg border border-gray-200 mr-2" />
        <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
            <p className="text-[12px] text-gray-600">${item.price ? item.price.toFixed(0): '0'}</p>
        </div>
    </div>
    <div className="flex items-center">
        <button 
        onClick={()=>RemoveCount(item)}
        className="bg-gray-200 text-gray-700 py-1 px-1 rounded hover:bg-gray-300 transition">
            <FaMinus />
        </button>
        <span className="text-sm mx-1">{item.count}</span> 
        <button 
        onClick={()=>AddCount(item)}
        className="bg-gray-200 text-gray-700 py-1 px-1 rounded hover:bg-gray-300 transition">
            <FaPlus />
        </button>
    </div>
    <button  
    onClick={()=>RemoveCart(item)}
    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition text-xs">
        Remove
    </button>
</div>
  ))
}
<div className="absolute bottom-[80px] ">
  <div className="flex items-center justify-between px-[10px] gap-[120px]">

  <h1 className="text-white">Jami summa:</h1>
  <h1 className="text-white">{ProductPrice}$</h1>
  </div>

</div>
          
          </DrawerBody> : <DrawerBody display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
            <img className="w-[100px]" src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/not_available-512.png" alt="" />
<h1  className={`text-[26px] ${isHandleTheme ? 'text-white':'text-black'} text-center`}>
Malumot yo'q
</h1>

          </DrawerBody>
          }

          <DrawerFooter>
          <Button
    onClick={() => {
      setBasketData([])
        localStorage.clear();
        closeDrawer();
    }}
    _hover={''}
    color={isHandleTheme ? 'white' : 'black'}
    variant="outline"
    mr={3}
>
    Tozalash
</Button>

            <Button bg={'#07c621'} textColor={'white'} _hover={{bg:'#07c620'}} display={'flex'} alignItems={'center'} gap={'3px'}>Buyrutma Berish  <FaArrowRight /> </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
{/*       
        <div className={`bg-green-600  flex items-center justify-start fixed w-[400px] transition-all h-[60px] rounded-md ${isToast ? `right-[20px]` : 'right-[-400px]'}  bottom-[20px]`}>
        <h1 className="ml-[14px] text-white font-semibold">
          Savatga Saqlandi 
        </h1>
        <CiCircleCheck className="text-white text-[32px] ml-[5px] font-bold" />
        </div> 
       */}

    </Box>
  );
};

export default Header;
