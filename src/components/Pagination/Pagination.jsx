import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const  Pagination = (props) => {
    
    const pageChangeHandler = (data) => {
        console.log({
            page: Number(data.selected)
        })
        props.onChangePage(Number(data.selected))
    }
  return (

    <ReactPaginate
    previousLabel = {"previous"}
    nextLabel = {"next"}
    breakLabel = {"..."}
    pageCount = {30}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    onPageChange={pageChangeHandler}
    containerClassName={"pagination justify-content-center"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextClassName={"page-item"}
    nextLinkClassName ={"page-link"}
    breakClassName={"page-link"}
    activeClassName={"active"}
    
    />
  );
}

export default Pagination;