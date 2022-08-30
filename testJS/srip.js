//VARIABLES

//Traduce a código JavaScript las variables del ejemplo anterior:

let name = "Daniel";
let lastName = "Villarroel";
let Age = 25;
let email = "daniel.card@gmail.com";
let adult = true;
let safeMoney = 0.50;
let debtMoney = 180;


//Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

alert(name + '_' + lastName + ' Es mi nombre completo  ' );

alert('Mi dinero ahorrado menos deudas es de ' + safeMoney + debtMoney == (safeMoney - debtMoney)); //////////////////el resultado del alert el == false ya que se trata de un n'umero menor a cero.

//FUNCIONES

//Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

//para cambiar las variable por parametros y argumentos debo declarar esas variables y solicitarlas en la funcion

const namE = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function mePresento ( namE, lastName, nickname) {
    return alert(console.log('Minombre completo es' + completeName + 'prefiero que me digas' + nickname))
}
 




// funciiones
/* const nombre = "Juan David";
const lastname = "Castro Gallego";
const completeName = nombre + lastname
const nickname = "juanito" 
 alert ("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + "."); 
 */

 const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
       
       tipoDeSuscripcion()

}

//condicionales REVISAR EL CODIGO DE ESTA SECCION 

 function tipoDeSuscripcion() {
    let tipoDeSuscripcion = ("Basic", "Free", "Expert", "Expertplus")
    if (tipoDeSuscripcion == "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        
    } else if (tipoDeSuscripcion == "Free"){
        console.log("Solo puedes tomar los cursos gratis");
        
    } else if (tipoDeSuscripcion == "Expert") {
        console.log ("Puedes tomar los cursos de platzi durante un anio");
        
    } else if (tipoDeSuscripcion == "Expert Plus") {
        console.log("Tu y alguien mas pueden tomar el todos los cursos durante un anio");
        
    }
 }

 //ciclos

 for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 0
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++; // al agregar esta condicion de suma de 1 por cada ciclo evitamos que el ciclo se convierta en un ciclo infinito.
}

let y = 10;
while (y >= 2) {
    console.log("El valor de y es: " + y);
    --y// al agregar esta condicion de resta de 1 por cada ciclo evitamos que el ciclo se convierta en un ciclo infinito.
}

    while (respuesta != '4') {
    let pregunta = prompt('cuanto es 2+2')
    respuesta = pregunta;
}


//Arrays y objetos

//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.


   function imprimirPrimerElementoArray(arr) {
        console.log(arr[0])} //el cero marca la posici'on uno, el 1 la dos y as'i sucesivamente. juanita es 0. rigoberto es 1 y natalia es 3.
   

   imprimirPrimerElementoArray(['Juanita', 'Rigoberto', 'Natalia'])
   

   function imprimirPrimerElementoArray(arr) {

    for (let i = 0; i < arr.length; i++) {
    console.log("El valor de i es: " + i);
    console.log(arr[i])
}
   }

   imprimirPrimerElementoArray(['Juanita', 'Rigoberto', 'Natalia'])


// 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

const obj = {
    nombre: 'fulanito',
    edad: 3,
    comidasFavoritas: ['pollo frito ', 'vegetales']
};

obj;

obj.nombre;
obj.edad;
obj.comidasFavoritas;

 Object.values(obj)

 function imprimirElementoPorElementoObjeto(obj){
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; 1++){
        console.log(arr[i])
    }
 }


 //const tipoDeSuscripcion = "Basic";

 
function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
            return; 
        }
        
    
        if (suscripcion == 'Basic'){
        console.log("Solo puedes tomar los cursos gratis") 
            return;
        }
        
     if (suscripcion == 'Expert') {
        console.log ("Puedes tomar los cursos de platzi durante un anio") 
            return;
        }
        
     if (suscripcion == 'Expert Plus') {
        console.log("Tu y alguien mas pueden tomar el todos los cursos durante un anio") 
            return;
        }
        
        console.warn('Mano nosotros no tenemos ese tipo de suscripcion, no seas sapo')


    }
conseguirTipoSuscripcion('') //agregar cualquier valor aceptado por la finci'on copmo Free

    
//bonus convertir el comportamiento anterior con arrays o objetos y un solo condicional:

const tiposDeSuscripciones = {
    free: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    basic: 'Solo puedes tomar los cursos gratis',
    expert: 'Puedes tomar los cursos de platzi durante un anio',
    expertPlus: 'Tu y alguien mas pueden tomar el todos los cursos durante un anio'
}
tiposDeSuscripciones['free']

const ejemploSuscripcion = 'free'
tiposDeSuscripciones['free']

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion])
        return
    }
    console.warn('Mano nosotros no tenemos ese tipo de suscripcion, no seas sapo')
}


conseguirTipoSuscripcion('')