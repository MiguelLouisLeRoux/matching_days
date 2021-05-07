function Factory() {
    arr = ["Monday", "Tuesday", "Wednesdy", "Thursday", "Friday", "Saturday", "Sunday"];

    var firstDate = undefined;
    var secondDate = undefined;

    function getTheFirstDay(date) {
        var newDate = new Date(date);
        return arr[newDate.getDay()];
    }

    function getTheSecondDay(date) {
        var newDate = new Date(date);
        return arr[newDate.getDay()];
    }

    return { getTheFirstDay,
             getTheSecondDay,

    }
}