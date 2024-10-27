const Footer = () => {
  return (
    <footer className="bg-[#0b052d] text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Nexify. Barcha huquqlar himoyalangan.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="###" className="text-gray-400 hover:text-white">
            Maxfiylik siyosati
          </a>
          <a href="#####" className="text-gray-400 hover:text-white">
            Foydalanish shartlari
          </a>
          <a href="####" className="text-gray-400 hover:text-white">
            Aloqa
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
