//your JS code here. If required.
function enterMetaverse() {

	let btn = document.getElementById("enterBtn");
    let para = document.createElement("h1");
	
    para.textContent = "Entered Metaverse";


   
    let parent = document.getElementsByTagName("body")[0];
   parent.insertBefore(para , btn);
}
