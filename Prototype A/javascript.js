function addEmoji(emoji) {
  const inputEle = document.getElementById("message");

  inputEle.value += emoji;
}

function toggleEmojiDrawer() {
  const drawer = document.getElementById("drawer");

  if (drawer.classList.contains("hidden")) {
    drawer.classList.remove("hidden");
  } else {
    drawer.classList.add("hidden");
  }
}
