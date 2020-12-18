import React from "react";
import { useLocation } from "react-router-dom";

export default function LocationDisplay() {
  let location = useLocation();
  // const path = this.props.path;
  // console.log(this.props.path);
  return (
    <>
      <div data-testid="location-display">{location.pathname}</div>
      {/* {this.props.paths === "home" && <div>{"/"}</div>}
      {this.props.paths === "about" && <div>{"/about"}</div>} */}
    </>
  );
}
