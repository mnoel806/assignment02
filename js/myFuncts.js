function dropFunction() {
    document.querySelector("#dropdownmenu");
}
// sortAsc
function sortResultsAsc() {
    document.querySelector("");
    //hidemybutton();
}
// sortDsc
//Shows up only if sortAsc is alread selected
function sortResultsDsc() {
    document.querySelector("");
}
//this funct will hide the clicked button and reveal the opposite
function hideMyButton() {
    let x = document.querySelector("#sortDSC");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}