var tomorrow = new Date();
var index = 0;
async function getNextDay() {
    index++;
    tomorrow.setDate(tomorrow.getDate() + 1);
    var nextDay = tomorrow.getFullYear() + (tomorrow.getMonth() < 10 ? "-0" : "-") + (tomorrow.getMonth() + 1) + (tomorrow.getDate() < 10 ? "-0" : "-") + tomorrow.getDate()
    var nextDayJson;
    await fetch("https://www.nytimes.com/svc/wordle/v2/" + nextDay + ".json").then(data => data.json()).then(data => nextDayJson = data)
    if(!nextDayJson.status) {
        console.log(index + " : " + nextDay + ": " + nextDayJson.solution)
        getNextDay()
    } else {
        tomorrow = new Date();
        index = 0
    }
}
getNextDay()