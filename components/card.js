import Link from "next/link";

export default function Product({ data }) {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="card">
        <div className="d-flex justify-content-center align-items-center mt-3">
          <img src={data.images[0]} width="200px" height="150px" alt="Laptop" />
        </div>
        <div className="card-body pb-0">
          <div>
            <p>
              <span className="text-dark">{data.title}</span>
            </p>
            <p className="small text-muted mt-0">{data.category}</p>
          </div>
          <div>
            <div className="d-flex flex-row justify-content-start mt-1 text-danger">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="small text-muted">{data.ratings}</p>
          </div>
          <div className="d-flex justify-content-between mt-0">
            <p>${data.price}</p>
          </div>
          <div className=" pb-2 mb-1">
            <Link href={`/product/${data.id}`} className="btn btn-primary">
              Buy now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
