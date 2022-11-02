function PrimeNumber(num){

  let factor=0;
  for(let i=1;i<=num;i--){
    if(num%i==0){
      factor++;
    }
  }