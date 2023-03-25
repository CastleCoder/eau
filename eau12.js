// Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres. Nombres négatifs acceptés.


// Exemples d’utilisation :
// $> python exo.py 5 1 19 21
// 2


// $> python exo.py 20 5 1 19 21
// 1

// $> python exo.py -8 -6 4
// 2

// Afficher error et quitter le programme en cas de problèmes d’arguments.

const args = process.argv.slice(2);

function difference(...arg){
  let array = arg;
  let result = [];
  let regexMatch = array.join();

  array = array.sort(function(a, b){
    return a - b;
  })
  // console.log(array)
  // console.log(regexMatch)

  // if(regexMatch.match(/[0-9]+$/)){
  //   console.log("que des chiffres !")
  // }

  for (let j=0;j< args.length; j++){
    if (!/^\d+$/.test(args[j])){
      console.log("Erreur, vous ne devez écrire que des chiffres")
      break;
    } else if(regexMatch.match(/[0-9]+$/)){

      for(let i=0; i<array.length-1;i++){
        let calcul = array[i+1] - array[i];
        result.push(calcul);
      }
      let sortArray = result.sort(function(a, b){
        return a - b;
      })
      console.log(sortArray[0]);
      break;
    }
  }

  

}

difference(...args);