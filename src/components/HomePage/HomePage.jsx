import React, { useState } from "react";
import NavHeader from "./NavBar/NavHeader";

import SearchProduct from "./NavBar/SearchProduct";
import ProductDisplay from "./ProductDisplay";
import FilterList from "./FilterList";
const HomePage = () => {
  const JsonData = [
    {
      id: 1,
      name: "Apple",
      category: "Fruits",
      price: 180,
      unit: "kg",
      stock: 10,
      image: "/images/apple.jpg",
    },
    {
      id: 2,
      name: "Banana",
      category: "Fruits",
      price: 60,
      unit: "dozen",
      stock: 15,
      image: "/images/banana.jpg",
    },
    {
      id: 3,
      name: "Orange",
      category: "Fruits",
      price: 100,
      unit: "kg",
      stock: 12,
      image: "/images/orange.jpg",
    },
    {
      id: 4,
      name: "Mango",
      category: "Fruits",
      price: 120,
      unit: "kg",
      stock: 8,
      image: "/images/mango.jpg",
    },
    {
      id: 5,
      name: "Grapes",
      category: "Fruits",
      price: 90,
      unit: "kg",
      stock: 10,
      image: "/images/grapes.jpg",
    },
    {
      id: 6,
      name: "Potato",
      category: "Vegetables",
      price: 35,
      unit: "kg",
      stock: 20,
      image: "/images/potato.jpg",
    },
    {
      id: 7,
      name: "Onion",
      category: "Vegetables",
      price: 40,
      unit: "kg",
      stock: 18,
      image: "/images/onion.jpg",
    },
    {
      id: 8,
      name: "Tomato",
      category: "Vegetables",
      price: 30,
      unit: "kg",
      stock: 0,
      image: "/images/tomato.jpg",
    },
    {
      id: 9,
      name: "Carrot",
      category: "Vegetables",
      price: 50,
      unit: "kg",
      stock: 14,
      image: "/images/carrot.jpg",
    },
    {
      id: 10,
      name: "Spinach",
      category: "Vegetables",
      price: 25,
      unit: "bunch",
      stock: 9,
      image: "/images/spinach.jpg",
    },
    {
      id: 11,
      name: "Milk",
      category: "Dairy",
      price: 30,
      unit: "500 ml",
      stock: 15,
      image: "/images/milk.jpg",
    },
    {
      id: 12,
      name: "Curd",
      category: "Dairy",
      price: 35,
      unit: "400 g",
      stock: 12,
      image: "/images/curd.jpg",
    },
    {
      id: 13,
      name: "Butter",
      category: "Dairy",
      price: 60,
      unit: "100 g",
      stock: 10,
      image: "/images/butter.jpg",
    },
    {
      id: 14,
      name: "Paneer",
      category: "Dairy",
      price: 90,
      unit: "200 g",
      stock: 8,
      image: "/images/paneer.jpg",
    },
    {
      id: 15,
      name: "Eggs",
      category: "Dairy",
      price: 90,
      unit: "6 pieces",
      stock: 20,
      image: "/images/eggs.jpg",
    },
    {
      id: 16,
      name: "Basmati Rice",
      category: "Grains",
      price: 120,
      unit: "kg",
      stock: 25,
      image: "/images/rice.jpg",
    },
    {
      id: 17,
      name: "Wheat Flour",
      category: "Grains",
      price: 55,
      unit: "kg",
      stock: 20,
      image: "/images/wheat-flour.jpg",
    },
    {
      id: 18,
      name: "Toor Dal",
      category: "Grains",
      price: 140,
      unit: "kg",
      stock: 12,
      image: "/images/toor-dal.jpg",
    },
    {
      id: 19,
      name: "Moong Dal",
      category: "Grains",
      price: 120,
      unit: "kg",
      stock: 14,
      image: "/images/moong-dal.jpg",
    },
    {
      id: 20,
      name: "Poha",
      category: "Grains",
      price: 50,
      unit: "kg",
      stock: 16,
      image: "/images/poha.jpg",
    },
    {
      id: 21,
      name: "Potato Chips",
      category: "Snacks",
      price: 20,
      unit: "pack",
      stock: 30,
      image: "/images/chips.jpg",
    },
    {
      id: 22,
      name: "Chocolate Biscuits",
      category: "Snacks",
      price: 30,
      unit: "pack",
      stock: 25,
      image: "/images/biscuits.jpg",
    },
    {
      id: 23,
      name: "Namkeen",
      category: "Snacks",
      price: 40,
      unit: "pack",
      stock: 18,
      image: "/images/namkeen.jpg",
    },
    {
      id: 24,
      name: "Chocolate Bar",
      category: "Snacks",
      price: 40,
      unit: "piece",
      stock: 22,
      image: "/images/chocolate.jpg",
    },
    {
      id: 25,
      name: "Cookies",
      category: "Snacks",
      price: 60,
      unit: "pack",
      stock: 12,
      image: "/images/cookies.jpg",
    },
  ];
  const [product, setProduct] = useState(JsonData);
  console.log("product", product.length);
  const [allProducts] = useState(JsonData);

  console.log("product.length", product.length);
  return (
    <div>
      <section className="home-page-header">
            <NavHeader></NavHeader>
            <SearchProduct
              productData={product}
              allProducts={allProducts}
              setProductData={setProduct}
            />
          </section>
          <section>
            <FilterList
              setData={setProduct}
              allProducts={allProducts}
            ></FilterList>
          </section>
      {product.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📦</div>
          <h3>No Data Found</h3>
          <p>Try changing your category or search for another product.</p>
        </div>
      ) : allProducts.length === 0 ? (
        <div className="error-state">
          <div className="error-icon">⚠️</div>
          <h3>Something went wrong</h3>
          <p>We couldn't load the products. Please try again.</p>
        </div>
      ) : (
        <>
          <section>
            <ProductDisplay product={product} />
          </section>
        </>
      )}
    </div>
  );
};

export default HomePage;
