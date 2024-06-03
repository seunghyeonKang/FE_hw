const writingBTN = document.querySelector("section#loadPostButton");
const postToWrite = document.querySelector("section#postContainer");

postToWrite.style.display = "none";

writingBTN.addEventListener("click", () => {
  postToWrite.style.display = "block";
  writingBTN.style.display = "none";
});

// 보안 문제
/*
fetch("post.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((html) => {
    document.getElementById("postContainer").innerHTML = html;
  })
  .catch((error) => {
    console.error(
      "There has been a problem with your fetch operation:",
      error
    );
  });
*/
