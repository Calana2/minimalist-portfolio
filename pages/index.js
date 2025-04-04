const translations = {
  en: {
    nav_a_home: "Home",
    nav_a_blog: "Blog",
    nav_a_projects: "Projects",
    nav_a_research: "Research",
    nav_a_resources: "Resources",
    nav_a_about: "About",
    h1_p: "Welcome to my website. Here you will find my software projects, my personal blog, academic research and useful resources.",
    h2_experience: "Experience",
    h2_p_experience: "Not yet, looking for it :)",
    h2_education: "Education",
    h2_p_education: "Engineering in Cibersecurity - University of Information Science, UCI (2023 - Present)",
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
    h1_p: "Bienvenido a mi sitio web. Aquí encontrarás mis proyectos de software, mi blog, investigaciones académicas y recursos útiles.",
    h2_experience: "Experiencia",
    h2_p_experience: "Todavía no, en busca de ello :)",
    h2_education: "Estudios",
    h2_p_education: "Ingeniería en Ciberseguridad - Universidad de las Ciencias Informáticas, UCI (2023 - Actualidad)",
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
  document.getElementById("h1-p").innerText = translations[lang].h1_p
  document.getElementById("h2-experience").innerText = translations[lang].h2_experience
  document.getElementById("h2-p-experience").innerText = translations[lang].h2_p_experience
  document.getElementById("h2-education").innerText = translations[lang].h2_education
  document.getElementById("h2-p-education").innerText = translations[lang].h2_p_education
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
