const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')

const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonTierra = document.getElementById('boton-tierra')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonreiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const AtaqueDelJugador = document.getElementById('ataques-del-jugador')
const AtaqueDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []
let ataqueJugador 
let ataqueEnemigo
let opcionDeMokepones
let inputHipodogue 
let inputCapipepo 
let inputRatigueya 
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
     constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
     }
}

let hipodogue = new Mokepon('Hipodogue', './img/mokepons_mokepon_hipodoge_attack.png ./', 5)
let capipepo = new Mokepon('Capipepo', './img/mokepons_mokepon_capipepo_attack.png', 5 )
let ratigueya = new Mokepon('Ratigueya', './img/mokepons_mokepon_ratigueya_attack.png', 5)

hipodogue.ataques.push(
     {nombre: '🌧️', id:'boton-agua'},
     {nombre: '🌧️', id:'boton-agua'},
     {nombre: '🌧️', id:'boton-agua'},
     {nombre: '🔥', id:'boton-fuego'},
     {nombre: '🪴', id:'boton-tierra'},
)

capipepo.ataques.push(
    {nombre: '🪴', id:'boton-tierra'},
    {nombre: '🪴', id:'boton-tierra'},
    {nombre: '🪴', id:'boton-tierra'},
    {nombre: '🌧️', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
)

ratigueya.ataques.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🪴', id:'boton-tierra'},
    {nombre: '🌧️', id:'boton-agua'},
)

mokepones.push(hipodogue, capipepo, ratigueya)
/* 
function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = ` <input type="radio" name="mascota" id=${mokepon.nomnbre}/>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
           <p>${mokepon.nomnbre}/p> 
           <img src=${mokepon.foto} alt=${mokepon.nomnbre}>
        </label> `

        contenedorTarjetas.ineerHTML += opcionDeMokepones

         inputHipodogue = document.getElementById('hipodogue')
         inputCapipepo = document.getElementById('capipepo')
         inputRatigueya = document.getElementById('ratigueya')
    })
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra) 
    botonreiniciar.addEventListener('click', reiniciarJuego)
} */

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputHipodogue = document.getElementById('Hipodogue')
     inputCapipepo = document.getElementById('Capipepo')
     inputRatigueya = document.getElementById('Ratigueya')

    })
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    
    botonFuego.addEventListener('click', ataqueFuego)
    
    botonAgua.addEventListener('click', ataqueAgua)
    
    botonTierra.addEventListener('click', ataqueTierra)

    
    botonreiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputHipodogue.checked) {
        spanMascotaJugador.innerHTML = inputHipodogue.id
    }else if (inputCapipepo.checked) {
      spanMascotaJugador.innerHTML = inputCapipepo.id
    }else if (inputRatigueya.checked) {
      spanMascotaJugador.innerHTML = inputRatigueya.id
    } else {
        alert('selecciona una mascota para poder jugar')   
    } 

    seleccionarMascotaEnemigo()
} 

    function seleccionarMascotaEnemigo() {
        let mascotaAleatoria = aleatorio(0,mokepones.length -1)  

        spanMascotaEnemigo.innerHTML = mokepones [mascotaAleatoria].nombre
    }

    function ataqueFuego() {
        ataqueJugador='FUEGO'
        ataqueAleatorioEnemigo()
    }
    function ataqueAgua() {
        ataqueJugador='AGUA'
        ataqueAleatorioEnemigo()
    }

    function ataqueTierra() {
        ataqueJugador='TIERRA'
        ataqueAleatorioEnemigo()
    }

    function ataqueAleatorioEnemigo() {
       let ataqueAleatorio = aleatorio(1,3) 
        
       if (ataqueAleatorio == 1)
       { ataqueEnemigo = 'FUEGO'

    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'

    }  else {
        ataqueEnemigo = 'TIERRA ' //esto se puede borrar si sigue sin funcionar
    }

    /* else if (ataqueAleatorio == 3) {
        ataqueEnemigo = 'TIERRA. ' 
    } */

    combate()
}

    function combate() {

        if (ataqueEnemigo == ataqueJugador) {  
            crearMensaje("EMPATE")
        } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if(ataqueJugador == 'Agua'  && ataqueEnemigo == 'FUEGO') {
            crearMensaje("Ganaste")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
            crearMensaje("Ganaste")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } 
        else {
                crearMensaje("PERDISTE")
                vidasJugador--
                spanVidasJugador.innerHTML = vidasJugador
        }

        revisarVidas()
    }

        function revisarVidas(){
            if (vidasEnemigo == 0) {
                crearMensajeFinal("FELICITACIONES GANASTE :)")
            } else if (vidasJugador == 0) {
                crearMensajeFinal("lO SIENTO, PERDISTE :C ")
            } 
        }

function crearMensaje(resultado) {

    let nuevoAtaqueDelJugador = document.createElement('p') 
    let nuevoAtaqueDelEnemigo = document.createElement('p') 

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    AtaqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    AtaqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')


    sectionMensajes.innerHTML = resultadoFinal


    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    sectionReiniciar.style.display = 'block '


}

function reiniciarJuego() {
    location.reload()


}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)

