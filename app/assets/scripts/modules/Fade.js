

function Logo(scrollValue, element){
  
    var logo =$(''+element);
    this.show=function(){
       $(window).scroll(function(){
         if($(this).scrollTop() >= scrollValue){
             logo.fadeIn();
         }else{
             logo.fadeOut();
         }
       })
     }
}
module.exports = Logo;