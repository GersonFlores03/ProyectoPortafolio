
const openMenu = document.getElementById("Hamburguer")
const closeMenu = document.getElementById("Close-Menu")
const Contenedor = document.getElementById("IconoHamburguesa")
const DarkMode = document.getElementById("theme-boton")
const body = document.body
//Modal
const openModal = document.getElementById("ModalComplet")
const closeModal = document.getElementById("Close-Modal")
const ConetenedorModal = document.getElementById("Modal")
//Modal2
const openModal2 = document.getElementById("ModalCompletDos")
const closeModal2 = document.getElementById("Close-ModalDos")
const ConetenedorModal2 = document.getElementById("Modaldos")
//Modal3
const openModal3 = document.getElementById("ModalCompletTres")
const closeModal3= document.getElementById("Close-ModalTres")
const ConetenedorModal3 = document.getElementById("ModalTres")
//Modal 4
const openModal4 = document.getElementById("ModalCompletCuatro")
const closeModal4= document.getElementById("Close-ModalCuatro")
const ConetenedorModal4 = document.getElementById("ModalCuatro")
//Modal 5

const openModal5 = document.getElementById("ModalCompletCinco")
const closeModal5= document.getElementById("Close-ModalCinco")
const ConetenedorModal5 = document.getElementById("ModalCinco")

//Modal 6

const openModal6 = document.getElementById("ModalCompletSeis")
const closeModal6= document.getElementById("Close-ModalSeis")
const ConetenedorModal6 = document.getElementById("ModalSeis")



const Mode = () => {
      
     if(DarkMode.classList.contains("bx-sun")){
        DarkMode.classList.replace("bx-sun" , "bx-moon")
     }else{
         DarkMode.classList.replace("bx-moon" , "bx-sun")
     }
     body.classList.toggle("dark")
}

DarkMode.addEventListener("click" , () => Mode())




openMenu.addEventListener("click" , () => Contenedor.classList.remove("hide"))
closeMenu.addEventListener("click" , () => Contenedor.classList.add("hide"))
//Modal

openModal.addEventListener("click" , () => ConetenedorModal.classList.remove("Limpio"))
closeModal.addEventListener("click" ,() => ConetenedorModal.classList.add("Limpio") )

//ModalDos

openModal2.addEventListener("click" , () => ConetenedorModal2.classList.remove("LimpioDos"))
closeModal2.addEventListener("click" ,() => ConetenedorModal2.classList.add("LimpioDos") )

//Modal tres
openModal3.addEventListener("click" , () => ConetenedorModal3.classList.remove("LimpioTres"))
closeModal3.addEventListener("click" ,() => ConetenedorModal3.classList.add("LimpioTres") )


//Modal Cuatro

openModal4.addEventListener("click" , () => ConetenedorModal4.classList.remove("LimpioCuatro"))
closeModal4.addEventListener("click" ,() => ConetenedorModal4.classList.add("LimpioCuatro") )

//Modal Cinco

openModal5.addEventListener("click" , () => ConetenedorModal5.classList.remove("LimpioCinco"))
closeModal5.addEventListener("click" ,() => ConetenedorModal5.classList.add("LimpioCinco") )

openModal6.addEventListener("click" , () => ConetenedorModal6.classList.remove("LimpioSeis"))
closeModal6.addEventListener("click" ,() => ConetenedorModal6.classList.add("LimpioSeis") )








