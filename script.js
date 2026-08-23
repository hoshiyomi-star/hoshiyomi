/* =========================
   星詠｜スクロールで夜空の色を変える
========================= */

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const pageHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  /* ページがスクロールできない場合のエラー防止 */
  const progress =
    pageHeight > 0 ? scrollTop / pageHeight : 0;

  const body = document.body;

  if (progress < 0.25) {
    body.style.background =
      "linear-gradient(180deg, #05091f, #10184a)";

  } else if (progress < 0.5) {
    body.style.background =
      "linear-gradient(180deg, #10184a, #24155c)";

  } else if (progress < 0.75) {
    body.style.background =
      "linear-gradient(180deg, #24155c, #421b52)";

  } else {
    body.style.background =
      "linear-gradient(180deg, #421b52, #090622)";
  }
});


/* =========================
   星詠｜星の海メニュー
========================= */

/*
  ページによってメニューが存在しない場合があるため、
  要素が存在するときだけ処理します。
*/

const starMenuButton = document.getElementById("starMenuButton");
const starMenu = document.getElementById("starMenu");
const starMenuClose = document.getElementById("starMenuClose");

if (starMenuButton && starMenu) {

  starMenuButton.addEventListener("click", () => {
    starMenu.classList.add("is-open");
  });

  /* 閉じるボタンがあるページだけ設定 */
  if (starMenuClose) {
    starMenuClose.addEventListener("click", () => {
      starMenu.classList.remove("is-open");
    });
  }

  /* メニュー内の項目を押したら閉じる */
  const starMenuLinks = starMenu.querySelectorAll("a");

  starMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      starMenu.classList.remove("is-open");
    });
  });
}


console.log("星詠｜script.js 読み込みOK");
