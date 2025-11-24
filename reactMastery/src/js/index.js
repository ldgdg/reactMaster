window.addEventListener("click", (e) => {
  //   console.log(e.target);
  //   const modal = document.querySelector(".modal");
  //   if (modal && e.target !== modal) {
  //     modal.remove();
  //   }
});
window.onclick = (e) => {
  const modal = document.querySelector(".modal");
  if (modal && e.target !== modal) {
    modal.remove();
  }
};
