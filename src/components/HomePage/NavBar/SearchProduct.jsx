import React, { useEffect, useState } from "react";
import SearchBar from "../../SearchBar";

const SearchProduct = ({ productData, allProducts, setProductData }) => {
  const [searchVal, setSearchVal] = useState("");

  const handleSearch = () => {
    const filterData = productData.filter((data) => {
      return data.name.toLowerCase().includes(searchVal.toLowerCase());
    });
    setProductData(filterData);
    console.log("filterdata", filterData.length);
  };

  useEffect(() => {
    if (searchVal.trim().length === 0) {
      setProductData(allProducts);
    }
  }, [searchVal, allProducts]);

  console.log(
    "searchVal",
    searchVal.trim().length,
    "allProducts",
    allProducts.length
  );
  return (
    <div className="search-product-main">
      <SearchBar search={searchVal} setSearch={setSearchVal}></SearchBar>
      <button
        onClick={handleSearch}
        disabled={searchVal.trim().length < 2}
        className={`search-button ${
          searchVal.trim().length < 2 && "search-disabled"
        }`}
      >
        Search
      </button>
    </div>
  );
};

export default SearchProduct;
