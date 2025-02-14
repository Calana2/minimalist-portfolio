const translations = {
  en: {
    nav_a_home: "Home",
    nav_a_blog: "Blog",
    nav_a_projects: "Projects",
    nav_a_research: "Research",
    nav_a_resources: "Resources",
    nav_a_about: "About",
    h1: "Resources",
    h1_p: "A collection of useful links.",
    h2_list_1: "Ethical Hacking",
    h2_list_2: "Software Development",
    h2_list_3: "Utils",
    h2_1_dt_1: "Binary explotation",
    h2_1_dt_2: "Cryptography",
    h2_1_dt_3: "OSINT",
    h2_1_dt_4: "Reverse engineering",
    h2_1_dt_5: "Forensic analysis",
    h2_1_dt_6: "Steganography",
    h2_1_dt_7: "Miscellaneous",
    h2_2_dt_1: "Repositories",
    h2_2_dt_2: "Services",
    h2_2_dt_3: "Others",
    h2_3_dt_1: "Free Virtual Private Networks (VPN)",
    h2_3_dt_2: "Downloaders",
    h2_3_dt_3: "Anonymity and temporality",
    h2_3_dt_4: "Free Large Language Models (LLM)",
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
    h1_p: "Una colección de enlaces útiles.",
    h2_list_1: "Hacking Ético",
    h2_list_2: "Desarrollo de Software",
    h2_list_3: "Utilidades",
    h2_1_dt_1: "Explotación binaria",
    h2_1_dt_2: "Criptografía",
    h2_1_dt_3: "OSINT",
    h2_1_dt_4: "Ingeniería inversa",
    h2_1_dt_5: "Análisis forense",
    h2_1_dt_6: "Esteganografía",
    h2_1_dt_7: "Misceláneo",
    h2_2_dt_1: "Repositorios",
    h2_2_dt_2: "Servicios",
    h2_2_dt_3: "Otros",
    h2_3_dt_1: "Redes Privadas Virtuales (VPN) libres de pago",
    h2_3_dt_2: "Descargadores",
    h2_3_dt_3: "Anonimato y temporalidad",
    h2_3_dt_4: "Modelos de Lenguages de Gran Escala (LLM) libres de pago",
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
  document.getElementById("h1-p").innerText = translations[lang].h1_p
  document.getElementById("h2-list-1").innerText = translations[lang].h2_list_1
  document.getElementById("h2-list-2").innerText = translations[lang].h2_list_2
  document.getElementById("h2-list-3").innerText = translations[lang].h2_list_3
  document.getElementById("h2-1-dt-1").innerText = translations[lang].h2_1_dt_1
  document.getElementById("h2-1-dt-2").innerText = translations[lang].h2_1_dt_2
  document.getElementById("h2-1-dt-3").innerText = translations[lang].h2_1_dt_3
  document.getElementById("h2-1-dt-4").innerText = translations[lang].h2_1_dt_4
  document.getElementById("h2-1-dt-5").innerText = translations[lang].h2_1_dt_5
  document.getElementById("h2-1-dt-6").innerText = translations[lang].h2_1_dt_6
  document.getElementById("h2-1-dt-7").innerText = translations[lang].h2_1_dt_7
  document.getElementById("h2-2-dt-1").innerText = translations[lang].h2_2_dt_1
  document.getElementById("h2-2-dt-2").innerText = translations[lang].h2_2_dt_2
  document.getElementById("h2-2-dt-3").innerText = translations[lang].h2_2_dt_3
  document.getElementById("h2-3-dt-1").innerText = translations[lang].h2_3_dt_1
  document.getElementById("h2-3-dt-2").innerText = translations[lang].h2_3_dt_2
  document.getElementById("h2-3-dt-3").innerText = translations[lang].h2_3_dt_3
  document.getElementById("h2-3-dt-4").innerText = translations[lang].h2_3_dt_4
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
