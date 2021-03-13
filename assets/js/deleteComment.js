import axios from "axios";

const commentList = document.getElementById("jsCommentList");

const handleClick = async (event) => {
  const button = event.target;
  const commentId = button.getAttribute("data-id");
  const response = await axios({
    url: `/api/${commentId}/delete-comment`,
    method: "GET",
  });

  if (response.status === 200) {
    commentList.removeChild(button.parentNode);
  }
};

function init() {
  commentList.addEventListener("click", handleClick);
}

if (commentList) {
  init();
}
