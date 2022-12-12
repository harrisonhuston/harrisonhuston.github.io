/**
 * interests.js fetches information from interests.json and in conjunction with
 * interests.html displays answers to categories of interests and hobbies that 
 * I have
 */


// function onClick() runs when the button is clicked in html
function onClick(){

    // define const url as the url to the JSON file
    const url = "model/interests.json"

    // define async function run()
    async function run() {
        // try statement define const res as await fetch url via the get method
        try{
            const res = await fetch(url, {
                method: 'GET'
            });
            // if res status is equal to 200 and res.ok is true
            if(res.status == 200 && res.ok == true){
                // define const data as await res.json()
                const data = await res.json()
                // run processData(data) function
                processData(data);
                // run styleOnClick function
                styleOnClick();
            }
            // else throw string
            else{
                throw "Something went wrong."
            }
        // catch error, console log string and error    
        } catch (error){
            console.log("Error.", error)
            }
    }

    // call function run()
    run();

    // function processData(data) populates ids for innerHTML
    function processData (data){

        // gets id and inner html by index of JSON
        document.getElementById('watch').innerHTML = "Sports To Watch"
        document.getElementById('play').innerHTML = "Sports To Play"
        document.getElementById('movies').innerHTML = "Movies"
        document.getElementById('hobbies').innerHTML = "Hobbies"
        
        document.getElementById('team-1').innerHTML = 
            data['my_hobbies'][0]['hobby']['team']
        document.getElementById('team-2').innerHTML = 
            data['my_hobbies'][1]['hobby']['team']
        document.getElementById('team-3').innerHTML = 
            data['my_hobbies'][2]['hobby']['team']
        document.getElementById('team-4').innerHTML = 
            data['my_hobbies'][3]['hobby']['team']
        document.getElementById('sport-1').innerHTML = 
            data['my_hobbies'][4]['hobby']['sport']
        document.getElementById('sport-2').innerHTML = 
            data['my_hobbies'][5]['hobby']['sport']
        document.getElementById('movie-1').innerHTML = 
            data['my_hobbies'][6]['hobby']['movie']
        document.getElementById('movie-2').innerHTML = 
            data['my_hobbies'][7]['hobby']['movie']
        document.getElementById('hobby-1').innerHTML = 
            data['my_hobbies'][8]['hobby']['hobby']
        document.getElementById('hobby-2').innerHTML = 
            data['my_hobbies'][9]['hobby']['hobby']
    }
}
