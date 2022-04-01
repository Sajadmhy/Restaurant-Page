import { pageLoad } from "../modules/homepage";
import {menu} from "../modules/menu";
import {contact} from "../modules/contact";


pageLoad();
// menu();
// contact();
function load() {
var homebtn = document.getElementById("home");
var menubtn = document.getElementById("menu");
var contbtn = document.getElementById("contact");


homebtn.addEventListener("click", function () {
    document.getElementById("content").innerHTML= "";
    pageLoad();
    load();
});

menubtn.addEventListener("click", function() {
    document.getElementById("content").innerHTML= "";
    menu();
    load();
});

contbtn.addEventListener("click", function() {
    document.getElementById("content").innerHTML= "";
    contact();
    load();
});
};
load();

