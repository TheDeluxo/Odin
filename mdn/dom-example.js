const link = document.querySelector("a");     // this will select the first anchor (<a></a>) element in the DOM



link.textContent = "Mozilla Developer Network"; // this will change the content between the opening and closing tags
link.href = "https://developer.mozilla.org";    // this will change the href attribute in the selected element

const para = document.createElement("p");
const sect = document.querySelector("section");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);


const text = document.createTextNode(                       //
    " — the premier source for web development knowledge.", // creating a text node
  );                                                        //
const linkPara = document.querySelector("p");               // grab ahold of the first paragraph tag
linkPara.appendChild(text);                                 // appending the text node from above to this paragraph

// adding CSS to object with js
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

para.setAttribute("class", "highlight"); // adding attributes to object