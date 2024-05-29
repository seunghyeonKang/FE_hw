// 좋아요, 스크랩
const articleLikesCount = document.querySelector("#article_likes_count");
const articleScrabsCount = document.querySelector("#article_scrabs_count");
const articleLikesText = document.querySelector("#like_text");
const articleScrabsText = document.querySelector("#scrap_text");

let isLiked = false;
let isScrabed = false;

document
  .querySelector("#article_like_button")
  .addEventListener("click", articleLikeClicked);
document
  .querySelector("#article_scrab_button")
  .addEventListener("click", articleScrabClicked);

function articleLikeClicked() {
  if (isLiked) {
    articleLikesCount.innerText--;
    articleLikesText.innerText = "공감";
  } else {
    articleLikesCount.innerText++;
    articleLikesText.innerText = "공감 취소";
  }
  isLiked = !isLiked;
}
function articleScrabClicked() {
  if (isScrabed) {
    articleScrabsCount.innerText--;
    articleScrabsText.innerText = "스크랩";
  } else {
    articleScrabsCount.innerText++;
    articleScrabsText.innerText = "스크랩 취소";
  }
  isScrabed = !isScrabed;
}

// 대댓글

// 익명
// 댓글 작성
