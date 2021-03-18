let getDate = () => {
    const dates = document.querySelector('#date');
    const day = document.querySelector('#box-day');
    const month = document.querySelector('#box-month');
    const year = document.querySelector('#box-year');


    day.innerHTML = dates.value.substring(8);
    month.innerHTML = dates.value.substring(5, 7);
    year.innerHTML = dates.value.substring(0, 4);

    checkDate(date.value);
}

let dateInPast = (firstDate, secondDate) => firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0);


let checkDate = (dates) => {
    let currentDate = new Date();
    let givenDate = new Date(dates);
    let text = document.querySelector('h1')
    let today = checkCurrentDate();
    

    if (!dateInPast(givenDate, currentDate)) {
        text.innerHTML = "Future!";
        text.style.background = "green";
        document.body.style.background = "#57f";
        showMessage("green");

    }else if (today === dates) {
        text.innerHTML = "Present!";
        text.style.background = "orange";
        document.body.style.background = "#a8e";
        showMessage("orange");
    } else {
        text.innerHTML = "Past!";
        text.style.background = "grey";
        document.body.style.background = "#eec";
        showMessage("grey");
    }

    
    
}

let checkCurrentDate = () => {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let year = today.getFullYear();

    today = year + '-' + month + '-' + day;
    return today;
}

let showMessage = (borderColors) => {
    let message = document.querySelector('.message');
    message.style.background = "#fff";
    message.style.border = "2px solid " + borderColors;

}
document.querySelector('#date').addEventListener('change', getDate);