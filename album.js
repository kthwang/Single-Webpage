var addPicture = document.getElementById("addPicture");
var textURL = document.getElementById("textURL");


function createImage() {
    var imageBox = document.getElementById("image-box");
    var newImage = document.createElement("img");
    imageBox.appendChild(newImage);
    
    var att = document.createAttribute("src");
    var alt = document.createAttribute("alt");
    
    alt.value = textURL.value + " is Wrong URL";
    att.value = textURL.value;
    
    newImage.setAttributeNode(att);
    newImage.setAttributeNode(alt);
    
    console.log(document.getElementsByTagName("img").length);

    if (document.getElementsByTagName("img").length > 12) {
        imageBox.removeChild(newImage);
    }
}




addPicture.addEventListener("click", createImage);
