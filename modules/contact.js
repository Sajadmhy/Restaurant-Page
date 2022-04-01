function contact() {
    var content = document.getElementById("content");
    
    var image = document.createElement("img");
    image.src = "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    image.style.width = "100%";
    content.appendChild(image);

    var h1 = document.createElement("h1");
    var textH1 = document.createTextNode(`Contact Us`);
    h1.appendChild(textH1);
    content.appendChild(h1);

    var btn1 = document.createElement("button");
    btn1.innerHTML = "Home Page";
    btn1.setAttribute("id" , "home");
    btn1.setAttribute("type" , "button");
    content.appendChild(btn1);

    var btn2 = document.createElement("button");
    btn2.innerHTML = "Menu";
    btn2.setAttribute("id" , "menu");
    btn2.setAttribute("type" , "button");
    content.appendChild(btn2);

    var btn3 = document.createElement("button");
    btn3.innerHTML = "Contact Us";
    btn3.setAttribute("id" , "contact");
    btn3.setAttribute("type" , "button");
    content.appendChild(btn3);

    var p1 = document.createElement("p");
    var textP1 = document.createTextNode(`Email: sajad.mahyaei@gmail.com`);
    p1.appendChild(textP1);
    content.appendChild(p1);

    var p2 = document.createElement("p");
    var textP2 = document.createTextNode(`GitHub: @sajadmhy`);
    p2.appendChild(textP2);
    content.appendChild(p2);
    
}

export {contact};