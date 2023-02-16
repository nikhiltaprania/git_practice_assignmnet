let a= 97;
let p = 0;

if (a>1){
    
    for (let i = 2; i<a ; i++){
        if (a%i===0){
            p = 1;
            break;
        }
    }
}
if (p==1){
    console.log("NO");
}
else{
    console.log("YES");
}