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




// Loading the browse results then select song
function loadResults(song) {
    const theList = document.querySelector("#resultsDisplay");
    const tr1 = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = song.title;
    // alert(song.title);
    tr1.appendChild(td1);
    const td2 = document.createElement("td");
    td2.textContent = song.artist;
    tr1.appendChild(td2);
    const td3 = document.createElement("td");
    td3.textContent = song.year;
    tr1.appendChild(td3);
    const td4 = document.createElement("td");
    td4.textContent = song.genre;
    tr1.appendChild(td4);
    const td5 = document.createElement("td");
    td5.textContent = song.popul;
    tr1.appendChild(td5);
    const td6 = document.createElement("btn");
    td6.textContent = "ADD";
    tr1.appendChild(td6);
    theList.appendChild(tr1);
}
function timeConvert(seconds) {
    let minutes = Math.floor(seconds / 60);
    return minutes;
}
function timeRemainder(seconds) {
    let remainingSeconds = seconds % 60;
    return remainingSeconds;
}

//This is what will be loaded into the Song Page
function songsDisplayed(song) {
    const theList = document.querySelector("#songInfos");

    const p1 = document.createElement("p");
    p1.textContent = "Title: " + song.title;
    theList.appendChild(p1);
    const p2 = document.createElement("p");
    p2.textContent = "Artist: " + song.artist;
    theList.appendChild(p2);
    const p3 = document.createElement("p");
    const gtype = "Finder placeholder";
    p3.textContent = "Artist-type: " + gtype;

    //do a search. 
    //     findThis(artist.type, {
    //         if(p3.artist[0] == artist.id) {
    //         gtype = artist.type;
    //     }
    // });

    theList.appendChild(p3);
    const p4 = document.createElement("p");
    p4.textContent = "Genre: " + song.genre;
    theList.appendChild(p4);
    const p5 = document.createElement("p");

    p5.textContent = "Duration: " + timeConvert(song.durationInSec) + " Minutes "
        + timeRemainder(song.durationInSec) + " Seconds";
    //convert total time to minutes and seconds
    theList.appendChild(p5);

    const dataAnalysis = document.querySelector("#analysisData");
    const ul1 = document.createElement("ul");
    dataAnalysis.appendChild(ul1);
    const li1 = document.createElement("li");
    li1.textContent = "BPM: " + song.bpm;
    ul1.appendChild(li1);

    const li2 = document.createElement("li");
    li2.textContent = "Energy: " + song.energy;
    li1.appendChild(li2);

    const li3 = document.createElement("li");
    li3.textContent = "Danceability: " + song.danceability;
    li2.appendChild(li3);

    const li4 = document.createElement("li");
    li4.textContent = "Valence: " + song.valence;
    li3.appendChild(li4);

    const li5 = document.createElement("li");
    li5.textContent = "Acosticness: " + song.acousticness;
    li4.appendChild(li5);

    const li6 = document.createElement("li");
    li6.textContent = "Speechiness: " + song.speechiness;
    li5.appendChild(li6);

    const li7 = document.createElement("li");
    li7.textContent = "Popularity: " + song.popul;
    li6.appendChild(li7);

}

function makeChart(song) {

    const data = {
        "song_data": [
            ["Energy", song.energy],
            ["Danciness", song.danceability],
            ["Valance", song.valence],
            ["Acousticness", song.acousticness],
            ["Speechiness", song.speechiness],
            ["Popularity", song.popul]
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

function goToRepo() {
    const repoURL = "https://github.com/mnoel806/assignment02";
}
function showCredits() {
    //onMouseOver:Floating Window at mouse with credits
}

// function populateArtists(artistData) {
//     for (let c of artistData) {
//         // let opt = makeOption(c);
//         const opt = document.createElement("option");
//         opt.textContent = c.name;
//         opt.value = c.value;
//             opt.addEventListener("click", function(){
//             this.classList.add("selected");
//             });
//         artistSel.appendChild(opt);
//     } //End of options being populated

// }
//Populate those Artists Fields
//     function populateArtists(artistData) {
//     for (let c of artistData) {
//         const opt = document.createElement("option");
//         opt.textContent = c.name;
//         opt.value = c.value;
//         artistSel.appendChild(opt);
//     } //End of options being populated

// }

// fetch(songURL)
//     .then(response => response.json())
//     .then(data => { populateSongs(data) })
// const opt1 = document.createElement("option");
// opt1.textContent = "Pick a Song";
// opt1.value = 0;
// songSel.appendChild(opt1);

// function populateSongs(songData) {
//     for (let s of songData) {
//         const optS = document.createElement("option");
//         optS.textContent = s.title;
//         optS.value = s.title;
//         songSel.appendChild(optS);
//     }
// }



// Loading the browse results
function loadResults(song) {
    const theList = document.querySelector("#resultsDisplay");
    const tr1 = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = song.title;
    // alert(song.title);
    tr1.appendChild(td1);
    const td2 = document.createElement("td");
    td2.textContent = song.artist;
    tr1.appendChild(td2);
    const td3 = document.createElement("td");
    td3.textContent = song.year;
    tr1.appendChild(td3);
    const td4 = document.createElement("td");
    td4.textContent = song.genre;
    tr1.appendChild(td4);
    const td5 = document.createElement("td");
    td5.textContent = song.popul;
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