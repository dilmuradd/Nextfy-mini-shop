import { useContext } from "react";
import CardBox from "./Card/Card";
import Welcome from "./Welcome/Welcome";
import { ThemeContextT } from "@/Context/ThemeContext";
import Head from "next/head";

const Index = () => {
  const { isHandleTheme } = useContext(ThemeContextT); // To'g'ri destructuring
  
  return (
    <div className={`${isHandleTheme ? 'bg-[#0b052d]' : 'bg-white'}`}>
      <Head>
        <title>Bosh Sahifa - Nextfy</title>
        <meta name="description" content="Nextfy - Eng yangi mahsulotlar va maxsus takliflar bilan tanishing!" />
        <meta name="keywords" content="do'kon, mahsulotlar, yangi, chegirmalar, Nextfy" />
        <meta name="author" content="Sizning Ismingiz" />
        <meta property="og:title" content="Bosh Sahifa - Nextfy" />
        <meta property="og:description" content="Nextfy - Eng yangi mahsulotlar va maxsus takliflar bilan tanishing!" />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.nextfy.com/" />
      </Head>
      <Welcome />
      <CardBox />
    </div>
  );
};

export default Index; // Katta harf bilan
