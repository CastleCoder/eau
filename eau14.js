// Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri par sélection.

// Vous utiliserez une fonction de cette forme (selon votre langage) :
// my_select_sort(array) {
// 	# votre algorithme
// 	return (new_array)
// }


// Exemples d’utilisation :
// $> python exo.py 6 5 4 3 2 1
// 1 2 3 4 5 6


// $> python exo.py test test test
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.


// Wikipedia vous présentera une belle description de cet algorithme de tri.



const args = process.argv.slice(2);

function selectiveSort(...arg){
  
  let array = arg;
  let numberMatch = array.join();
  console.log(array);
  if(array.length>=2 && numberMatch.match(/[0-9]+$/) ){
    
    for(let i = 0; i < array.length -1; i++){
      for(let j = i+1; j < array.length; j++){
        if(parseInt(array[j]) < parseInt(array[i])){
          //variable temporaire pour stocker la valeur de l'élément à l'index j
          let temp = array[j];
          //échanger les éléments
          array.splice(j,1);
          array.splice(i, 0, temp);
          // array[i] = temp;
          console.log(array + "       " + array[j] + "    " +j);
        }
      }
    }
  } else {
    console.log("Erreur !");
  }
}

selectiveSort(...args);