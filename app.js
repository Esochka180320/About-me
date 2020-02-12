      
$(function() {

        $('.one').on('click', function(){
        $(".main_right").html('<img src="img/V.png" class="main_right_img">');
        $('.main_center_hi').html("<br>Hi,<br>I'm Vlad,<br>Front End Developer.<br>"); 
        $('.main_center_after').html(" ");  
        $('.main_center_button').show();
    }); 


     
});

$(function() {

        $('.two').on('click', function(){
        $(".main_right").html('<ul id="slides"> <li class="slide showing"><img src="img/1.jpg" class="slide-img"></li><li class="slide "><img src="img/2.jpg" class="slide-img"></li><li class="slide"><img src="img/3.jpg" class="slide-img"></li><li class="slide"><img src="img/4.jpg" class="slide-img"></li><li class="slide"><img src="img/5.png" class="slide-img"></li><li class="slide"><img src="img/6.jpg" class="slide-img"></li><li class="slide"><img src="img/7.jpg" class="slide-img"></li><li class="slide"><img src="img/8.jpg" class="slide-img"></li><li class="slide"><img src="img/9.jpg" class="slide-img"></li></ul>');
        $('.main_center_hi').html("<span><br>ABOUT ME<br></span>"); 
        $('.main_center_after').html("<p>Well-organised person, problem solver, employee with high attention to detail.<br><br> Fan of MMA, outdoor activities, TV series and of course computer games.</p> ");  
        $('.main_center_button').hide();

$(function() {

var slides = $('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
});



 });
         });
 



$(function() {

        $('.three').on('click', function(){
        $(".main_right").html('<div class="front"><img src="img/front.png" class="fonimg"  ></div><div class="skil" ><div class="blue"><img src="img/html.png" class="skilImg"></div><div class="red"><img src="img/css.png" class="skilImg"></div><div class="green"><img src="img/js.png" class="skilImg"></div></div>');
        $('.main_center_hi').html("<span><br>SKILLS<br></span>"); 
        $('.main_center_after').html("<p>The area of my expertise is front end development (client side of the web).<br><br>Building small and medium web apps, landing page, features and coding interactive layouts.<br><br>HTML5, CSS3/SASS, BEM, Bootstrap 3, JavaScript(ES5/ES6), JQuery, Ajax(JSON), SQL.</p> ");  
        $('.main_center_button').hide();
    });
});


$(function() {

        $('.four').on('click', function(){
        $(".main_right").html('<div class="work" ><a href="https://github.com/Esochka180320/Shop.git" target="_blank"><img src="img/12.jpg" class="workImg"></a><a href="https://github.com/Esochka180320/Game.git" target="_blank"><img src="img/11.jpg" class="workImg"></a><a href="https://github.com/Esochka180320/Currency.git" target="_blank"><img src="img/13.jpg" class="workImg"></a><a href="https://github.com/Esochka180320/Countries.git" target="_blank"><img src="img/14.jpg" class="workImg"></a></div>');
        $('.main_center_hi').html("<span><br>MY WORK<br></span>"); 
        $('.main_center_after').html("<p>So, these are my little works, but I created them myself, so I'm looking for a job to work as a team and do interesting and complex projects and of course find new friends.</p>");  
        $('.main_center_button').hide();
   });
});


$(function() {
                

        $('.main_center_button , .five').on('click', function(){
        $(".main_right").html('<iframe  src="https://www.google.com/maps/d/embed?mid=1UqCsT8PdN7OvUdtIp9dAxBG6YQcIcR7t" frameborder="0 | 1" scrolling="no"></iframe>');
        $('.main_center_hi').html("<span><br>CONTACT ME<br></span>"); 
        $('.main_center_after').html("<br><br><a href="+'https://t.me/esochka1'+"><img class='main_center_img' src="+'img/telegram.png '+" > <h3>+380732065863</h3></a><br><br><br><a href="+'https://mail.ukr.net/desktop#msglist/f0/p0'+"><img class='main_center_img' src="+'img/mail.png '+" ><h3>vladik364@ukr.net</h3></a> ");  
        $('.main_center_button').hide();
    }); 
                 
 
        
});



        
