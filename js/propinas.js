function calcular() {
    
    let total = document.getElementById('prop').value
    let servicio = document.getElementById('servicio')
    servicio = servicio.options[servicio.selectedIndex].id;
    console.log(servicio)
    if(servicio === '0'){
        servicio = document.getElementById('personalizado').value
        console.log(document.getElementById('personalizado').value)
    }
    console.log(servicio)
    let personas = document.getElementById('personas').value;
   
    if (total === '' || servicio === '' || personas === ''){
        //alert('Completá todos los campos')
    if(total === ''){
       // document.getElementById('prop').className = "vacio"
       alert('Complete el monto');
        
    }
    if (servicio === ''){
        //document.getElementById('servicio').className = "vacio"
       alert('Eliga una opcion');
    }
    if (personas === ''){
        //document.getElementById('personas').className = "vacio"
        alert('Complete el numero de personas');
    }
    if (personas === ''){
        //document.getElementById('personas').className = "vacio"
    }

    } else {
        let propina = Number(total) * Number(servicio)/100
        let total2 = Number(total) + Number(propina)
        let cp = Number(total2) / Number(personas)
        document.getElementById('resultado').innerHTML = 'Monto de la Propina: $' + (propina).toFixed(2);
        document.getElementById('resultado2').innerHTML = 'Monto Total: $' + (total2).toFixed(2);
        document.getElementById('resultado3').innerHTML = 'Cada persona debe : $' + (cp).toFixed(2);

    }

}

function limpiar() {
    document.getElementById('prop').value = ''
    document.getElementById('0').selected = true
    document.getElementById('resultado').innerHTML = ''
    document.getElementById('resultado2').innerHTML = ''
    document.getElementById('resultado3').innerHTML = ''
    document.getElementById('personalizado').value = ''
    document.getElementById('personas').value = ''
    document.getElementById('personalizado').hidden = true

    document.getElementById('prop').className = ''
    document.getElementById('servicio').className = ''
    document.getElementById('personas').className = ''
}
function desactivar(){
    document.getElementById('caja').disabled=true;
}

function otros(opcion) {

    if(opcion == 'Otro'){
        document.getElementById('personalizado').hidden = false
    } else {
        document.getElementById('personalizado').hidden = true
    }
}
