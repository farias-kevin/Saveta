import "./paginationSection.css"
import ButtonBase from "../../components/button/button";
import { useState } from "react";
import { useEffect } from "react";
import createPagination from "../../utils/createPagination";


const PaginationSection = ({css, valuePrev, valueNext, valueData, numItem, numPagination}) => {
  // constantes
  const numData = valueData.length;
  const pageNum = Math.ceil(numData / numItem);
  const [selectPage, setSelectPage] = useState(1);
  const [pageArray, setPageArray] = useState( [] );

  useEffect(()=> {
    console.info(pageArray[pageArray.length - 1] == pageNum)
    if(pageNum > 1){
      setPageArray( createPagination(numPagination, selectPage, pageNum, pageArray) );
    }else{
      setPageArray( [1] );
    }
  }, [valueNext])

  function changePage(number){
    const num = number * numItem;
    setSelectPage(number);

    valuePrev.set( Math.abs(num - numItem) )
    valueNext.set( num );
    /*
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    */
  }
  return (
    <div className={`${css}`}>
      <ButtonBase
        title="<<"
        fn={() => changePage(1)}
        css={`${css}_button`}
      />
      {pageArray.map(elem =>
        <ButtonBase
          key={crypto.randomUUID()}
          title={elem}
          fn={() => changePage(elem)}
          dataAttribute={ (numItem * elem) === valueNext.get ? "on" : "off"}
          css={`${css}_button`}
        />
      )}
      <ButtonBase
        title=">>"
        fn={() => changePage(pageNum)}
        css={`${css}_button`}
      />
    </div>
  )
}

export default PaginationSection;
