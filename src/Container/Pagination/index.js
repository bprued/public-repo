import './pagination.scss'

const Pagination = ({ totalPage, currentPage, setCurrentPage }) => {
  const renderPageNumber = () => {
    let pageNumber = [];
    for (let i = 1; i <= totalPage; i++) {
      pageNumber[i] = (
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={i === currentPage? 'active' : ''}
        >
          {i}
        </button>
      );
    }
    return pageNumber;
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        {"<"}
      </button>
      {renderPageNumber()}
      <button
        disabled={currentPage + 1 > totalPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
