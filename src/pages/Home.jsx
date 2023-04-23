import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts } from "../store/productSlice";
import { fetchAsyncCategories } from "../store/categorySlice";
import { useEffect } from "react";
import Slidersection from "../components/Slidersection";
import Productlistitem from "../components/Productlistitem";
import Singleproductcompo from "../components/Singleproductcompo";

const Home = () => {
  const data = useSelector((state) => state.product);
  const { categories, loading } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts(100));
    dispatch(fetchAsyncCategories());
  }, []);

  let catBaseProducts_1 = data.products.filter(
    (product) => product.category === categories[0]
  );
  let catBaseProducts_2 = data.products.filter(
    (product) => product.category === categories[1]
  );
  let catBaseProducts_3 = data.products.filter(
    (product) => product.category === categories[2]
  );
  let catBaseProducts_4 = data.products.filter(
    (product) => product.category === categories[3]
  );

  let catBaseProducts_5 = data.products.filter(
    (product) => product.category === categories[4]
  );

  return (
    <>
      <Slidersection />

      <Singleproductcompo
        category={catBaseProducts_1}
        loading={loading}
        cat={categories[0]}
      />
      <Singleproductcompo
        category={catBaseProducts_2}
        loading={loading}
        cat={categories[1]}
      />
      <Singleproductcompo
        category={catBaseProducts_3}
        loading={loading}
        cat={categories[2]}
      />
      <Singleproductcompo
        category={catBaseProducts_4}
        loading={loading}
        cat={categories[3]}
      />
      <Singleproductcompo
        category={catBaseProducts_5}
        loading={loading}
        cat={categories[4]}
      />
    </>
  );
};

export default Home;
