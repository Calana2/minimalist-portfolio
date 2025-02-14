const translations = {
  en: {
    nav_a_home: "Home",
    nav_a_blog: "Blog",
    nav_a_projects: "Projects",
    nav_a_research: "Research",
    nav_a_resources: "Resources",
    nav_a_about: "About",
    h1: "About",
    h1_p: "It's no news that the modern web is overloaded with content, it's hard to enter a site without getting your screen cluttered with ads and pop-ups.\n\nI wrote this site in vanilla html, css and javascript because I'm a bit overwhelmed by the overuse of frameworks that modern software development demands and I want to enjoy programming without a ton of extra layers of abstraction.\n\n\nThat's it, have a nice day.",
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
    p: "",
    pre_contact: "Contacto: ",
    pre_more: "\n     Más: ",
    h1: "Acerca de",
    h1_p: "No es novedad que la Web moderna esta sobrecargado de contenido, es difícil entrar un sitio sin que se te sature la pantalla con anuncios y ventanas emergentes.\n\nEscribí este sitio en html, css y javascript vanilla porque estoy un poco agobiado por el imperante uso de frameworks que exige el desarrollo de software actual y quiero disfrutar programando sin una infinidad de capas de abstracción extra.\n\n\nEso es todo, tenga un feliz día.",
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
  document.getElementById("span-lang-text").innerText = lang
  const pre = document.getElementById("footer-pre")
  let textNodeIndex = 0
  for (let node of pre.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (textNodeIndex === 0) {
        node.textContent = translations[lang].pre_contact
      } else if (textNodeIndex === 3){
        node.textContent = translations[lang].pre_more
      }
      textNodeIndex++
    }
  }
}
function changeLanguageWrapper(e) {
 const lang = e.currentTarget.children[2].innerText
 if(lang === "en") {
  localStorage.setItem("lang","es") 
 } else {
  localStorage.setItem("lang","en") 
 }
 const newLang = localStorage.getItem("lang")
 changeLanguage(newLang)
 e.currentTarget.children[2].innerText = newLang
}
//    +--------------------------+
//    | Main function and events |
//    +--------------------------+
function main() {
  const lang = localStorage.getItem("lang")
  if (lang === null) {
    localStorage.setItem("lang", "en")
    changeLanguage("en")
  } else {
    changeLanguage(lang) 
  }
  document.querySelector('#span-lang-button').addEventListener('click',changeLanguageWrapper,false)
}
window.addEventListener('load', main, false)
