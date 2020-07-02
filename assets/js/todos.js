// alert("connected");
$("ul").on("click" , "li" ,function(){
	$(this).toggleClass("completed");
});

$("ul").on("click" , "span" ,function(event){
	$(this).parent().fadeOut(500 ,function (){ 
		$(this).remove();
	});
	event.stopPropagation(); // will stop propagation of effect to its parents
});

$("input[type = 'text']").on("keypress" , function(event){
	if(event.which === 13){
		var todoText = $(this).val(); // extracts the value
		$(this).val(""); // for clearing the input
		$("ul").append("<li><span></span>" + todoText + "</li>"); // append helps in adding in values on run time which takes input html and add it

	}
});