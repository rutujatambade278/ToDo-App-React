import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

const PaginationControls = ({ page, totalPages, onPageChange }) => {
  const visiblePageNumbers = 3; // Number of visible pages before and after the current page

  const handleFirst = () => onPageChange(1);
  const handlePrev = () => onPageChange(page - 1);
  const handleNext = () => onPageChange(page + 1);
  const handleLast = () => onPageChange(totalPages);

  // Helper to generate the page buttons
  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(page - visiblePageNumbers, 1);
    const endPage = Math.min(page + visiblePageNumbers, totalPages);

    if (startPage > 1) pages.push(1); // Always show the first page

    if (startPage > 2) pages.push('...'); // Ellipsis if there are hidden pages

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) pages.push('...'); // Ellipsis after current range

    if (endPage < totalPages) pages.push(totalPages); // Always show the last page

    return pages;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <ButtonGroup>
        <Button onClick={handleFirst} disabled={page === 1}>
          First
        </Button>
        <Button onClick={handlePrev} disabled={page === 1}>
          Previous
        </Button>

        {getPageNumbers().map((p, index) => (
          <Button
            key={index}
            onClick={() => typeof p === 'number' && onPageChange(p)}
            disabled={typeof p !== 'number'}
            variant={p === page ? 'contained' : 'outlined'}
          >
            {p}
          </Button>
        ))}

        <Button onClick={handleNext} disabled={page === totalPages}>
          Next
        </Button>
        <Button onClick={handleLast} disabled={page === totalPages}>
          Last
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default PaginationControls;
