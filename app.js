/* handle menu */
btnMenu.addEventListener("click", () => {
  menu.classList.toggle("toggleMenu");
});

/**
 * hendle input link
 */
btnShortenLink.addEventListener("click", () => {
  console.log(inputLink.value);
  if (inputLink.value) {
    shorenLink.classList.remove("errLink");
  } else {
    shorenLink.classList.add("errLink");
  }
});
/* fetchPOST("https://rel.ink/api/links/", {
  url: "https://www.youtube.com/",
}).then((data) => {
  renderLink(data.hashid);
});

async function fetchPOST(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

function renderLink(enpoint) {
  const link = document.createElement("a");
  link.setAttribute("href", `https://rel.ink/${enpoint}`);
  link.setAttribute("target", "_blank");
  link.innerHTML = "HOLA SOY EL LINK";
  document.body.append(link);
} */
