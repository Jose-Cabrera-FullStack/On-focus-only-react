import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/Course.scss";

const YouSave = ({ category }) => {
  const priceBefore = category.price;
  const discount = category.discount;
  const priceActual = priceBefore - (priceBefore * discount) / 100;
  return (
    <div className="flex">
      <h1 className="discovery__box__info__inside__price">
        AR$ {parseInt(priceActual)}
      </h1>
      <h4 className="discovery__box__info__inside__save">
        Ahorrás AR$ {discount ? parseInt((priceBefore * discount) / 100) : 209}
      </h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    category: state.category || {},
  };
};

export default connect(mapStateToProps, null)(YouSave);
