"use strict";

function openTab(evt, pageName){
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(i=0;i<tablinks.length;i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}

function imageSwap(){
    document.getElementById("dex").src = "images/kanto-pokedex-open.png";
    document.getElementById("dex").style.width = '474px';
    }