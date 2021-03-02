import React from "react";
import "../style/Form.css";
import postComment from "../utils/commentsFetch.js";

function HandelComments() {
  const [comment, setComment] = React.useState("");

  return (
    <div>
      <label> my review</label>
      <input type="text" placeholder="insert review here" required></input>
      <button type="submit">Submit</button>
    </div>
  );
}

export default HandelComments;
