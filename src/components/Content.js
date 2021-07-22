import React, { useState } from "react";
import axios from "axios";
import "../css/MyDetail.css";

var re_comment = [];
// var result = {
//   id: 0,
//   content: 0,
//   userName: 0,
//   user: 0,
//   snack: 0,
// };
function Content({ onAllComments }) {
  const [content, setContent] = useState("");

  const onChange = (e) => {
    setContent(e.target.value);
    console.log(content);
  };

  const onClick = (e) => {
    axios
      .post("http://localhost:8080/comment/regist", null, {
        params: {
          id: 9,
          content: content,
          userName: 7,
          user: 8,
          snack: 9,
        },
      })
      .then((res) => {
        let result = {
          id: 0,
          content: 0,
          userName: 0,
          user: 0,
          snack: 0,
        };
        //console.log("res=", res.data);

        result.id = res.data.id;
        result.content = res.data.content;
        result.userName = res.data.userName;
        result.user = res.data.user;
        result.snack = res.data.snack;

        console.log(result);
        // re_comment = res;
        // console.log("resww=", re_comment);
        onAllComments(result);
      })
      .catch((err) => {
        console.log("XX");
      });

    setContent("");
  };

  return (
    <div>
      <input
        className="commet-text"
        type="text"
        value={content}
        onChange={onChange}
      />
      <input
        className="commet-btn"
        type="button"
        onClick={onClick}
        value="댓글 등록"
      />
    </div>
  );
}

export default Content;
export { re_comment };
