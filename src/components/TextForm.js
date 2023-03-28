import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("handle clicked");
    setText(text.toUpperCase());
  };
  const handleOnChange = (event) => {
    // console.log("Change triggered");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <div className="container">
      <div className="my-3">
        <h1 className="title">{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          placeholder="Enter Text"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        To Upper case
      </button>
    </div>
  );
}
