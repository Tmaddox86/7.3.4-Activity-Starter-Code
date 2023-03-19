import React, { useContext } from "react";
import StylesContext from "./StylesContext";
const buttonStyling = React.useContext(StylesContext)


export default function CollectorButton() {
  
  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
    </div>
  );
}
