//piedra=0, papel=1, tijera=2,
function usuario(eleccion1, eleccion2){
    var eleccionUsuario1 =eleccion1
    var eleccionUsuario2 =eleccion2

    if(eleccionUsuario1 == 'piedra'){//el usuario1 eligio piedra 
        if(eleccionUsuario2 == 'papel'){//si el usuario2 ha elgido papel
            console.log("¡Perdiste! El usuario 2 eligio papel y tu piedra.")
            return false;
        }else{
            if(eleccionUsuario2 == 'tijeras'){//si el usuario2 ha elgido tijeras
                console.log("¡Ganaste!El usuario 2 eligio tijera y tu piedra.")
                return true;
            }else{
                if(eleccionUsuario2 == eleccionUsuario1){//si el usuario2 ha elgido piedra
                    console.log("¡Empate!Ambos eligieron piedra.")
                    return false;
                }
            }
        }
    }
    if(eleccionUsuario1 == 'papel'){//el usuario1 eligio papel
        if(eleccionUsuario2 == 'tijeras'){//si el usuario2 eligio tijeras 
            console.log(" ¡Perdiste! El usuario 2 eligio tijera y tu papel.")
            return false;
        }else{
            if(eleccionUsuario2 == 'piedra'){//si el usuario2 eligio piedra
                console.log("¡Ganaste!El usuario 2 eligio piedra y tu papek.")
                return true;
            }else{
                if(eleccionUsuario2 == eleccionUsuario1){//si el usuario2 ha elgido papel
                    console.log("¡Empate!Ambos eligieron papel.")
                    return false;
                }
            }
        }
    }
    if(eleccionUsuario1 == 'tijeras'){//el usuario1 eligio piedra 
        if(eleccionUsuario2 == 'piedra'){//si el usuario2 eligio piedra 
            console.log(" ¡Perdiste! El usuario 2 eligio piedra y tu tijera.")
            return false;
        }else{
            if(eleccionUsuario2 == 'papel'){//si el usuario2 ha elgido papel
                console.log("¡Ganaste!El usuario 2 eligio papel y tu tijera.")
                return true;
            }else{
                if(eleccionUsuario2 == eleccionUsuario1){//si el usuario2 ha elgido tijeras
                    console.log("¡Empate!Ambos eligieron tijera.")
                    return false;
                }
            }
        }
    }
};
module.exports = usuario;