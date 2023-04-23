import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts } from "../store/productSlice";

const Slidersection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  let newData;

  const val = useSelector((state) => state.product.products);

  if (val) {
    newData = val.filter((ele) => ele.id < 5);
  }
  return (
    <>
      <Carousel
        responsive={responsive}
        autoPlaySpeed={800}
        infinite={true}
        autoPlay={true}
        className="mt-4"
      >
        {newData &&
          newData.map((ele, ind) => {
            return (
              <div
                className="p-1"
                style={{ backgroundColor: "#FFF9DE" }}
                key={ele.id}
              >
                <img
                  src={ele.images[0]}
                  alt="Pic1"
                  className="img-fluid"
                  style={{ height: "14rem" }}
                />
              </div>
            );
          })}
      </Carousel>
    </>
  );
};

export default Slidersection;
