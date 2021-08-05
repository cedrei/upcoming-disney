document.body.style.setProperty("--disney-visibility", "block")
document.body.style.setProperty("--pixar-visibility", "block")
document.body.style.setProperty("--marvel-visibility", "block")
document.body.style.setProperty("--star-wars-visibility", "block")

for (let entry of entries) {
  let trailerHTML = ""
  let imgHTML = ""

  if (entry.trailer != null) {
    trailerHTML = ` (<a href="${entry.trailer}">trailer</a>)`
  }
  if (entry.img != null) {
    imgHTML = `<img src="${entry.img}" class="entry-image">`
  }

  let html = `<hr class="${entry.brand}"><div class="entry ${entry.brand}">
    ${imgHTML}
    <div class="entry-heading"><span class="entry-title">${entry.title}</span><br><span class="entry-release">(${entry.release})</span></div><br>
    <div class="entry-description">${entry.description}${trailerHTML}</div>
  </div>`
  /*if (document.getElementById("page").innerHTML != "") {
    document.getElementById("page").innerHTML += `<hr class="${entry.brand}">`
  }*/
  document.getElementById("page").innerHTML += html
}

function toggle(brand) {
  let shouldBeVisible = document.getElementById(brand+"-check").checked
  let visibility = shouldBeVisible ? "block" : "none"
  document.body.style.setProperty("--"+brand+"-visibility", visibility)
}
