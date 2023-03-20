// Créez un programme qui affiche ses arguments reçus à l’envers.


// Exemples d’utilisation :
// $> python exo.py “Suis” “Je” “Drôle”
// Drôle
// Je
// Suis


// $> python exo.py ha ho
// ho
// ha

// $> python exo.py “Bonjour 36”
// Bonjour 36

// Afficher error et quitter le programme en cas de problèmes d’arguments.

const args = process.argv.slice(2);

function reverseArg(...arg){
  let sentence=arg;
  let result = [];
  for(let i=sentence.length-1; i>=0; i--){
    console.log(sentence[i])
  }
  result.push(sentence.join());
}

reverseArg(...args);