$(function(){
	$('[data-toggle="tooltip"]').tooltip();

	var hauteur = $(document).height();
	$("#bloc-menu").css("height",hauteur);

	$("#menu").on("click",function(){
		$("#bloc-menu").fadeIn();
	});

	$("#btn-close-menu").on("click",function(){
		// alert();
		$("#bloc-menu").fadeOut();
	})
});

$(document).ready(function(){
    $('.ma-classe').on('click', function() {
        $(this).toggleClass('clic-image');
    });
});


// $(".img-responsive").not(".no-fullscreen").click(function()
// {
//     $("#id_view_image").html("<img src='"+$(this).attr('src')+"' class='view_image_img'/>");
//     $("#id_view_image_body").addClass("view_image_body");
//     $("#id_view_image").addClass("view_image");
// });


// $("#id_view_image").click(function()
// {
//     $("#id_view_image").html("");
//     $("#id_view_image_body").removeClass("view_image_body");
//     $("#id_view_image").removeClass("view_image");
// });


// $(function(){
// 	var blocBtnA = $(".bloc-bouton ").height();
// 	$(".bloc-bouton i").css("height",blocBtnA);
	

// 	$("*[id^='nav-']").on("click",function(e){
// 		e.preventDefault();
// 		var elem = $(this).attr("id").replace("nav-","");
// 		$('html, body').animate({
// 			scrollTop: $("#index-"+elem).offset().top
// 		}, 1000);
// 	});
// });
   