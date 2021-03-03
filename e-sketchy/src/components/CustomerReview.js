import React from "react";
import "../style/Form.css";
import commentsFetch from "../utils/commentsFetch.js";
import DeleteComment from "../utils/commentsFetch.js";
import GetComments from "../utils/commentsFetch.js";
import { useParams } from "react-router-dom";

function HandelComments() {
  const [commentData, setComment] = React.useState("");
  const params = useParams();
  console.log(params);

  function HandelChangeAdding(event) {
    setComment(event.target.value);
  }
  function HandelClickAdd() {
    const token = window.localStorage.getItem("access_token");
    commentsFetch.postComment(commentData, token, params.id); //should take the product id + user id
  }

  function HandelClickDelete() {
    DeleteComment();
  }
  console.log(commentData + "     " + GetComments);
  return (
    <div>
      <label> my review</label>
      <input
        type="text"
        placeholder="insert review here"
        onChange={HandelChangeAdding}
        value={commentData}
        required
      ></input>

      <button type="submit" onClick={HandelClickAdd}>
        Submit
      </button>
      <output>
        <button name="delete" onClick={HandelClickDelete}>
          Delete My Comment
        </button>
      </output>
    </div>
  );
}

export default HandelComments;
