/**
 * portfolio.js functions to display project and project details in conjunction
 * with portfolio.html. The program displays the specific project when its icon
 * is clicked on. It will them smooth scroll into view. The program also will 
 * smooth scroll to the top of the page when the Top Of Page text is clicked in
 * the html page.
 */


// define functions for each project, when clicked smooth scroll display block
function departmentClick(){
    document.getElementById('department-manager-display').style.display ="block";
    document.getElementById('department-manager-display').scrollIntoView({behavior: "smooth"});
}
function bestClick(){
    document.getElementById('best-purchase-display').style.display ="block";
    document.getElementById('best-purchase-display').scrollIntoView({behavior: "smooth"});
}
function nbaClick(){
    document.getElementById('nba-display').style.display ="block";
    document.getElementById('nba-display').scrollIntoView({behavior: "smooth"});
}
function memoryClick(){
    document.getElementById('memory-display').style.display ="block";
    document.getElementById('memory-display').scrollIntoView({behavior: "smooth"});
}
function processClick(){
    document.getElementById('process-display').style.display ="block";
    document.getElementById('process-display').scrollIntoView({behavior: "smooth"});
}
function dowClick(){
    document.getElementById('dow-display').style.display ="block";
    document.getElementById('dow-display').scrollIntoView({behavior: "smooth"});
}
// when top of page is clicked smooth scroll to the top
function topClick(){
    window.scrollTo({top:0, behavior: "smooth"});
}
