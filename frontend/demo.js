console.log("hello world");
let test = 10;
console.log(test);
test+=1;
console.log(test);
console.log(typeof test); //number
// les types sont dynamiques
test="mateo";
console.log(typeof test); //string
const test2=10; //init que 1 fois

const user = {
    nom:"melvin",
    age:42
};
console.log(user.age *10);
console.log(user["age"]);

const users = {
    0:"melvin",
    1:"matuo"
};
console.log(users[0]);
users[0]="matieu";
console.log(users[0]);
console.log(users[0].length);
function orange(para){
    console.log(para);
}orange(users);
const add=(a,b) =>{
    if (b!==0){
        return a+b ;
    }
    return 0;
};
const nbUn= add(10,11); //21
const nbDeux=add(12,-12); //22
console.log(add(nbUn,nbDeux));