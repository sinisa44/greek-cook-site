

function Logo(){
   
    var logo =$('.flying-logo');

    this.show=function(){
       $(window).scroll(function(){
         if($(this).scrollTop() >= 824){
             logo.fadeIn();
         }else{
             logo.fadeOut();
         }
       })
     }
}
module.exports = Logo;