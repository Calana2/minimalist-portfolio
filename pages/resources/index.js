const translations = {
  en: {
    nav_a_home: "Home",
    nav_a_blog: "Blog",
    nav_a_projects: "Projects",
    nav_a_research: "Research",
    nav_a_resources: "Resources",
    nav_a_about: "About",
    h1: "Resources",
    h1_p: "Nothing here yet.",
    pre_contact: "Contact: ",
    pre_more:  "\n   More: ",
  },
  es: {
    nav_a_home: "Inicio",
    nav_a_blog: "Blog",
    nav_a_projects: "Proyectos",
    nav_a_research: "Investigaciones",
    nav_a_resources: "Recursos",
    nav_a_about: "Acerca de",
    h1: "Recursos",
    h1_p: "Nada aquí todavía.",
    pre_contact: "Contacto: ",
    pre_more: "\n      Más: ",
  }
}
//    +-----------+
//    | Functions |
//    +-----------+   
function changeLanguage(lang) {
  document.getElementById("nav-a-home").innerText = translations[lang].nav_a_home
  document.getElementById("nav-a-blog").innerText = translations[lang].nav_a_blog
  document.getElementById("nav-a-projects").innerText = translations[lang].nav_a_projects
  document.getElementById("nav-a-research").innerText = translations[lang].nav_a_research
  document.getElementById("nav-a-resources").innerText = translations[lang].nav_a_resources
  document.getElementById("nav-a-about").innerText = translations[lang].nav_a_about
  document.getElementById("h1").innerText = translations[lang].h1
  document.getElementById("h1-p").innerText = translations[lang].h1_p
  const pre = document.getElementById("footer-pre")
  let textNodeIndex = 0
  for (let node of pre.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.includes("*")) {
      console.log("NODEEE TEXT:",node.textContent)
      if (textNodeIndex === 0) {
        node.textContent = translations[lang].pre_contact
      } else {
        node.textContent = translations[lang].pre_more
      }
      textNodeIndex++
    }
  }
}
//    +--------------------------+
//    | Main function and events |
//    +--------------------------+
function main() {
  const lang = localStorage.getItem("lang")
  if (lang === null) {
    localStorage.setItem("lang", "en")
    changeLanguage("en")
  }
  changeLanguage(lang)
}
window.addEventListener('load', main, false)
