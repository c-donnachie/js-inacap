

const calcularPesoIdeal = () => {
    let edad = document.getElementById("txt_edad").value

    const pesoIdeal = edad * 2 + 8

    document.getElementById("cnt_peso_ideal").innerHTML = "Peso ideal es " + pesoIdeal

    cacularEstadoPeso(pesoIdeal)
}


const cacularEstadoPeso = (pesoIdeal) => {
    let pesoActual = document.getElementById("txt_peso_acutal").value
    let estadoPeso = ""
    let estilo = ""


    if (pesoActual === pesoIdeal) {
        estadoPeso = "Peso Ideal"
        imagen = "sobrepeso"
        estilo = "primary"
    } else if (pesoActual > pesoIdeal) {
        estadoPeso = "Sobre Peso"
        imagen = "sobrepeso"
        estilo = "danger"
    } else {
        estadoPeso = "bajoPeso"
        imagen = "bajopeso"
        estilo = "primary"
    }

    document.getElementById("cnt_estado_peso_texto").innerHTML = "Estado de peso es " + estadoPeso

    const pesoDiferencia = pesoActual - pesoIdeal

    document.getElementById("cnt_estado_peso_diferencia").innerHTML = "Diferencia de peso es " + pesoDiferencia

    document.getElementById("cnt_estado_peso_imagen").innerHTML = `
    <img src="./src/images/sobrepeso.png" alt="sobrepeso" class="imagen" >
    `


    document.getElementById("cnt-alerta").innerHTML = `
<div class='alert alert-${estilo} alert-dismissible fade show' role="alert">Tu estado de peso es: 
<strong> ${estadoPeso}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

}

