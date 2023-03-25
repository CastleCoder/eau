// Créez un programme qui trie les éléments donnés en argument par ordre ASCII.


// Exemples d’utilisation :
// $> python exo.py Alfred Momo Gilbert
// Alfred Gilbert Momo


// $> python exo.py A Z E R T Y
// A E R T Y Z

// Afficher error et quitter le programme en cas de problèmes d’arguments.





const args = process.argv.slice(2);

function argAscii(...arg){
  
  let array = arg;
  if(array.length>=1 && (array.join()).match(/[a-zA-Z]+$/)){
    for(let i = 0; i <= array.length-1; i++){
      for(let j = i+1; j < array.length; j++){
        let asciiI = array[i].charCodeAt(0);
        let asciiJ = array[j].charCodeAt(0);
        console.log(asciiI);
        console.log(asciiJ);
        if(asciiJ < asciiI){
          //variable temporaire pour stocker la valeur de l'élément à l'index j
          let temp = array[j];
          //échanger les éléments
          array.splice(j,1);
          array.splice(i, 0, temp);
          // array[i] = temp;
        }
        console.log(array.join(" "));
      }
    }
  } else {
    console.log("Erreur !");
  }
}

argAscii(...args);