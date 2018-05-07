$(document).ready(function() {
	$(".op1").click(function () {
		$( "#login" ).animate({
		opacity: 0,
		},function() {
			$("#create").show();
			$("#login").hide();

			$( "#create" ).animate({
				opacity: 1,
				});
		});
		$(".op1").css("border-bottom-width","0px");
		$(".op2").css("border-bottom-width","1px");
	});
	$(".op2").click(function () {
			$( "#create" ).animate({
			opacity: 0,
			},function() {
				$("#create").hide();
				$("#login").show();

				$( "#login" ).animate({
				opacity: 1,
				});
			});
		$(".op2").css("border-bottom-width","0px");
		$(".op1").css("border-bottom-width","1px");
	});

	$(".op1-user").click(function () {
		if($("#encuen").css( "display" ) == "block"){
			var name = "#encuen";
		}else{
			var name = "#pregs";
		}
			$( name ).animate({
			opacity: 0,
			},function() {
				$(name).hide();

				$(".op1-user").css("border-bottom-width","0px");
   				$(".op2-user").css("border-bottom-width","1px");
    			$(".op3-user").css("border-bottom-width","1px");
    			
				$("#info").show();

				$( "#info" ).animate({
				opacity: 1,
				});
			});
	});
	$(".op2-user").click(function () {
		if($("#info").css( "display" ) == "block"){
			var name = "#info";
		}else{
			var name = "#pregs";
		}
			$( name ).animate({
			opacity: 0,
			},function() {
				$(name).hide();

				$(".op1-user").css("border-bottom-width","1px");
    			$(".op2-user").css("border-bottom-width","0px");
    			$(".op3-user").css("border-bottom-width","1px");
	
				$("#encuen").show();

				$( "#encuen" ).animate({
				opacity: 1,
				});
			});
	});
	$(".op3-user").click(function () {
		if($("#info").css( "display" ) == "block"){
			var name = "#info";
		}else{
			var name = "#encuen";
		}
			$( name ).animate({
			opacity: 0,
			},function() {
				$(name).hide();

				$(".op1-user").css("border-bottom-width","1px");
    			$(".op2-user").css("border-bottom-width","1px");
    			$(".op3-user").css("border-bottom-width","0px");
	
				$("#pregs").show();

				$( "#pregs" ).animate({
				opacity: 1,
				});
			});
	});

	$( "input[type=checkbox]" ).on( "click", function() {
		if($( "input:checked" ).length == 0){
			$( ".pas" ).animate({
				opacity: 0,
			},function() {
				$(".pas").hide();
				$('input[type=checkbox]').val('false');
			});
		}else{
			$(".pas").css("opacity","0");
			$(".pas").show();
			$( ".pas" ).animate({
				opacity: 1,
			});
			$('input[type=checkbox].check').val('true');
		}
		
	} );
});