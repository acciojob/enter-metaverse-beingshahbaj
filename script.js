function enterMetaverse() {
           
            let statusParagraph = document.getElementById("status");

           
            if (statusParagraph.textContent === "Enter the Metaverse") {
               
                statusParagraph.textContent = "Entered Metaverse";

               
                let h1Tag = document.createElement("h1");

                
                h1Tag.textContent = "Entered Metaverse";

               
                statusParagraph.parentNode.replaceChild(h1Tag, statusParagraph);
            } else {
               
                alert("Already entered the Metaverse!");
            }
        }