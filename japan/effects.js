$(".anchorLink").click(function(e){
  e.preventDefault();
 
  var this_offset = $(this).offset();
  var that_id     = $(this).attr("href");
  var that_offset = $(that_id).offset();
  var offset_diff = Math.abs(that_offset.top - this_offset.top);
 
  var base_speed  = 100; // Time in ms per 1,000 pixels
  var speed       = (offset_diff * base_speed) / 400;
  
  $("html,body").animate({
    scrollTop: that_offset.top
  }, speed);
});