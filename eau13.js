// Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri à bulle.

// Vous utiliserez une fonction de cette forme (selon votre langage) :
// my_bubble_sort(array) {
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

function bubbleSort(...arg){
  
  let array = arg;
  // console.log(array);
  if(array.length>=2 && (array.join()).match(/[0-9]+$/) ){

    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length -i  -1; j++){
        if(parseInt(array[j+1]) < parseInt(array[j])){
          //variable temporaire pour stocker la valeur de l'élément à l'index j
          let temp = array[j];
          //échanger les éléments
          array[j] = array[j+1];
          array[j+1] = temp;
          console.log(array + "       " + array[j] + "    " +j);
        }
      }
    }
  } else {
    console.log("Erreur !")
  }
}

bubbleSort(...args);



