alert("Welkom bij mijn Game");

var leeftijd = 15;
var toegang;

leeftijd = prompt("Wat is je leeftijd?");

if(leeftijd <= 15){
    alert("Je mag helaas niet door")
location.leeftijd(false);
}
 else if(leeftijd >= 15){

toegang = true;
 alert("Je mag door!");
}




var naam = prompt("Wat is jou naam?");
var answer = prompt("Welkom " + naam + " . Je komt aan bij auto garage's en je mag maar 1 garage kiezen maar ze hebben ook allebei met als einde.\n1) Ferrari 1. \n2) Lamborghini 2. \n\n Welke garage kies je?(Type 1 of 2)");





if(answer == 1){
alert("Je hebt garage 1 gekozen en je bevindt je nu op een racebaan met 14 racers");
}   
else if(answer == 2){

alert("Je hebt garage 2 gekozen je komt een garage binnen met 3 lamborghinis");
location.answer(false);
}



var v1 = prompt("Je ziet een racer met Bugatti, hij wilt racen met je. wat doe je??. \n1) Ik doe het. \n2) Ik doe het niet, \n\n (Type 1 of 2)");

if(v1 == 2){

alert("Je hebt gekozen om niet te racen .");
}   
else if(v1 == 1 ){

alert("Je hebt gekozen om te racen.")
location.v1(false);
}



var v2 = alert("Je komt eerst in een drag race met 10 racers met verschillende supercars.")

prompt("Je hebt 2 opties in je auto. Welke kies je?. \n1) Comfort?. \n2) Sport?. \n\n (Type 1 of 2)");

if(v2 == 1 ){
alert("Je hebt voor comfort gekozen maar dat zorgt dat je de race verliest.");
location.v2(false);
}
else if(v2 == 2){
alert("Je hebt voor sport gekozen. Hierdoor win je de eerste ronde van de race.")
}





var v3 = prompt("Tijd voor 2e ronde van de race. Je hebt 2 keuzes Enzo ferrari en LaFerrari. welke kies je?");

if(v3 == 1){
alert("Je hebt voor Enzo gekozen ,maar die is niet krachtig genoeg om de race te winnen");
location.v3(false);
}
else if(v3 == 2 ){
alert("Je hebt voor gekozen LaFerrari met 900PK heb zeker de kans om te winnen. ");
}




