// Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.


// Exemples d’utilisation :
// $> python exo.py 3
// 2
// $>

// Afficher -1 si le paramètre est négatif ou mauvais.


const args = process.argv.slice(2);

function fibo(arg){
  // let arg;
  const a = 0;
  const b = 1;
  let fiboArray = [a,b];
  // console.log(fiboArray);
  for(let i=0; i<=15;i++){
    let calcul = fiboArray[fiboArray.length -1]+fiboArray[fiboArray.length -2];
    // console.log(fiboArray[fiboArray.length -2]);
    fiboArray.push(calcul);
    // console.log(i);
    // console.log(fiboArray[i])
  }
  console.log(fiboArray[arg])
  for(let j=arg; j<fiboArray.length; j++){
    // console.log(fiboArray[j])
  }
}

fibo(args[0]);