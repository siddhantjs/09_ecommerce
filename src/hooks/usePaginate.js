import { useMemo } from "react";

const usePaginate = (product,itemsPerPage,page)=>{
    // total pages
    const totalPages = Math.ceil(product.length/itemsPerPage);

    // subset of actual array | small piece of data instead of bunch of data
    const currentItems = useMemo(()=>{
        let start = (page-1)*itemsPerPage;
        let end = start + itemsPerPage;
        return product.slice(start,end);
    },[product,itemsPerPage,page]);

    // totalpages with piece of data
    return {totalPages, currentItems};
}

export default usePaginate;