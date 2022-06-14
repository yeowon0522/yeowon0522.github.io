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
