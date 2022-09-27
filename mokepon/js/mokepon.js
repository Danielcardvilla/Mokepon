const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')

const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonTierra = document.getElementById('boton-tierra')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonreiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('hipodogue')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const AtaqueDelJugador = document.getElementById('ataques-del-jugador')
const AtaqueDelEnemigo = document.getElementById('ataques-del-enemigo')

let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra) 
    botonreiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodogue'
    }else if (inputCapipepo.checked) {
      spanMascotaJugador.innerHTML = 'Capipepo'
    }else if (inputRatigueya.checked) {
      spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('selecciona una mascota para poder jugar')   
    } 

    seleccionarMascotaEnemigo()
} 

    function seleccionarMascotaEnemigo() {
        let mascotaAleatoria = aleatorio(1,3) // al i9ncorporar el resto de mascotas toca cambiar el 3 por el numero total de mascotas.       
        if (mascotaAleatoria == 1 ) {
            spanMascotaEnemigo.innerHTML = 'Hipodogue'
        } else if (mascotaAleatoria == 2) {
            spanMascotaEnemigo.innerHTML = 'Capipepo'
        } else {
            spanMascotaEnemigo.ineerhtml = 'Ratigueya'
         } 
         
         /// se puede borrar si no gfenera cambio alguno

         /* else if (ataqueAleatoria == 3 )
        {
            spanMascotaEnemigo.innerHTML = 'Ratigueya'
         } */
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

