// Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.


// Exemples d’utilisation :
// $> python exo.py bonjour jour
// true


// $> python exo.py bonjour joure
// false


// $> python exo.py 42
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.


// const args = process.argv.slice(2)

// function stringIntoString(arg1, arg2){
//   if(isNaN(arg1) && isNaN(arg2)){
//     console.log("yo")
//     if(arg1.includes(arg2)){
//       console.log(`${arg2} est inclu dans ${arg1}`)
//     } else{
//       console.log(`${arg2} n'est pas inclu dans ${arg1}`)
//     }
//   } else {
//     console.log("Error!")
//   }
// }

// stringIntoString(args[0], args[1]);



const args = process.argv.slice(2)

function stringIntoString(arg1, arg2){
  let array1=arg1.split("");
  let array2=arg2.split("");
  let result="";
  
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        let k = i + 1;
        let l = j + 1;
        let sub = [array2[j]];
        while (k < array1.length && l < array2.length && array1[k] === array2[l]) {
          sub.push(array2[l]);
          k++;
          l++;
        }
        if (sub.length === array2.length) {
          result = sub.join("");
          break;
        }
      }
    }
    if (result !== "") {
      break;
    }
  }
  if (result !== "") {
    console.log(result);
  } else {
    console.log("Erreur : " + arg2 + " n'est pas un sous-ensemble de " + arg1);
  }
}

stringIntoString(args[0], args[1]);