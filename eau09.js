// Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.


// Exemples d’utilisation :
// $> python exo.py “4445353”
// true


// $> python exo.py 42
// true

// $> python exo.py “Bonjour 36”
// false

// Afficher error et quitter le programme en cas de problèmes d’arguments.

const args = process.argv.slice(2);

function onlyNumber(arg){
  let result = arg;
  let counter = 0;
  for(let i=0; i<result.length;i++){
    if(result[i].match(/[0-9]/g)){
      counter ++;
    }
  }
  if(counter === result.length){
    console.log("Votre chaine de caractère ne contient que des chiffres")
  } else {
    console.log("Votre chaine de caractère ne contient pas que des chiffres")
  }
  console.log(counter);
  console.log(result.length);
}

onlyNumber(args[0]);