$(".saveBtn").on("click", function(){
     
  var key = $(this).parent().attr("id").split("-")[1];
 
  var value = $(this).parent().find(".description").val();
  
  localStorage.setItem(key,value);
});
