function showSearchView() {
    const view1 = document.querySelector("#search-view");
    const view2 = document.querySelector("#song-view");
    const view3 = document.querySelector("#playlist-view");

    view1.style.display = "block";
    view2.style.display = "none";
    view3.style.display = "none";
}
function showSongView() {
    const view1 = document.querySelector("#search-view");
    const view2 = document.querySelector("#song-view");
    const view3 = document.querySelector("#playlist-view");

    view1.style.display = "none";
    view2.style.display = "block";
    view3.style.display = "none";
}
function showPlaylistView() {
    const view1 = document.querySelector("#search-view");
    const view2 = document.querySelector("#song-view");
    const view3 = document.querySelector("#playlist-view");

    view1.style.display = "none";
    view2.style.display = "none";
    view3.style.display = "block";
}

function artSongSwap() {
    let x = document.querySelector("#btnswp01");
    let y = document.querySelector("#btnswp02");
    let var1 = document.querySelector("#artistSearch");
    let var2 = document.querySelector("#songSearch");

    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
        var1.style.display = "none";
        var2.style.display = "block";
        loadSongs();
    } else {
        x.style.display = "block";
        y.style.display = "none";
        var1.style.display = "block";
        var2.style.display = "none";
    }
}


// function addToPlaylist() {
//     console.log(song.title + ' added');
// }

// Loading the browse results then select song
// function loadSongResults(song) {



//     const theList = document.querySelector("#resultsDisplay");
//     const tr1 = document.createElement("tr");
//     const td1 = document.createElement("td");
//     td1.textContent = song.title;
//     // alert(song.title);
//     tr1.appendChild(td1);
//     const td2 = document.createElement("td");
//     td2.textContent = song.artist;
//     tr1.appendChild(td2);
//     const td3 = document.createElement("td");
//     td3.textContent = song.year;
//     tr1.appendChild(td3);
//     const td4 = document.createElement("td");
//     td4.textContent = song.genre;
//     tr1.appendChild(td4);
//     const td5 = document.createElement("td");
//     td5.textContent = song.popul;
//     tr1.appendChild(td5);
//     const td6 = document.createElement("button");
//     td6.textContent = "ADD";
//     tr1.appendChild(td6);
//     theList.appendChild(tr1);
// }

//Functions to get the time displayed properly
function timeConvert(seconds) {
    let minutes = Math.floor(seconds / 60);
    return minutes;
}
function timeRemainder(seconds) {
    let remainingSeconds = seconds % 60;
    return remainingSeconds;
}

//This is what will be loaded into the Song Info Page
function songDisplayed(val) {
    if (val == 0) {
        console.log("emptySongsInfo");
    } else {
        const theList = document.querySelector("#songInfos");

        const selectedSong = retrieveStorage()
        const result = selectedSong.find((element) => element.song_id == val);
        console.log(result);

        const song = result;

        makeChart(song);

        const p1 = document.createElement("p");
        p1.textContent = "Title: " + song.title;
        theList.appendChild(p1);

        const p2 = document.createElement("p");
        p2.textContent = "Artist: " + song.artist.name;
        theList.appendChild(p2);

        const p3 = document.createElement("p");
        p3.textContent = "Genre: " + song.genre.name;
        theList.appendChild(p3);

        const p4 = document.createElement("p");
        p4.textContent = "Duration: " + timeConvert(song.details.duration) + " Minutes "
            + timeRemainder(song.details.duration) + " Seconds";
        //convert total time to minutes and seconds
        theList.appendChild(p4);

        const dataAnalysis = document.querySelector("#analysisData");
        const ul1 = document.createElement("ul");
        dataAnalysis.appendChild(ul1);

        const li1 = document.createElement("li");
        li1.textContent = "BPM: " + song.details.bpm;
        ul1.appendChild(li1);

        const li2 = document.createElement("li");
        li2.textContent = "Energy: " + song.analytics.energy;
        li1.appendChild(li2);

        const li3 = document.createElement("li");
        li3.textContent = "Danceability: " + song.analytics.danceability;
        li2.appendChild(li3);

        const li4 = document.createElement("li");
        li4.textContent = "Liveness: " + song.analytics.liveness;
        li3.appendChild(li4);

        const li5 = document.createElement("li");
        li5.textContent = "Valence: " + song.analytics.valence;
        li4.appendChild(li5);

        const li6 = document.createElement("li");
        li6.textContent = "Acosticness: " + song.analytics.acousticness;
        li5.appendChild(li6);

        const li7 = document.createElement("li");
        li7.textContent = "Speechiness: " + song.analytics.speechiness;
        li6.appendChild(li7);

        const li8 = document.createElement("li");
        li8.textContent = "Popularity: " + song.details.popularity;
        li7.appendChild(li8);

    }
}


