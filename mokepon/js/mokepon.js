const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')

const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
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
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo
let opcionDeMokepones
let inputHipodogue 
let inputCapipepo 
let inputRatigueya 
let mascotaJugador
let ataquesMokepon
let botonFuego 
let botonAgua 
let botonTierra 
let botones = []
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
let ratigueya = new 
    Mokepon('Ratigueya', './img/mokepons_mokepon_ratigueya_attack.png', 5)

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

    
    botonreiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputHipodogue.checked) {
        spanMascotaJugador.innerHTML = inputHipodogue.id
        mascotaJugador = inputHipodogue.id
    }else if (inputCapipepo.checked) {
      spanMascotaJugador.innerHTML = inputCapipepo.id
      mascotaJugador = inputCapipepo.id
    }else if (inputRatigueya.checked) {
      spanMascotaJugador.innerHTML = inputRatigueya.id
      mascotaJugador = inputRatigueya.id
    } else {
        alert('selecciona una mascota para poder jugar')   
    } 

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
} 

    function extraerAtaques(mascotaJugador){
        let ataques
        for (let i = 0; i < mokepones.length; i++) {
            if(mascotaJugador === mokepones [i].nombre){
                ataques = mokepones [i].ataques
            }            
        }
        mostrarAtaques(ataques)
    }
 
    function mostrarAtaques(ataques) {
        ataques.forEach((ataque) => {
            ataquesMokepon = ` <button id=${ataque.id} class="Boton-de-ataque BAtaque">${ataque.nombre} </button>`

            contenedorAtaques.innerHTML += ataquesMokepon
        })
        
         botonFuego = document.getElementById('boton-fuego')
         botonAgua = document.getElementById('boton-agua')
         botonTierra = document.getElementById('boton-tierra')
         botones = document.querySelectorAll('.BAtaque')

    }

    function secuenciaAtaque(){
        botones.forEach((boton) => {
            boton.addEventListener('click', (e) => {console.log(e)
               
                if(e.target.textcontent === '🔥'){
                    ataqueJugador.push('fuego')
                    console.log(ataqueJugador)
                    boton.style.background = '#2f58'
                }else if (e.target.textContent === ' 🌧️'){
                    ataqueJugador.push('fuego')
                    console.log(ataqueJugador)
                    boton.style.background = '#2f58'
                } else{ 
                ataqueJugador.push('Tierra')
                console.log(ataqueJugador)
                boton.style.background = '#2f58'
            }
            })
        })
     }

    function seleccionarMascotaEnemigo() {
        let mascotaAleatoria = aleatorio(0,mokepones.length -1)  

        spanMascotaEnemigo.innerHTML = mokepones [mascotaAleatoria].nombre
        secuenciaAtaque()
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

