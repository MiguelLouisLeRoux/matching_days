var firstDate = document.querySelector(".date1");
var secondDate = document.querySelector(".date2");
var error = document.querySelector(".error");

document.addEventListener('DOMContentLoaded', function(){
    
    var theFactory = Factory();

    var templateSource = document.querySelector(".userTemplate").innerHTML;
    var userTemplate = Handlebars.compile(templateSource);

    firstDate.addEventListener("change", function() {
        console.log(theFactory.getTheFirstDay(firstDate.value));

        // userData = {

        // }
    })

    secondDate.addEventListener("change", function() {
        console.log(theFactory.getTheDay(secondDate.value));
    })

})