const translations = {
  en: {
    nav_a_home: "Home",
    nav_a_blog: "Blog",
    nav_a_projects: "Projects",
    nav_a_research: "Research",
    nav_a_resources: "Resources",
    nav_a_about: "About",
    h1: "Projects",
    projects: [
     {
       dt:"omgbeaupeep.com-downloader",
       dd:"If you like to read comics, this is a tool to download those that are available in https://www.omgbeaupeep.com.",
     },
    ],
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
    h1: "Proyectos",
    projects: [
     {
       dt:"omgbeaupeep.com-downloader",
       dd:"Si te gusta leer comics, esta es una herramienta para descargar los que están disponibles en https://www.omgbeaupeep.com.",
     },
    ],
    pre_contact: "Contacto: ",
    pre_more: "\n     Más: ",
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
  document.getElementById("span-lang-text").innerText = lang
  document.querySelectorAll("dl.projects").forEach((e, idx) => {
   e.children[0].firstChild.firstChild.innerText = translations[lang].projects[idx].dt
   e.children[1].innerText = translations[lang].projects[idx].dd
  })
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
