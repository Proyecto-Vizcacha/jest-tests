function usuario(eleccion1, eleccion2){
    var eleccionUsuario1 =parseInt(eleccion1)
    var eleccionUsuario2 =parseprompt(eleccion2)
}
if(eleccionUsuario1 == 0){//el usuario eligio piedra 
    if(opciones[eleccionUsuario2] == 1){//si la maquina eligio papel 
        console.log(" ¡Perdiste! La maquina eligio papel y tu piedra.")
    }else{
        if(opciones[eleccionUsuario2] == 2){
            console.log("¡Ganaste!</h1> <>La maquina eligio tijera y tu piedra.")
        }else{
            if(opciones[eleccionUsuario2] == 0){
                console.log("¡Empate!</h1> <>Ambos eligieron piedra.")
            }
        }
    }
}
if(eleccionUsuario1 == 1){//el usuario eligio papel
    if(opciones[eleccionUsuario2] == 2){//si la maquina eligio papel 
        console.log(" ¡Perdiste! La maquina eligio tijera y tu papel.")
    }else{
        if(opciones[eleccionUsuario2] == 0){
            console.log("¡Ganaste!</h1> <>La maquina eligio piedra y tu papek.")
        }else{
            if(opciones[eleccionUsuario2] == 1){
                console.log("¡Empate!</h1> <>Ambos eligieron papel.")
            }
        }
    }
}
if(eleccionUsuario1 == 2){//el usuario eligio piedra 
    if(opciones[eleccionUsuario2] == 0){//si la maquina eligio papel 
        console.log(" ¡Perdiste! La maquina eligio piedra y tu tijera.")
    }else{
        if(opciones[eleccionUsuario2] == 1){
            console.log("¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.")
        }else{
            if(opciones[eleccionUsuario2] == 2){
                console.log("¡Empate!</h1> <h3>Ambos eligieron tijera.")
            }
        }
    }
}