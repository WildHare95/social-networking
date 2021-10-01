import cn from "classnames"
import React,{useEffect, useState} from "react";
import style from './Paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, props, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    debugger
    return (
        <div className={style.paginator}>
            {
                portionNumber > 1 &&
                <button className={style.button} onClick={() => setPortionNumber(portionNumber - 1)}>Previous Page</button>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return (
                            <span
                                className={
                                    cn({
                                        [style.selectedPage]: currentPage === p
                                    }, style.pageNumber)
                                }
                                onClick={() => {
                                    onPageChanged(p)
                                }}
                            >
                                {p}
                            </span>
                        )
                    })
            }
            {
                portionNumber < portionCount &&
                <button className={style.button} onClick={() => setPortionNumber(portionNumber + 1)}>Next Pages</button>
            }
        </div>
    )
}

export default Paginator
