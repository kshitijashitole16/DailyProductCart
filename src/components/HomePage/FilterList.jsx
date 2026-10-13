import React, { useEffect, useState } from 'react'

const FilterList = ({ setData ,allProducts}) => {
    const[category , setCategory] = useState([])
    const[selectedCat , setSelectedCat] = useState('All') 
  
    useEffect(() => {
        const dataFilter = ['All',
            ...new Set(allProducts.map(item => item.category))
        ];
      
        setCategory(dataFilter)
    }, [allProducts])


 
    useEffect(() => {
       const filterData= selectedCat.toUpperCase() === "ALL" ? allProducts : allProducts.filter(item=>item.category.toUpperCase()===selectedCat.toUpperCase())
       setData(filterData)
    }, [selectedCat])
    

    
  return (
    <div className='filter-category-main'>
     {category.map((catData,idx)=>(
     <div className='selected-filter' id={idx} key={catData} onClick={()=>setSelectedCat(catData)}>{catData}</div>
     ))}
    </div>
  )
}

export default FilterList