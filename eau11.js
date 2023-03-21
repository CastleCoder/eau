// Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.


// Exemples d’utilisation :
// $> python exo.py Ceci est le monde qui contient Charlie un homme sympa Charlie
// 6


// $> python exo.py test test test
// 0

// $> python exo.py test boom
// -1

// Afficher error et quitter le programme en cas de problèmes d’arguments.


const args = process.argv.slice(2);

function searchIndex(...arg){
  let array = arg;
  let commonWord = [];
  let counter = 0;
  if(args.length<=1){
    console.log("Error !")
  } else {
    for(let i=0; i<array.length -1;i++){
      // console.log(array[i]);
      // console.log(array[array.length-1]);
      
      if(array[i] === array[array.length-1]){
        commonWord.push(i)
        counter++;
      } 
    }
    if(counter===0){
      console.log(-1);
    }
    console.log(commonWord.join())
  }
}

searchIndex(...args);