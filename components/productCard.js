import Link from "next/link";

export default function Product({ data }) {
  return (
    <div className="row justify-content-center mb-4">
      <div className="col-md-12 col-xl-10">
        <div className="card shadow-0 border rounded-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                  <img src={data.images[0]} className="w-100 img-fluid" />
                  <a href="#!">
                    <div className="hover-overlay">
                      <div className="mask"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <h5>{data.title}</h5>
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
                <p className="mb-4 mb-md-0">{data.description}</p>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">${data.price}</h4>
                  <span className="ms-2 text-danger">
                    {data.discountPercentage}% &nbsp;OFF
                  </span>
                </div>
                <h6 className="text-success">Free shipping</h6>
                <div className="d-flex flex-column mt-4">
                  <Link
                    href={`/product/${data.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Details
                  </Link>
                  <Link
                    className="btn btn-outline-primary btn-sm mt-2"
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
  );
}
