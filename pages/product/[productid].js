import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../../components/card";

export default function ProductDetail({ data, recomended }) {
  const [MainImage, setMainImage] = useState("");
  useEffect(() => {
    if (data) {
      setMainImage(data.images[0]);
    }
  }, [data]);
  return (
    <>
      <Head>
        <title>Products - {data.title}</title>
      </Head>
      {data && (
        <div className="container mt-5 mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <div className="images p-3">
                      <div className="text-center p-4">
                        <img
                          id="main-image"
                          src={MainImage}
                          width="250"
                          height="auto"
                        />
                      </div>

                      <div className="thumbnail text-center">
                        {data.images.map((image) => {
                          return (
                            <img
                              src={image}
                              width="70"
                              height="auto"
                              className="mx-1"
                              onClick={() => setMainImage(image)}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product p-4">
                      <div className="mt-4 mb-3">
                        <span className="text-uppercase text-muted brand">
                          {data.brand}
                        </span>
                        <h5 className="text-uppercase">{data.title}</h5>
                        <div className="price d-flex flex-row align-items-center">
                          <div className="ml-2">
                            <span className="dis-price fw-bold">
                              ${data.price}
                            </span>
                            <span className="ms-2">
                              {data.discountPercentage}% OFF
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="text-danger mb-1 me-2">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <span>{data.rating}</span>
                        </div>
                        <div className="my-1 text-muted small">
                          <span className="text-primary"> • </span>
                          <span>In-Stock&nbsp;{data.stock}</span>
                          <br />
                          <span className="text-primary"> • </span>
                          <span>Brand-By&nbsp;{data.brand}</span>
                          <br />
                          <span className="text-primary"> • </span>
                          <span>Category&nbsp;-&nbsp;{data.category}</span>
                          <br />
                        </div>
                      </div>
                      <p className="about">{data.description}</p>
                      <div className="cart mt-4 align-items-center">
                        <Link
                          className="btn btn-primary text-uppercase mr-2 px-4"
                          href="/greetings"
                        >
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {recomended && (
        <section>
          <div className="container pb-5 pt-3">
            <h3 className="text-danger mb-5">Recommended Products</h3>
            <div className="row justify-content-center">
              {recomended.map((item) => {
                return <Card data={item} key={item.id} />;
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { productid } = params;
  let data, recomended;
  try {
    const response = await fetch(`https://dummyjson.com/products/${productid}`);
    data = await response.json();

    const res = await fetch(
      `https://dummyjson.com/products/category/${data.category}?limit=4`
    );
    recomended = await res.json();
  } catch (error) {
    console.log(error);
  }
  return { props: { data, recomended: recomended.products } };
}
