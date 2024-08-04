const fileInput = document.querySelector("input"),
downloadButton = document.querySelector("button");
downloadButton.addEventListener("click",e =>{
   e.preventDefault(); //prevent form from submitting
   fetchFile(fileInput.value);
});


function fetchFile(url){
   fetch(url).then(res=>res.blob()).then(file=>{
      // URL.createObjectURL - create url of a passed object
      let tempUrl = URL.createObjectURL(file);
      let aTag = document.createElement("a");
      aTag.href = tempUrl;
      aTag.download = "filename";
      document.body.appendChild(aTag);
      // adds a tag inside the body

        aTag.click();  //clicking <a> tag so the file downloads
        aTag.remove();//removing <a> tag once file downloads
   });
}