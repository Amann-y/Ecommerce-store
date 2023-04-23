import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProducts } from "../store/productSlice";
import Loader from "../components/Loader";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
  addToCart,
  setCartMessageOff,
  setCartMessageOn,
} from "../store/cartSlice";

const Singleproduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productsingle, loading } = useSelector((state) => state.product);
  console.log(productsingle);
  const [quantity, setQuantity] = useState(1);
  let discountedPrice =
    productsingle.price -
    productsingle.price * (productsingle.discountPercentage / 100);

  useEffect(() => {
    dispatch(fetchSingleProducts(id));
  }, [id]);

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > productsingle.stock) tempQty = productsingle.stock;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  const addToCartHandler = (productsingle) => {
    let discountedPrice =
      productsingle.price -
      productsingle.price * (productsingle.discountPercentage / 100);
    let totalPrice = quantity * discountedPrice;

    dispatch(
      addToCart({
        ...productsingle,
        quantity: quantity,
        totalPrice,
        discountedPrice,
      })
    );
    dispatch(setCartMessageOn(true));
  };
  return (
    <>
      <div className="productSingle mt-2">
        <div className="container">
          <div className="content d-flex align-items-center justify-content-around mx-auto text-center">
            <div className="productSingleLeft">
              <div className="productImg">
                <div className="imgZoom">
                  <img
                    src={
                      productsingle
                        ? productsingle.images
                          ? productsingle.images[0]
                          : ""
                        : ""
                    }
                    alt="Pic"
                    style={{ maxWidth: "10rem", maxHeight: "10rem" }}
                  />
                </div>

                <Row>
                  <Col className="productThumbs" sm={4}>
                    <div className="thumbItem">
                      <img
                        src={
                          productsingle
                            ? productsingle.images
                              ? productsingle.images[1]
                              : ""
                            : ""
                        }
                        alt=""
                        style={{ maxWidth: "10rem", maxHeight: "10rem" }}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="productSingleRight ms-2">
              <div className="productDetails">
                <h4 className="title">{productsingle?.title}</h4>
                <p className="para">{productsingle?.description}</p>
                <div className="rating">
                  <span className="textRed">Rating : </span>
                  <span className="textNormal">{productsingle?.rating}</span>
                </div>
                <div className="brand">
                  <span className="textRed">Brand : </span>
                  <span className="textNormal">{productsingle?.brand}</span>
                </div>
                <div className="cat">
                  <span className="textRed">Category : </span>
                  <span className="textNormal">
                    {productsingle?.category
                      ? productsingle.category.replace("-", " ")
                      : ""}
                  </span>
                </div>
                <div className="oldPrice">
                  <span className="textRed">Old Price : </span>
                  <span className="textNormal"> ₹{productsingle?.price}</span>
                  <span className="textDark"> Inclusive of all taxes</span>
                </div>
                <div className="discount">
                  <span className="textRed">Discount : </span>
                  <span className="textNormal">
                    {productsingle?.discountPercentage} % off
                  </span>
                </div>
                <div className="newPrice">
                  <span className="textRed">New Price : </span>
                  <span className="textNormal">₹ {discountedPrice}</span>
                </div>

                <div className="quantity">
                  <h6>Quantity ↓ </h6>
                  <div className="quatityBtnGroup px-4 bg-secondary d-flex align-items-center justify-content-around">
                    <span className="qtyBtn cp" onClick={() => decreaseQty()}>
                      -
                    </span>
                    <span className="qty-value">{quantity}</span>
                    <span className="qtyBtn cp" onClick={() => increaseQty()}>
                      +
                    </span>
                  </div>
                </div>

                <div className="outOfStock">
                  {productsingle?.stock === 0 ? (
                    <div className="text-uppercase bg-danger text-white outOfStockTxt">
                      out of stock
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="addBuySection mt-2 d-flex align-items-center gx-2">
                  <button type="button" className="addToBtn btn btn-success">
                    {/* <BsFillCartCheckFill /> */}
                    <span
                      className="btnText"
                      onClick={() => {
                        addToCartHandler(productsingle);
                      }}
                    >
                      add to cart
                    </span>
                  </button>
                  <button
                    type="button"
                    className="addToBtn btn btn-primary ms-2"
                  >
                    <span className="btnText">buy now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {cartMessageStatus && <CartMessage />} */}
      </div>
    </>
  );
};

export default Singleproduct;
