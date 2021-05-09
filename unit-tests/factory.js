function Factory() {
    arr = ["Sunday", "Monday", "Tuesday", "Wednesdy", "Thursday", "Friday", "Saturday"];

    var firstDate = "the first date";
    var secondDate = "the second date";

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

    function values() {
        return {
            weekList : arr,
            firstdate : firstDate,
            seconddate : secondDate
        }
    }

    return { values, 
             getTheFirstDay,
             getTheSecondDay,

    }
}