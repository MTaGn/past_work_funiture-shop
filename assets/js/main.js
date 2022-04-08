document.addEventListener('DOMContentLoaded', function(){
/*--------
headerメニュー 共通
----------*/ 
const closeBtnElem = document.querySelector(".close")
const humbergerBtnElem = document.querySelector(".humberger")
const maskElem = document.querySelector(".mask")
const navElem = document.querySelector(".nav")
const manuLiElem = document.querySelector(".menu__list")
const paginationElem = document.querySelector(".pagination")

closeBtnElem.addEventListener("click", () => {
  maskElem.classList.add("disappear")
})
// navigation画面クリック時もcloseボタンと同じ動作
maskElem.addEventListener("click", () => {
  maskElem.classList.add("disappear")
  navElem.classList.add("disappear")
  closeBtnElem.classList.add("disappear")
  manuLiElem.classList.add("disappear")
  humbergerBtnElem.classList.remove("disappear")
})
closeBtnElem.addEventListener("click", () => {
  maskElem.classList.add("disappear")
  navElem.classList.add("disappear")
  closeBtnElem.classList.add("disappear")
  manuLiElem.classList.add("disappear")
  humbergerBtnElem.classList.remove("disappear")
})
humbergerBtnElem.addEventListener("click", () => {
  maskElem.classList.remove("disappear")
  navElem.classList.remove("disappear")
  closeBtnElem.classList.remove("disappear")
  manuLiElem.classList.remove("disappear")
  humbergerBtnElem.classList.add("disappear")
})


/* -------------
 表示画像作成
-------------- */
const imgInfoList = [
  ["./assets/img/chair1.jpg","?param=chair1.jpg", "chair1"],
  ["./assets/img/chair2.jpg","?param=chair2.jpg", "chair2"],
  ["./assets/img/chair3.jpg","?param=chair3.jpg", "chair3"],
  ["./assets/img/chair4.jpg","?param=chair4.jpg", "chair4"],
  ["./assets/img/chair5.jpg","?param=chair5.jpg", "chair5"],
  ["./assets/img/chair6.jpg","?param=chair6.jpg", "chair6"],
  ["./assets/img/chair7.jpg","?param=chair7.jpg", "chair7"],
  ["./assets/img/chair8.jpg","?param=chair8.jpg", "chair8"],
  ["./assets/img/chair8.jpg","?param=chair9.jpg", "chair9"],
  ["./assets/img/desk1.jpg","?param=desk1.jpg", "desk1"],
  ["./assets/img/desk2.jpg","?param=desk2.jpg", "desk2"],
  ["./assets/img/desk3.jpg","?param=desk3.jpg", "desk3"],
  ["./assets/img/desk4.jpg","?param=desk4.jpg", "desk4"],
  ["./assets/img/desk5.jpg","?param=desk5.jpg", "desk5"],
  ["./assets/img/light1.jpg","?param=light1.jpg", "light1"],
  ["./assets/img/light2.jpg","?param=light2.jpg", "light2"],
]

const price = "¥10,000 +tax"
const productsUlList = document.querySelector(".products-container__products")

// ファイル毎に処理を変えるため
const fileName = window.location.href.split("/").pop()

// index.html:8枚, products.html:12枚表示, products-next.html:4枚を想定
let showNum = 0;

// imgInfoListの表示開始インデックス
let showStartIndex = 0

if (fileName === "index.html") {
  // index.html
  showNum = 8;
} else if (fileName === "products.html") {
  // products.html
  showNum = 12;
} else {
  // products-next.html
  showNum = 4
  showStartIndex = 11
}

/*
要素を表示商品数分作成 
*/
// index.html, products.htmlに画像表示
if (fileName === "index.html" || fileName === "products.html") {
  for(let i=0; i<showNum; i++) { 
    const liElem = document.createElement("li")
    liElem.classList.add("product")
    const aElem = document.createElement("a")
    aElem.classList.add("anker")
    aElem.href = "./detail.html"+imgInfoList[i][1]
    const imgElem = document.createElement("img")
    imgElem.classList.add("pimg")
    imgElem.src = imgInfoList[i][0]
    const pElem = document.createElement("p")
    pElem.classList.add("price")
    pElem.textContent = price
    const desElem = document.createElement("p")
    desElem.classList.add("product-name")
    desElem.textContent = imgInfoList[i][2]
  
    aElem.appendChild(imgElem)
    liElem.appendChild(aElem)
    liElem.appendChild(desElem)
    liElem.appendChild(pElem)
    productsUlList.appendChild(liElem)
  }
} else if (fileName === "products-next.html") {
  for(let i=11; i<showNum+11; i++) { 
    const liElem = document.createElement("li")
    liElem.classList.add("product")
    const aElem = document.createElement("a")
    aElem.classList.add("anker")
    aElem.href = "./detail.html"+imgInfoList[i][1]
    const imgElem = document.createElement("img")
    imgElem.classList.add("pimg")
    imgElem.src = imgInfoList[i][0]
    const pElem = document.createElement("p")
    pElem.classList.add("price")
    pElem.textContent = price
    const desElem = document.createElement("p")
    desElem.classList.add("product-name")
    desElem.textContent = imgInfoList[i][2]
  
    aElem.appendChild(imgElem)
    liElem.appendChild(aElem)
    liElem.appendChild(desElem)
    liElem.appendChild(pElem)
    productsUlList.appendChild(liElem)
  }
}

// detail.htmlに画像表示
if (fileName.slice(0, 11) === "detail.html") {
  const url = new URL(window.location.href)
  const imgName = url.searchParams.get("param")
  const imgElem = document.createElement("img")
  imgElem.classList.add("detai-img")
  imgElem.src = "./assets/img/"+imgName
  const imgContainerElem = document.querySelector(".item-container__img") 
  imgContainerElem.appendChild(imgElem)
}

});