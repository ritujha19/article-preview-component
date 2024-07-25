let btn = document.querySelector("button");

let shareOpt = document.createElement("div");

let btnCLick = document.querySelector('.btnClick');

shareOpt.innerHTML =`<p>SHARE</p>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=URLENCODED_URL&t=TITLE" target="_blank"><img src="images/icon-facebook.svg" alt="facebook" /></a>
                    <a href="https://twitter.com/share?url=URLENCODED_URL&via=TWITTER_HANDLE&text=TEXT" target="_blank"><img src="images/icon-twitter.svg" alt="twitter" /></a>
                    <a href="http://pinterest.com/pin/create/button/?url={URI-encoded URL of the page to pin}&media={URI-encoded URL of the image to pin}&description={optional URI-encoded description}" target ="_blank"><img src="images/icon-pinterest.svg" alt="pinterest" /></a>`;

shareOpt.setAttribute("id","share");

shareOpt.classList.add("#share");

let click = false;

function check() {
    if (!click) {
      const getELement = document.getElementById("share");
      getELement.remove();
      return;
    }
};
btn.addEventListener("click", () => {
    click = !click;
    btnCLick.appendChild(shareOpt);
    check();
  });