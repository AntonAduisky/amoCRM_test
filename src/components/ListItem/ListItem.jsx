import React from "react";

import "./ListItem.scss";

function ListItem({ title, desc, isMobile }) {
  return (
    !isMobile
      ? (<li className="listItem">
          <h3 className="listItem__title">{title}</h3>
          <span className="listItem__description">{desc}</span>
        </li>)
      : <li className="listItem_mobile">{title}</li>
  );
}

export default ListItem;
