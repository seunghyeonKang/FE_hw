// 좋아요, 스크랩
const articleLikesCount = document.querySelector("#article_likes_count");
const articleScrabsCount = document.querySelector("#article_scrabs_count");
const articleScrabsText = document.querySelector("#scrap_text");
const articleScrabsIcon = document.querySelector(
  "#article_scrab_button .imgBox_icons"
);

let isLiked = false;
let isScrabed = false;

document
  .querySelector("#article_like_button")
  .addEventListener("click", articleLikeClicked);
document
  .querySelector("#article_scrab_button")
  .addEventListener("click", articleScrabClicked);

function articleLikeClicked() {
  if (!isLiked) {
    articleLikesCount.innerText++;
    isLiked = !isLiked;
  }
}
function articleScrabClicked() {
  if (isScrabed) {
    articleScrabsCount.innerText--;
    articleScrabsText.innerText = "스크랩";
    articleScrabsIcon.style.display = "block";
  } else {
    articleScrabsCount.innerText++;
    articleScrabsText.innerText = "스크랩 취소";
    articleScrabsIcon.style.display = "none";
  }
  isScrabed = !isScrabed;
}

// 대댓글
const commentsComment = document.getElementById("comments_comment");
commentsComment.addEventListener("click", () => {
  console.log("대댓 클릭");
});

// 익명
const commentAnonymity = document.querySelector("#comment_anonymity");

let isAnonymous = false;

document
  .querySelector("#comment_anonymity_check")
  .addEventListener("click", onOffAnonymity);

function onOffAnonymity() {
  if (isAnonymous) {
    commentAnonymity.classList.remove("text-red");
  } else {
    commentAnonymity.classList.add("text-red");
  }
  isAnonymous = !isAnonymous;
}

// 댓글 작성
