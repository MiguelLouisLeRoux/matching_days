function Factory() {

    var arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var firstDate = "the first date";
    var secondDate = "the second date";
    var firstColour = "red";
    var secondColour = "purple";

    function getTheFirstDay(date) {
        var newDate = new Date(date);
        firstDate = arr[newDate.getDay()]

        return firstDate;
    }

    function getTheSecondDay(date2) {
        var newSecondDate = new Date(date2);
        secondDate = arr[newSecondDate.getDay()];

        return secondDate;
    }

    function checkMatch() {
        if (firstDate === secondDate) {
            return true;
        } else {
            return false;
        }
    }

    function theMatch() {
        if (firstDate === secondDate) {
            return "green";
        }
    }

    function values() {
        return {
            weekList : arr,
            firstdate : firstDate,
            seconddate : secondDate,
            theFirstColour : firstColour,
            theSecondColour : secondColour
        }
    }


    return { values, 
             getTheFirstDay,
             getTheSecondDay,
             checkMatch,
             theMatch

    }
}