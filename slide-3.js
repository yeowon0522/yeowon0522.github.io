const progressBar = document.querySelector("div.progress")
const bodyTag = document.querySelector("body")
const sectionTags = document.querySelectorAll("div .first")

document.addEventListener("scroll", function(){
    const bodyHeight = bodyTag.getBoundingClientRect().height
    const scrollableHeight = bodyHeight - window.innerHeight
  
    const pixels = window.scrollY
    const percentage = pixels/ scrollableHeight
  
    progressBar.style.width = `${percentage*100}%`
  
  })

  document.addEventListener("scroll", function(){
    const topViewport = window.scrollY
    const midViewport = topViewport + window.innerHeight/2
  
    sectionTags.forEach(section =>{
      const sectionTop = window.scrollY + section.getBoundingClientRect().top
      const sectionMid = sectionTop + section.getBoundingClientRect().height/2
  
      const distance = midViewport - sectionMid
      
      console.log(distance)
  
      const characterTag = section.querySelectorAll("div.info")
      const cerealTag = section.querySelector(".scroll img")
  
      characterTag.style.transform = `translateY(${distance/4}px)`
      cerealTag.style.transform = `translateY(-${distance/4}px)`
    })
  })

$(document).ready(function(){
 
    $('.menu_btn>a').on('click', function(){
        $('.menu_bg').show(); 
        $('.sidebar_menu').show().animate({
            right:0
        });  
    });
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            right: '-' + 50 + '%'
                    },function(){
                        $('.sidebar_menu').hide();          
                    });  
    });

});


$("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".upload-name").val(fileName);
  });




  const photoWrap = document.querySelector("div.photos");
  const photos =photoWrap.querySelectorAll("img")
  
  
  photoWrap.addEventListener("mouseover",function(){
      photos.forEach(photo => {
      let randomX = Math.round(Math.random()*7)*20 - 40;
      let randomY = Math.round(Math.random()*7)*20 - 40;
  
  photo.style.transform = `translate(${randomX}px,${randomY}px)`
  
      })
  
  })
  
      photoWrap.addEventListener("mouseout",function(){
  
  
     photos.forEach(photo =>{
  
      photo.style.transform = `translate(0px,0px)`
     })
  
  })
  
  const menuTag = document.querySelector("nav a.toggle-menu")
  const asideTag = document.querySelector("aside")
  const wrapTag = document.querySelector("div.wrap")
  
  menuTag.addEventListener("click", function(){
    asideTag.classList.toggle("open")
    wrapTag.classList.toggle("open")
    
    if(asideTag.classList.contains("open")){
        console.log("open")
        menuTag.innerHTML = '<img src="close.png">'
    }else{
        console.log("close")
        menuTag.innerHTML = '<img src="hamburger.png">'
    }
    
  })
  
  let clickNum = 0;
  photoWrap.addEventListener("click", function(){
    clickNum++;
  
    photos[clickNum%photos.length].style.zIndex = clickNum;
  })
  
  
  