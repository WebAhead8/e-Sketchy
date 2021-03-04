import React from "react";
import "../style/Form.css";
import commentsFetch from "../utils/commentsFetch.js";
import DeleteComment from "../utils/commentsFetch.js";
import GetComments from "../utils/commentsFetch.js";
import { useParams } from "react-router-dom";
import getUserName from "../utils/fetchUserName.js";
function HandelComments() {
  const [commentData, setComment] = React.useState("");
  const [userNameData, setUserName] = React.useState([]);

  const params = useParams();

  function HandelChangeAdding(event) {
    setComment(event.target.value);
  }
  function HandelClickAdd() {
    const token = window.localStorage.getItem("access_token");
    commentsFetch.postComment(commentData, token, params.id); //should take the product id + user id
    getUserName(params.id).then((data) => {
      setUserName(data);
    });
  }

  function HandelClickDelete() {
    DeleteComment();
  }

  React.useEffect(() => {
    getUserName(params.id).then((data) => {
      setUserName(data);
    });
  }, []);

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
      <ul>
        {userNameData.map((data) => (
          <li>
            {data.username}:{data.comment}
          </li>
        ))}
      </ul>
      <button name="delete" onClick={HandelClickDelete}>
        Delete My Comment
      </button>
    </div>
  );
}

export default HandelComments;
