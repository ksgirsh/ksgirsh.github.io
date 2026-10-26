const api_key = "AIzaSyCCY0qJXrZmfheHJ5DoKzeGw7m178Vso8s";
//GET https://www.googleapis.com/youtube/v3/videos

let inputCode = window.prompt("Input time code (x:x:x)");
decodeTime(inputCode);
console.log(inputCode);

//--COPY PASTE FUNCTION CONTENT INTO CONSOLE
function getVideoIds()
{
    var content = document.getElementById('contents');
    var els = content.querySelectorAll('.ytLockupViewModelContentImage');
    var show="";
    var arrayId = [];

    for(i = 0; i < els.length; i++)
    {
        var el = els[i];
        show += (el.href.split('?v=')[1].split('&list')[0]);
        arrayId.push((el.href.split('?v=')[1].split('&list')[0]));
    }
    console.log(JSON.stringify(arrayId));
}


//-- COPY PASTE FUNCTION CONSOLE
function getAllDurations()
{
    


    function getDurationIds()
    {
        var contents = document.getElementById('contents');
        var els = contents.querySelectorAll('.ytBadgeShapeText');
        var show="";
        var timeCodeId = [];
        var durations = [];
        for(i = 0; i < els.length; i++)
        {
            var el = els[i];
            show += el.textContent;
            timeCodeId.push((el.textContent));
        }
        for (i = 0; i < timeCodeId.length; i++)
        {
            //converts 10:04 time codes into total seconds (duration)
            durations.push(decodeTime(timeCodeId[i]));
        }

        console.log(JSON.stringify(durations));

    }


    function decodeTime(timeCode)
    {
        var times = timeCode.split(":");
        var numbers = [];
        let outputTimes = [];
        let totalTime = 0;

        for (let i = 0; i < times.length; i++)
        {
            times[i] = times[i].trimStart("0");

            //remove preceding zeroes from time-- double digits so you only need to check the first character
            let check = times[i].slice(0, 1);
            times[i] = (check == "0" ? times[i].replace("0", "") : times[i]);
            numbers.push(Number(times[i]));
        }

        for (let i = 0; i < numbers.length; i++)
        {
            const exponent = (Math.abs(i - numbers.length) - 1);
            
            outputTimes.push(numbers[i] * (Math.pow(60, exponent)));
            totalTime += outputTimes[i];
        }
        return totalTime;
        
    }

    getDurationIds();
}