function makeChart(song) {

    const data = {
        "song_data": [
            ["Energy", song.analytics.energy],
            ["Danciness", song.analytics.danceability],
            ["Valance", song.analytics.valence],
            ["Acousticness", song.analytics.acousticness],
            ["Speechiness", song.analytics.speechiness],
            ["Popularity", song.details.popularity]
        ]
    }
    new Chart('myChart', {
        type: 'radar',
        data: {
            labels: data.song_data.map(a => a[0]),
            // (THIS IS WHERE WE WILL ADD THE JSON/API INFO ONCE WE GOT IT)
            datasets: [{
                label: '# OF DATA POINTS',
                data: data.song_data.map(a => a[1]),
                borderWidth: 1
            }]

        },
        options: {

            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    suggestedMin: 20,
                    suggestedMax: 100
                }
            }
        },
    });
}


function loadSongResults(val) {
    // console.log(val);
    if (val == 0) {
        console.log("emptyresults");
    } else {

        const selectedSong = retrieveStorage()

        // console.log(selectedSong);
        const result = selectedSong.find((element) => element.song_id == val);
        console.log(result);

        const song = result;
        const theList = document.querySelector("#resultsDisplay");
        const tr1 = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.textContent = song.title;
        // alert(song.title);
        tr1.appendChild(td1);
        const td2 = document.createElement("td");
        td2.textContent = song.artist.name;
        tr1.appendChild(td2);
        const td3 = document.createElement("td");
        td3.textContent = song.year;
        tr1.appendChild(td3);
        const td4 = document.createElement("td");
        td4.textContent = song.genre.name;
        tr1.appendChild(td4);
        const td5 = document.createElement("td");
        td5.textContent = song.details.popularity;
        tr1.appendChild(td5);
        const td6 = document.createElement("button");
        td6.textContent = "ADD";
        tr1.appendChild(td6);
        theList.appendChild(tr1);
    }
}  

function goToRepo() {
    window.location = "https://github.com/mnoel806/assignment02";
}
function showCredits() {
    //onMouseOver:Floating Window at mouse with credits
}

// STORAGE FUNCTIONS

function retrieveStorage() {
    return JSON.parse(localStorage.getItem('musicDat')) || [];
}

function updateStorage(artistsData) {
    localStorage.setItem('musicDat', JSON.stringify(artistsData));
}

function emptyStorage() {
    localStorage.removeItem('musicDat');
}



function loadArtResults(artist) {
    const theList = document.querySelector("#resultsDisplay");
    const tr1 = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = artist.title;
    // alert(song.title);
    tr1.appendChild(td1);
    const td2 = document.createElement("td");
    td2.textContent = artist.name;
    tr1.appendChild(td2);
    const td3 = document.createElement("td");
    td3.textContent = artist.year;
    tr1.appendChild(td3);
    const td4 = document.createElement("td");
    td4.textContent = artist.genre;
    tr1.appendChild(td4);
    const td5 = document.createElement("td");
    td5.textContent = artist.popul;
    tr1.appendChild(td5);
    const td6 = document.createElement("btn");
    td6.textContent = "ADD";
    tr1.appendChild(td6);
    theList.appendChild(tr1);
}



function getRandomNumber() {
    return 4;   //chosen by fair dice roll
    //100% random
}


{/* <button id="reloader" onClick="location.reload()">RELOAD</button> */ }