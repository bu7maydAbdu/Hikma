import React, { useState } from "react";
import axios from "axios";

const Card = (props) => {
  //handle reply

  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full m-auto">
      <figure>
        <img src={props.data.imageFile} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.data.caption}</h2>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default Card;
