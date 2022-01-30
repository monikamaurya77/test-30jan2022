var a=1;
var n=prompt("Enter a number");
for(i=a; i<=n; i++){
    flag=0;
for(j=2; j<i ; j++){
if( i%j == 0){
    flag= 1;
    break;
}
}
if(i>1 && flag == 0){
    console.log(i);
}
}