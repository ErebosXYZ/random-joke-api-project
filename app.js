// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

// Associar event click al botó
// La paraulja reservada async indica que tota aquesta funció maneja codi asíncron.
button.addEventListener("click", async function (){
    // Petició GET a l'endpoint perquè ens doni un acudit en format JSON

    const response = await fetch("https://api.chucknorris.io/jokes/random");

    // fetch utilitza GET per defecte, si volguéssim fer una petició POST hauríem d'utilitzar {method: "POST"}

    // obtindrem la resposta en format JSON. Haurem de transformar el format a una estructura de dades javaScript
    /** {
    "categories": [],
    "created_at": "2020-01-05 13:42:19.324003",
    "icon_url": "https://api.chucknorris.io/img/avatar/chuck-norris.png",
    "id": "oKBLHMlQSSqAwM16s6se8g",
    "updated_at": "2020-01-05 13:42:19.324003",
    "url": "https://api.chucknorris.io/jokes/oKBLHMlQSSqAwM16s6se8g",
    "value": "Chuck Norris can change a Diesel engine's spark plugs."
} */
    const data = await response.json();
    console.log(data.value);

    // La informació que necessitem es troba a la propietat value que ens crea el mètode .json()
    jokeDIV.textContent = data.value;
})
/**
 * Preguntas de autoevaluación:
¿Cuál es la URL exacta que me permite obtener un chiste?´
https://api.chucknorris.io/jokes/random

¿Qué tipo de petición HTTP debemos realizar para obtener la información? ¿GET o POST? GET porque estamos pidiendo la información.

"¿Que tipo de dato JavaScript devuelve la respuesta de la API después de aplicar response.json()?" 
Este método devuelve los datos en forma de objeto con diversas propiedades.

¿Cuál es la propiedad de este objeto que contiene el texto del chiste?
Se trata de la propiedad value, ya que necesitamos acceder al texto que contiene.
 */