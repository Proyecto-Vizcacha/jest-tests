//piedra=1, papel=2,
function usuario(eleccion1, eleccion2){
    var eleccionUsuario1 =parseInt(eleccion1)
    var eleccionUsuario2 =parseprompt(eleccion2)
}
if(eleccionUsuario1 == 0){//el usuario1 eligio piedra 
    if(opciones[eleccionUsuario2] == 1){//si el usuario2 ha elgido papel
        console.log("¡Perdiste! El usuario 2 eligio papel y tu piedra.")
        return false;
    }else{
        if(opciones[eleccionUsuario2] == 2){//si el usuario2 ha elgido tijeras
            console.log("¡Ganaste!El usuario 2 eligio tijera y tu piedra.")
            return true;
        }else{
            if(opciones[eleccionUsuario2] == 0){//si el usuario2 ha elgido piedra
                console.log("¡Empate!Ambos eligieron piedra.")
                return false;
            }
        }
    }
}
if(eleccionUsuario1 == 1){//el usuario1 eligio papel
    if(opciones[eleccionUsuario2] == 2){//si el usuario2 eligio tijeras 
        console.log(" ¡Perdiste! El usuario 2 eligio tijera y tu papel.")
        return true;
    }else{
        if(opciones[eleccionUsuario2] == 0){//si el usuario2 eligio piedra
            console.log("¡Ganaste!El usuario 2 eligio piedra y tu papek.")
            return false;
        }else{
            if(opciones[eleccionUsuario2] == 1){//si el usuario2 ha elgido papel
                console.log("¡Empate!Ambos eligieron papel.")
                return false;
            }
        }
    }
}
if(eleccionUsuario1 == 2){//el usuario1 eligio piedra 
    if(opciones[eleccionUsuario2] == 0){//si el usuario2 eligio piedra 
        console.log(" ¡Perdiste! El usuario 2 eligio piedra y tu tijera.")
        return true;
    }else{
        if(opciones[eleccionUsuario2] == 1){//si el usuario2 ha elgido papel
            console.log("¡Ganaste!El usuario 2 eligio papel y tu tijera.")
            return false;
        }else{
            if(opciones[eleccionUsuario2] == 2){//si el usuario2 ha elgido tijeras
                console.log("¡Empate!Ambos eligieron tijera.")
                return false;
            }
        }
    }
}