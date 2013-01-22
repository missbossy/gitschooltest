// console.log("main.js is loaded");
$(document).ready(function(){
	$("button").on("click", function(){
		$(".booboo").html(
			$("textarea").val()
		);
	});

	$("li").on("click", function(){
		
		if ($(this).hasClass("done")) {
			$(this).removeClass("done");
		} else {
			$(this).addClass("done");
		}
	});


	$("img").on("dblclick", function(){
		//here.
		$("img").width(200);

		$("h1").fadeOut();

		$(".booboo").slideUp();

		$("#rahul").hide();
	});

	// $("img").click(function(){
	// 	//here.
	// 	$("img").width(200);
	// });
});