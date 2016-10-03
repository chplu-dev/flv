//this is where we define the functions used to save (and load game progress)

//Saving the current game state
function saveState(state) { 
    window.localStorage.setItem("gameState", JSON.stringify(state)); 
} 
 
//Loading a saved state
function restoreState() { 
    var state = window.localStorage.getItem("gameState"); 
    if (state) { 
        return JSON.parse(state); 
    } else { 
        return null; 
    } 
}
