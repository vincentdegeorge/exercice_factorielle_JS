//let n = window.prompt("saisir un nombre pour obtenir sa factorielle");
//let i;

//function fact(n) {
/*    while (i < n) {
        n = i * (i + 1); i++}
        console.log(n);
  */  
//}
//factorielle(5);

/*
function fact(n){
	if(Math.round(n)==n){
		var i=1
		var entree=n;
		while(i<entree-1){
			n= n+n*i;
			i=i+1;
		}
		console.log(n);
	}
	else{
		return undefined;
    }
}		
fact(5);
*/

//factorielle while
let n = window.prompt("saisissez un nombre entier positif");
let a = 1;
    while (a < n) {
        a++;
        n - a;
        return(n * (n-1));
    }
    //factorielle for


//factorielle function
/*
function factorial (n) {
    if (n <= 1) {           //si n plus petit ou égal à 1 (pourquoi ça ne marche pas si je mets  if (n = 1) ???)
        return 1;           //retournes : 1
    }                       // (sinon...)
    
    return n * factorial(n - 1); // retournes n * fonction (n-1)
}
*/