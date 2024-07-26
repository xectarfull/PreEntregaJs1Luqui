// alerta de bienvenida
alert("Bienvenido a JsDivisas tu calculadora de divisas favorita")

// funcion montrando el cambio de moneda a querer realizar
function calcular(divisauno, divisados){
    alert("Quieres cambiar " + divisauno + " por " + divisados + "?" )
}

let divisaunoingresada = prompt("ingrese su actual divisa");
let divisadosingresada = prompt("ingrese la divisa que desea adquirir");

calcular(divisaunoingresada, divisadosingresada);

// funcion para determinar si es joven o adulto
function determinarEdad(edad) {
    if (edad >= 0 && edad < 18) {
        return "Joven";
    } else if (edad >= 18) {
        return "Adulto";
    } else {
        return "Edad no válida";
    }
}
// pruebas al llamar a la funcion 
console.log(determinarEdad(12));
console.log(determinarEdad(18));

// Función para convertir montos de USD a EUR
function convertirDivisa(montosUSD, tasaConversion) {
    let montosEUR = [];

    for (let i = 0; i < montosUSD.length; i++) {
        montosEUR.push(montosUSD[i] * tasaConversion);
    }

    return montosEUR;
}

// Datos de ejemplo
const montosUSD = [10, 25, 50, 100, 200];
const tasaConversion = 0.85; // 1 USD = 0.85 EUR

// Llamada a la función y mostrar el resultado
const montosEUR = convertirDivisa(montosUSD, tasaConversion);
console.log("Montos en EUR:", montosEUR);

// Función para convertir entre divisas
function convertirDivisas(monto, monedaOrigen, monedaDestino, tasasCambio) {
    // Verificar si las divisas están en las tasas de cambio
    if (!(monedaOrigen in tasasCambio && monedaDestino in tasasCambio)) {
        throw new Error('Moneda no soportada');
    }

    // Convertir monto a USD primero si es necesario
    let montoEnUSD;
    if (monedaOrigen === 'USD') {
        montoEnUSD = monto;
    } else {
        montoEnUSD = monto / tasasCambio[monedaOrigen];
    }

    // Convertir de USD a otra moneda 
    let montoConvertido;
    if (monedaDestino === 'USD') {
        montoConvertido = montoEnUSD;
    } else {
        montoConvertido = montoEnUSD * tasasCambio[monedaDestino];
    }

    return montoConvertido;
}

// Tasas de cambio en base al USD
const tasaDeCambio = {
    USD: 1,
    EUR: 0.85,
    ARS: 905.75,
    JPY: 110.57,
    CAD: 1.25,
    MXN: 20.15,
};

const monto = 100; // 100 unidades de monedaOrigen
const monedaOrigen = 'EUR'; // para Convertir desde Euros
const monedaDestino = 'ARS'; // a Convertirlo a Pesos

// Llama a la función y da el resultado
const montoConvertido = convertirDivisas(monto, monedaOrigen, monedaDestino, tasaDeCambio);
console.log(`Monto convertido: ${montoConvertido.toFixed(2)} ${monedaDestino}`);

// Tasas de cambio fijas tomando el USD como referencia
const tasasCambio = {
    USD: 1,
    EUR: 0.85,
    ARS: 905.75,
    JPY: 110.57,
};

// Función para convertir entre divisas
function convertirDivisasFijas(monto, monedaOrigen, monedaDestino) {
    monedaOrigen = monedaOrigen.toUpperCase();
    monedaDestino = monedaDestino.toUpperCase();

    // Convertir monto a USD primero si es necesario
    let montoEnUSD = monedaOrigen === 'USD' ? monto : monto / tasasCambio[monedaOrigen];

    // Convertir de USD a moneda destino
    let montoConvertido = monedaDestino === 'USD' ? montoEnUSD : montoEnUSD * tasasCambio[monedaDestino];

    return montoConvertido;
}

// Función para solicitar datos del usuario y realizar la conversión
function realizarConversion() {
    // Obtener los valores 
    const monto = parseFloat(document.getElementById('monto').value);
    const monedaOrigen = document.getElementById('monedaOrigen').value;
    const monedaDestino = document.getElementById('monedaDestino').value;

    // Validar la entrada del usuario
    if (isNaN(monto) || !monedaOrigen || !monedaDestino) {
        alert('Entrada inválida. Por favor, ingrese valores correctos.');
        return;
    }

    try {
        // Realizar la conversión
        const montoConvertido = convertirDivisasFijas(monto, monedaOrigen, monedaDestino);
        document.getElementById('resultado').innerText = 
            `Su tasa queda en: ${montoConvertido.toFixed(2)} ${monedaDestino}`;
    } catch (error) {
        alert('Error en la conversión: ' + error.message);
    }
}

// Define el array de divisas
let divisasArray = ["USD", "EUR", "ARS", "JPY"];

// Define el valor a buscar
let valorABuscar = "USD";

// Verifica si el valor esta en el array
if (divisasArray.includes(valorABuscar)) {
    console.log(`El valor ${valorABuscar} está presente en el array.`);
    // Confirma que el valor esta prensente
} else {
    console.log(`El valor ${valorABuscar} no está presente en el array.`);
    // Confirma que el valor no esta presente
}


