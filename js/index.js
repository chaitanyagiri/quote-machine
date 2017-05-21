$(document).ready(function(){
  var randomquote,author;
  newQuote();
  function newQuote(){
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url,function(data){
      randomquote = data.quoteText;
      author = data.quoteAuthor;
      $("#quoteid").html(data.quoteText);
      $("#author").html(' - '+data.quoteAuthor);
    });
  }
  $(".targ").on("click",function(){
    newQuote();
    var colors = ["#F5F5F5","#C5C1AA","#EE3B3B","#F08080","#CD9B9B","#CDC9C9","#FFE4E1","#FF7F50","#FF6103","#FF7F24","#C76114","#FFF68F","	#8B8B00","#9ACD32","#C0FF3E","#7CFC00","#9AFF9A","#40E0D0","#00CDCD","#8DEEEE","#5F9EA0","#009ACD","#4F94CD","#FF00FF"];
    var rand1 = Math.floor(Math.random()*colors.length);           var rand2 = Math.floor(Math.random()*colors.length); 
    if(rand1!=rand2){
  $('body').css("background", colors[rand1]);
  $('.fa').css("color", colors[rand2]);
  }
  });
  $(".tweet").on("click",function(){
    window.open("https://twitter.com/intent/tweet?text="+'"'+ randomquote +'" - '+author);
  });

});