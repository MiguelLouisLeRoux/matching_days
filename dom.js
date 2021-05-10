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
        console.log(firstDate.value);
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

                for (var k = 0; k < list.length; k++) {
                    var itt3 = list[k].innerHTML.trim();
                    

                    if (theFactory.values().seconddate === itt3) {
                        list[k].classList.remove("green");
                        list[k].classList.add("coral");
                    }
                }
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

            if (theFactory.values().seconddate === theFactory.values().firstdate && theSecondDay == itt2) {
                list2[j].classList.remove("coral");
                list2[j].classList.remove("crimson");
                list2[j].classList.add("green");
                
            } else if (theSecondDay == itt2 && theFactory.values().seconddate != theFactory.values().firstdate) {
                list2[j].classList.add("coral");

                for (var l = 0; l < list2.length; l++) {
                    var itt4 = list2[l].innerHTML.trim();
                    
                    if (theFactory.values().firstdate === itt4) {
                        list2[l].classList.remove("green");
                        list2[l].classList.add("crimson");
                    }
                }
            }

        }

    })

})