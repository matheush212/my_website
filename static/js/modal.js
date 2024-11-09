function openModal(content_number){
    $("#next-section").css({display: 'none'});
    $("#myModal").css({display: 'block'});
    buildSlideShowImages(content_number);
}

function closeModal(){
    $("#myModal").css({display: 'none'});
    $("#next-section").css({display: 'initial'});
}

function buildSlideShowImages(){
  slideStructure("static/images/inducon.png");
  slideStructure("static/images/cipa.png");
  slideStructure("static/images/kanfra.png");
  showSlides(1);
}

function slideStructure(img_src){
  let slide_images_div = document.getElementById("slide-images");
  let slide_div = document.createElement("div");
  let slide_image = document.createElement("img");
  slide_div.className = "mySlides fade";
  slide_image.style = "width:80%;margin-left:10%;"
  slide_image.src = img_src;
  slide_div.appendChild(slide_image);
  slide_images_div.appendChild(slide_div);
}