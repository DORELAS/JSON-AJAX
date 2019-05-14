var faqe = 1;
var informacion = document.getElementById("info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {

    var kerkese = new XMLHttpRequest();

    kerkese.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + faqe +'.json');
    
    kerkese.onload = function() {
    
if(kerkese.status >= 200 && kerkese.status < 400) {
        var dalje = JSON.parse(kerkese.responseText);
        renderHTML(dalje);
} else {
    console.log("We connected to the server but, it returned an error!");
}   
    };
kerkese.onerror = function() {
    console.log("Error occured!");
}
    kerkese.send();
    faqe++;

    if(faqe > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHTML(info) {

var string = "";

for(var i = 0; i < info.length; i++ ) {

    string += "<p>" + info[i].name + " is a " + info[i].species + " that likes to eat ";
    for(var  j = 0; j < info[i].foods.likes.length; j++) {
        if(j == 0) {

            string += info[i].foods.likes[j];
        } else {
            string += " and " + info[i].foods.likes[j];
        } 
    }
    string += " and disslikes ";
    for(var  j = 0; j < info[i].foods.dislikes.length; j++) {
        if(j == 0) {

            string += info[i].foods.dislikes[j];
        } else {
            string += " and " + info[i].foods.dislikes[j];
        } 
    }

    string += "</p>";
    
}

    informacion.insertAdjacentHTML('beforeend', string);

};
