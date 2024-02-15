const createPagination = (numPagination, selectPage, pageNum, pageArray) => {
  const result = [...Array(numPagination)].map( (_, index) => {
    if(selectPage === 1){
      return index + 1;
    }else if(selectPage === pageNum ){
      return selectPage + index - numPagination + 1;
    }else if(selectPage > 1 && pageArray[pageArray - 1] == pageNum){
      return selectPage + index - numPagination + 1;
    }else{
      return Math.abs( selectPage + index - 1);
    }
  })
  return result;
}

export default createPagination;
