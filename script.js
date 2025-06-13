function checkCode() {
  const code = document.getElementById("code").value;
  if (code === "5945") {
    window.location.href = "home.html";
  } else {
    alert("Noto‘g‘ri kod!");
  }
}