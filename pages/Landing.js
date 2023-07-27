import Head from "next/head";
import Product from "../components/productCard";
import { useState } from "react";

export default function Landing({ data }) {
  const [Products, setProducts] = useState(data);
  const [query, setquery] = useState("");

  const handlesearch = async (e) => {
    e.preventDefault();
    if (query === "") {
      const response = await fetch("https://dummyjson.com/products/");
      data = await response.json();
      setProducts(data.products);
    } else {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      data = await response.json();
      setProducts(data.products);
    }
  };
  return (
    <>
      <Head>
        <title>ALL PRODUCTS</title>
      </Head>
      <section className="my-0">
        <div className="container py-5">
          <div className="row justify-content-center">
            <h1 className="mb-3 text-center text-danger">
              Grab Exclusive Deals on Latest Products
            </h1>
            <form className="w-75" onSubmit={(e) => handlesearch(e)}>
              <input
                className="form-control mb-4"
                placeholder="Search Products"
                onChange={(e) => setquery(e.target.value)}
              />
            </form>
          </div>
          {Products.map((item) => {
            return <Product data={item} key={item.id} />;
          })}
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  let data;
  try {
    const response = await fetch("https://dummyjson.com/products");
    data = await response.json();
  } catch (error) {
    console.log(error);
  }
  return { props: { data: data.products } };
}
