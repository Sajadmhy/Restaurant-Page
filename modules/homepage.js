function pageLoad() {
    var content = document.getElementById("content");
    
    var image = document.createElement("img");
    image.src = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    image.style.width = "100%";
    content.appendChild(image);

    var h1 = document.createElement("h1");
    var textH1 = document.createTextNode(`Sajad's Restaurant`);
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

    var p = document.createElement("p");
    var textP = document.createTextNode(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae maiores fugiat numquam error molestias non cupiditate, harum impedit veniam ut, dolorem beatae possimus voluptates exercitationem quas aliquam iste, minima nulla. Ratione dolorum magnam minus atque fuga ullam similique rem at iste rerum. Eius dignissimos ducimus aliquid voluptates, voluptatibus doloremque. Beatae sit laudantium quidem numquam, quibusdam odio quis voluptatum repudiandae illo illum fugit veritatis dolor perspiciatis ipsam consectetur fugiat eligendi aspernatur minus enim totam quas error animi? Eveniet dolorum, ab tenetur blanditiis magnam autem dolores! Maiores quos itaque, quam reiciendis excepturi, optio vitae accusamus rem repellat asperiores sit molestias quae.
    `);
    p.appendChild(textP);
    content.appendChild(p);
}

export {pageLoad};