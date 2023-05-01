//set variables

var time , alarm , currentH , currentM,
    activeAlarm = false,
    sound = new Audio("https://freesound.org/people/SieuAmThanh/sounds/397787/")

//loop alarm
sound.loop = true;

//define a function to display currect time 
function displayTime()
{
    var now = new Date();
    time = now.toLocaleTimeString();
    clock.textContent = time; // basically will display the local time extracted from time variable & clock is id for H1

    if(time === alarm)
    {
        sound.play();

        snooze.className = "";
    }
    setTimeout(displayTime,1000);
}
displayTime();


//add option values relative towards time
function addMinSecVals(id)
{
    var select = id ;
    var min = 59 ;

    for ( i = 0 ; i<=min ; i++)
    {
        select.options[select.options.length] = new Option( i < 10 ? "0" + i : i , i < 10 ? "0" + i : i);
    }
}

function addHours(id)
{
    var select = id;
    var hour = 12;

    for ( i = 1 ; i <= hour ; i++)
    {
        select.options[select.options.length] = new Option( i < 10 ? "0" + i : i , i );
    }
}

addMinSecVals(minutes)
addMinSecVals(seconds)
addHours(hours)
