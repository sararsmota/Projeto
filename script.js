function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se estiver light mode, adicionar a imagem
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    //se tiver sem light mode, manter a imagem
    img.setAttribute("src", "./assets/avatar2.png")
  }
}
