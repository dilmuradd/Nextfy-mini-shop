import { PaginationContext } from '@/Context/PaginationContext';
import React, { useContext, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
const PaginationComponet = () => {
    const totalPages = 3;
    const [currentPage, setCurrentPage] = useState(0);
  let {setPaginCOMP} = useContext(PaginationContext)
    function handlePageChange(page) {
      setCurrentPage(page);
      setPaginCOMP(page)
    }
  
    return (
        <div className='flex items-center justify-center mt-[60px] pb-[50px]'>

      <ResponsivePagination
        total={totalPages}
        current={currentPage}
        onPageChange={page => handlePageChange(page)}
        />
        </div>
    );
}

export default PaginationComponet
