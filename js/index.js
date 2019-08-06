var mylist = [];

for (var i=0; i<5; i++) {
mylist.push(parseInt(prompt("Digite numeros")));
}
var max = mylist [0];
var min = mylist [0];

for (var i=1; i<mylist.length; i++){
	if (mylist[i]>max){
		max = mylist[i];
	}
	if(mylist[i]<min){
		min = mylist[i];
	}
}
document.body.innerHTML=("<p>seu maior numero é: " + max + "</p>");

document.body.append("seu menor numero é: "+ min);

console.log(mylist);