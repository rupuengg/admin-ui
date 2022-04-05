import React from 'react';
import './Pagination.css';

export interface IPagination {
  totalItems: number;
  perPageItem: number;
  onPageChange: (page: number) => void;
}

function getPagesShow(currentPage: number, totalPages: number): number[] {
  const pages: number[] = [];

  let startPage = currentPage - 3;
  let endPage = currentPage + 3;

  startPage = Math.max(1, currentPage - 3);
  endPage = Math.min(currentPage + 3, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
}

export const Pagination = (props: IPagination) => {
  const { totalItems, perPageItem, onPageChange } = props;
  const [currentPage, setCurrentPage] = React.useState(1);

  if (totalItems === 0) {
    return null;
  }

  let totalPages: number = 0;
  if (totalItems % perPageItem === 0) {
    totalPages = totalItems / perPageItem;
  } else {
    totalPages = Math.floor((totalItems + perPageItem - 1) / perPageItem);
  }

  const handlePageChange = (e: any, nextPage: any) => {
    let newPage: number = -1;
    if (typeof nextPage === 'number') {
      newPage = nextPage;
    } else if (typeof nextPage === 'string' && nextPage === '+' && (currentPage + 1) <= totalPages) {
      newPage = currentPage + 1;
    } else if (typeof nextPage === 'string' && nextPage === '-' && currentPage > 1) {
      newPage = currentPage - 1;
    } else if (typeof nextPage === 'string' && nextPage === 'first' && 1 < totalPages) {
      newPage = 1;
    } else if (typeof nextPage === 'string' && nextPage === 'last' && totalPages > currentPage) {
      console.log('last');
      newPage = totalPages;
    }

    if (newPage !== -1 && currentPage !== newPage) {
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  }

  const pages: number[] = getPagesShow(currentPage, totalPages);

  return (
    <div className="pagination">
      <ul>
        {pages.length > 2 && <li onClick={e => handlePageChange(e, 'first')}>&#8810;</li>}
        {pages.length > 2 && <li onClick={e => handlePageChange(e, '-')}>&lt;</li>}
        {pages.length > 2 && pages.map(item => <li key={item} className={item === currentPage ? 'active' : ''} onClick={e => handlePageChange(e, item)}>{item}</li>)}
        {pages.length > 2 && <li onClick={e => handlePageChange(e, '+')}>&gt;</li>}
        {pages.length > 2 && <li onClick={e => handlePageChange(e, 'last')}>&#8811;</li>}
      </ul>
    </div>
  );
}

export default Pagination;