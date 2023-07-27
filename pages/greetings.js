import Head from "next/head";
import Product from "../components/productCard";

export default function Landing({ data }) {
  return (
    <>
      <Head>
        <title>Greetings - Step 3</title>
      </Head>
      <div id="greeting-pack">
        <div>
          <h5 className="text-center">Congratulations</h5>
          <span className="mx-2">|</span>
          <h5 className="text-center">Your product have been added to cart</h5>
        </div>
      </div>
      <style jsx>{`
        #greeting-pack {
          width: 100%;
          height: 50vh;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
        #greeting-pack div {
          display: flex;
        }
      `}</style>
    </>
  );
}
