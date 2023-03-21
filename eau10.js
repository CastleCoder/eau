// Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.


// Exemples d’utilisation :
// $> python exo.py 20 25
// 20 21 22 23 24


// $> python exo.py 25 20
// 20 21 22 23 24

// $> python exo.py hello
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.

const args = process.argv.slice(2);

function between(arg1, arg2){
  let number1 = arg1;
  let number2 = arg2;
  let result = [];
  // console.log(number1);
  // console.log(number2);


  if(number1<number2){
    for(let i = number1; i<number2; i++ ){
      result.push(i);
    }
  }
  if (number1>number2){
    for(i = number2; i<number1; i++ ){
      result.push(i);
    } 
  } 
  else {
      console.log("Error");
  }

  let result1 = result.sort(function(a,b){
    return a-b
  });
  console.log(result1.join(" "))
}

between(args[0], args[1]);