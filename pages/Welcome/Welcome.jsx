import { ThemeContextT } from '@/Context/ThemeContext';
import { useContext } from 'react';
import { TypeAnimation } from 'react-type-animation'; // Agar ishlatmoqchi bo'lsangiz, kiritishingiz mumkin

const Welcome = () => {
  const { isHandleTheme } = useContext(ThemeContextT);

  return (
    <div className="flex items-center pt-[50px] px-[10px] flex-col">
      <h1 className={`font-bold text-[36px] mt-[90px] ${isHandleTheme ? 'text-white' : 'text-black'}`}>
        Nexify
      </h1>
      
      <h1 className={`text-[28px] text-center ${isHandleTheme ? 'text-white' : 'text-black'}`}>
        Zamonaviy Texnologiyalar va Gadjetlar Markazi
      </h1>

      <p className={`text-center mt-[20px] px-[30px] ${isHandleTheme ? 'text-white' : 'text-black'} font-mono`}>
        Nexify do'koniga xush kelibsiz! Bu yerda texnologiya va uslub uyg'unlashgan. 
        Eng so'nggi gadjetlar va aksessuarlarni toping. Yangi smartfonlar, aqlli uy qurilmalari 
        va ko'plab zamonaviy mahsulotlar sizni kutmoqda. Sifat, arzon narxlar va 
        mijozlar mamnunligi biz uchun birinchi o'rinda. Nexify bilan texnologiyani yangicha his eting!
      </p>
    </div>
  );
}

export default Welcome;
