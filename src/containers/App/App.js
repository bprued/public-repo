import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import './App.scss';

import Table from "../../componnents/Table";
import Pagination from "../../componnents/Pagination";

const ROW_PER_PAGE = 10

const App = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios.get(
      "https://api.github.com/repositories"
    ).then((res) => {
      setTotalPage(res.data.length/ROW_PER_PAGE)
      return res.data
    })
  );

  if (error) return "An error has occurred: " + error.message;

  const getDataPerPage = (page) => {
    let dataPage = []
    page = page -1
    if(page >= 0 && page < totalPage) {
      dataPage = data.slice(page*ROW_PER_PAGE, ((page+1)*ROW_PER_PAGE))
    }
    return dataPage
  }

  return (
    <div className="app-container">
      {isLoading? <h1>Loading...</h1> : 
      <>
        <h1>Github Public Repositories</h1>
        {isFetching ? "Updating..." : 
          <>
            <Table data={getDataPerPage(currentPage)} />
            <Pagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />
          </>
        }
      </>
      }
    </div>
  );
}

export default App;
