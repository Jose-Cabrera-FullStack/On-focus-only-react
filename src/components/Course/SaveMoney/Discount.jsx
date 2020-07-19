import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/Course.scss";

const Discount = (props) => {
  const priceBefore = props.category.price;
  const discount = props.category.discount;
  return (
    <div className="flex">
      <p className="discovery__box__info__inside__before">
        ANTES <i>AR$ {priceBefore ? priceBefore : 699}</i>
      </p>
      <p className="discovery__box__info__inside__percentage">
        - Dcto. {discount ? discount : 30}%
      </p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    category: state.category || {},
  };
};

export default connect(mapStateToProps, null)(Discount);
