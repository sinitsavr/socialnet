import React, {useState} from "react";
import styles from "./Pagination.module.css";
import cn from "classnames"

const Pagination = ({pageSize, totalItemsCount, currentPage, onPageChanged, portionSize = 4})=> {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++){pages.push(i)}
    let portionCount = Math.ceil(pagesCount/ portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = ((portionNumber - 1) * portionSize) + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (
      <div className={styles.paginator}>

      {portionNumber > 1 &&
      <button onClick={() => setPortionNumber( portionNumber - 1 )}>
         PREV </button>
      }

      {pages
         .filter( pageF => {
            return pageF >= leftPortionPageNumber
               && pageF <= rightPortionPageNumber
         } )
         .map( page => {

            return (
               <span
                  className={cn(
                     styles.pageNumber,
                     {[styles.selectedPage]: currentPage === page} )
                  }
                  key={page}
                  onClick={() => {
                     onPageChanged( page );
                  }}>
         {page}
         </span>)

         } )}

      {portionNumber < portionCount &&
      <button onClick={() => setPortionNumber( portionNumber + 1 )}>
         NEXT </button>
      }

   </div>
    )
  }

export default Pagination;
