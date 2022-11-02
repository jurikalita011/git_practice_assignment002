function check_prime(num){
	
  let factor=0;
  for(let i=1;i<=num;i++){
    if(num%i==0){
      factor++;
    }
  }
  if(factor==2){
      return true;
    }else{
      return false;
    }
}

 let ans=PrimeNumber(8);
if(ans == true){
console.log("is prime");
}else{
console.log("is not prime");	
