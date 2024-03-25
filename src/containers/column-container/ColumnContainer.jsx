import React from "react";

import "./ColumnContainer.scss";

function ColumnContainer(props) {
    return <div className="column__container">{props.children}</div>;
}

export default ColumnContainer;
