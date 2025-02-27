
let homeScoreAdd = document.getElementById("hscore")
let guestScoreAdd = document.getElementById("gscore")
let pastScoreAdd = document.getElementById("past-gamesscore")
let hscore = 0
let gscore = 0
let tscore = 0

function addHS1() {
    hscore += 1;
    homeScoreAdd.textContent = hscore;
    
}

function addHS2() {
    hscore += 2;
    homeScoreAdd.textContent = hscore;
    
}

function addHS3() {
    hscore += 3;
    homeScoreAdd.textContent = hscore;
    
}

function addGS1() {
    gscore += 1;
    guestScoreAdd.textContent = gscore;
    

}

function addGS2() {
    gscore += 2;
    guestScoreAdd.textContent = gscore;
    
}

function addGS3() {
    gscore += 3;
    guestScoreAdd.textContent = gscore;
    
}

function saveTS() {

    tscore = hscore + "/" + gscore
    pastScoreAdd.textContent += tscore + "\n"
}

function newGS() {
    hscore = 0;
    gscore = 0;
    homeScoreAdd.textContent = hscore;
    guestScoreAdd.textContent = gscore;
}

