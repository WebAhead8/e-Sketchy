import React from "react";
import "../style/Form.css";
import postComment from "../utils/commentsFetch.js";
import DeleteComment from "../utils/commentsFetch.js";
import GetComments from "../utils/commentsFetch.js";

function HandelComments() {
  const [commentData, setComment] = React.useState("");

  function HandelChangeAdding(event) {
    setComment(event.target.value);
  }
  function HandelClickAdd() {
    postComment(commentData); //should take the product id + user id
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
        {commentData + GetComments}

        <button name="delete" onClick={HandelClickDelete}>
          Delete My Comment
        </button>
      </output>
    </div>
  );
}

export default HandelComments;
