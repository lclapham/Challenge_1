const imgList = document.querySelectorAll('img');

for(let i = 0; i < imgList.length; i++){
    imgList[i].addEventListener("click",function (){
        console.log(this.src);
        window.open(this.src, "theImage", "resizable=yes, width=400, height=400");
    });
}
