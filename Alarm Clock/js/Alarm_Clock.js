//set variables

if ( typeof window !== "undefined")
{
    console.log("insidr displattime")


var time , alarm , currentH , currentM,
    activeAlarm = false
    // sound = new Audio("https://freesound.org/people/SieuAmThanh/sounds/397787/")

//loop alarm
// sound.loop = true;

//define a function to display currect time 
function displayTime()
{
    console.log("insidr displattime")
    var now = new Date();
    time = now.toLocaleTimeString();
    const clock = document.getElementById("clock")
    clock.textContent = time; // basically will display the local time extracted from time variable & clock is id for H1

    if(time === alarm)
    {
        // sound.play();

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
        select.options[select.options.length] = new Option( i < 10 ? "0" + i : i , i < 10 ? "0" + i : i); // basically when value of min or sec is less than 10 then add '0' infront of number otherwise just print the number
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

//set and clearn alarm 
startstop.onclick = function()
{
    //set the alarm 
    if (activeAlarm === false)
    {
        hours.disabled = true;
        minutes.disabled = true;
        seconds.disabled = true;
        ampm.disabled = true;

        alarm = hours.value + ":" + minutes.value + ":" +seconds.value + " " + ampm.value ;
        this.textContent = "Clear Alarm";
        activeAlarm = true;
    }
    else
    {
        //clear the alarm
        hours.disabled = false;
        minutes.disabled = false;
        seconds.disabled = false;
        ampm.disabled = false;

        // sound.pause();
        alarm = "00:00:00 AM";
        this.textContent = "Set Alarm"

        //hide snooze button 
        snooze.className = "hide";
        activeAlarm = false;
    }
};

//snooze for 5 minutes

snooze.onclick = function()
{

    if (activeAlarm === true)
    {

        //grab the current hour and minute
        currentH = time.substr(0 , time.length - 9);
        currentM = time.substr(currentH.length + 1 , time.length - 8);

        if ( currentM >= "55")
        {
            minutes.value = "00"
            hours.value = parseInt(currentH) + 1;
        
        }
        else
        {
            if ( parseInt (currentH) + 5 <= 9)
            {
                minutes.value = "0" + parseInt(currentM + 5);
            }
            else
            {
                minutes.value = parseInt(currentM) + 5;
            }
        }
        //hide snooze button 
        snooze.className = "hide";

        //now reset alarm
        startstop.click();
        startstop.click();
    }
    else
    {
        return false;
    }
};}