var firstDate = document.querySelector(".date1");
var secondDate = document.querySelector(".date2");
var error = document.querySelector(".error");
var weekDayBar = document.querySelector(".the-bar");

document.addEventListener('DOMContentLoaded', function(){
    
    var theFactory = Factory();

    var templateSource = document.querySelector(".userTemplate").innerHTML;
    var userTemplate = Handlebars.compile(templateSource);
   
    userData = {
        day : theFactory.values().weekList
    }

    userDataHTML = userTemplate(userData);
    weekDayBar.innerHTML = userDataHTML;

    firstDate.addEventListener("change", function() {
       
        var list = document.getElementsByTagName("li");
        var theFirstDay = theFactory.getTheFirstDay(firstDate.value);
        for (var i = 0; i < list.length; i++) {
            var itt = list[i].innerHTML.trim();
            list[i].classList.remove("crimson");
            list[i].classList.remove("green");

            

            if (theFactory.values().firstdate === theFactory.values().seconddate && theFirstDay == itt) {
                list[i].classList.remove("coral");
                list[i].classList.remove("crimson");
                list[i].classList.add("green");
            } else if (theFirstDay == itt && theFactory.values().firstdate != theFactory.values().seconddate) {
                
                list[i].classList.add("crimson");
                
            }

        }     

    })

    secondDate.addEventListener("change", function() {

        var list2 = document.getElementsByTagName("li");
        var theSecondDay = theFactory.getTheSecondDay(secondDate.value);
        for (var j = 0; j < list2.length; j++) {
            var itt2 = list2[j].innerHTML.trim();
            list2[j].classList.remove("coral");
            list2[j].classList.remove("green");

            console.log(theFactory.values().firstdate);
            console.log(theFactory.values().seconddate);

            if (theFactory.values().seconddate === theFactory.values().firstdate && theSecondDay == itt2) {
                list2[j].classList.remove("coral");
                list2[j].classList.remove("crimson");
                list2[j].classList.add("green");
            } else if (theSecondDay == itt2 && theFactory.values().seconddate != theFactory.values().firstdate) {
                list2[j].classList.add("coral");
               
            }

        }

    })

})