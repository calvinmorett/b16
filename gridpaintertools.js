$(document).ready(function(){
	
	$('.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
   // $('.tabs li').attr('data-tab');
		$('.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    
   })
		
  $('.active').click(function(){
		var active_id = $(this).attr('data-tab');
    console.log(active_id);    
    
		$('.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
    
		$("#"+active_id).addClass('current');
    $('.grid-row li[data-tab="'+active_id+'"]').addClass('current');  
    
		// $('#nav-menu .tabs li').each(function(){
		// $("#"+active_id).addClass('current'); 
//    console.log($(this).attr('datatype'));
    
})
});




// here image editing

// adding an image via url box
// editing image via css properties
function editImage() {
	var gs = $("#gs").val(); // grayscale
	var br = $("#br").val(); // brightness
	var ct = $("#ct").val(); // contrast
	var huer = $("#huer").val(); //hue-rotate
	var invert = $("#invert").val(); //invert
	var saturate = $("#saturate").val(); //saturate

	$(".img-cell-image").css(
    "filter", 'grayscale(' + gs+
    '%) brightness(' + br +
    '%) contrast(' + ct +
    '%) hue-rotate(' + huer +
    'deg) invert(' + invert +
    '%) saturate(' + saturate +
    '%)'
  );

	$("#imageContainer img").css(
    "-webkit-filter", 'grayscale(' + gs+
    '%)  brightness(' + br +
    '%) contrast(' + ct +
    '%) hue-rotate(' + huer +
    'deg) invert(' + invert +
    '%) saturate(' + saturate +
    '%)'
  );
}

//When sliders change image will be updated via editImage() function
$("input[type=range]").change(editImage).mousemove(editImage);

// Reset sliders back to their original values on press of 'reset'
$('#imageEditor').on('reset', function () {
	setTimeout(function() {
		editImage();
	}, 0);
});




// here image editing

// adding an image via url box
// editing image via css properties
function bgCOLOR() {
	var huerBG = $("#huerBG").val(); //hue-rotate

	$("#container").css(
    "background", '#' + huerBG + ''
  );

	$("#container").css(
    "background", '#' + huerBG + ''
  );
}

//When sliders change image will be updated via editImage() function
$("input[type=range]").change(bgCOLOR).mousemove(bgCOLOR);

// Reset sliders back to their original values on press of 'reset'
$('#imageEditor').on('reset', function () {
	setTimeout(function() {
		bgCOLOR();
	}, 0);
});

