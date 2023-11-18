//your JS code here. If required.
function enterMetaverse() {
   
    let para = document.createElement("p");
    para.textContent = "Entered Metaverse";

   
    let parent = document.getElementsByTagName("body")[0];
    parent.appendChild(para);
}
