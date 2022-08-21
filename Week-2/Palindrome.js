// Palindrome JavaScript
function clickFunction() {

    var x = document
        .getElementById("cardInput")
        .value;
    var low = x.toLowerCase();
    var str = low.split("");
    var rev = str.reverse();
    var join = rev.join("");
    var p = (low + " is a palindrome!");
    var n = (low + " is not a palindrome!");

    // Thanks for the help:
    // https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
    // IF ELSE STATEMENTS
    if (x.length <= 0) {
        document
            .getElementById("result")
            .innerHTML = "You need to enter something! Maybe nothing is still a Palindrome!";

    } else if (low !== join) {
        document
            .getElementById("result")
            .innerHTML = n;

    } else if (low == join) {
        document
            .getElementById("result")
            .innerHTML = p;

    }
    // date part of app
    var date = new Date();
    var nexDate = date.toDateString();
    var today = ("Date: " + nexDate);
    document
        .getElementById("date")
        .innerHTML = today;

    // Original Phase printout
    var oPhase = ('Original Phase: ' + low)
    document
        .getElementById("original")
        .innerHTML = oPhase;

    // Reversed Phase Printout
    var rPhase = ('Reversed Phase: ' + join)
    document
        .getElementById("reversed")
        .innerHTML = rPhase;

    // Length Printout
    var len = low.length;
    var nPhase = ('Phase Length: ' + len)
    document
        .getElementById("length")
        .innerHTML = nPhase;

}
