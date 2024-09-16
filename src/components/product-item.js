import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAsync from "../hooks/useAsync";
// import Rating from "./rating";

export default function ProductItem() {
  const params = useParams();

  const { getData, data, error } = useAsync();

  useEffect(() => {
    getData('https://fakestoreapi.com/products/' + params.productId);
  }, []);

  return (
    <div className="flex items-center">
      <div>
        <h2>{data?.title}</h2>
        <p>{data?.description}</p>
        <div className="flex items-center overflow-auto">
          {/* <Rating rate={data?.rating?.rate} /> */}
          <span className="mx-2">{data?.rating?.count}</span>
        </div>
        <span className="my-5 mx-1 rounded-md	 bg-red-100 text-red-400 p-3 inline-block">
          {data?.category}
        </span>
      </div>
      <img className="w-24" src={data?.image} />
    </div>
  );
}
