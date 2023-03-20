// Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.


// Exemples d’utilisation :
// $> python exo.py 14
// 17
// $>

// Afficher -1 si le paramètre est négatif ou mauvais.

// const args = process.argv.slice(2);

// function number(arg){
//   let primeArray = [];
//   let resultArray = [];
//       let i;
//       for(i=2; i<10000; i++){
//        primeArray.push(i);
//       }
//       // console.log(primeArray);
//       for(j=0;j<primeArray.length;j++){
//         if(j > Math.sqrt(primeArray[j])){
//           resultArray.push(primeArray[j])
//           // console.log(primeArray[j]);
//         }
//       }
//       console.log(resultArray)
// }

// number(args[0]);



const args = process.argv.slice(2);

function number(arg){
  let primeArray = [];
  let result = [];
      for(let i=2; i<100000; i++){
        let primeNumber=true;
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j === 0){
                primeNumber=false;
                break;
            }
          }
          if(primeNumber){
            primeArray.push(i)
          }
      }
      for(const element of primeArray){
        if (element >= arg){
          console.log(element);
          break;
        }
      }
    


      
}

number(args[0]);