var disqus_shortname = 'juanfutbol';
var disqus_identifier;
var disqus_url="puma-dragon-evospeed-potencia-y-poder";
var disqus_number_c=2;
var disqus_per_page=3;
var tamaño_total=1920;
var total_item=$(".indepth_carac_logos_cont").outerWidth();
var in_item=0;

var s;

var numeroImages2=3;
 var slider_on2=false;
 var intervalID2;
var posicion_slider2=0;
var num_active=1;

$(document).on("click", "#indepth_button_ver" ,function(){
		var position = $(".indepth_content_top").position();
		$('html, body').animate({
			scrollTop: position.top-180
		}, 2000);
	});

$("#indepth_caracteristiucas_triangulo_cont").css("left",(($(".indepth_caract_logo_item").outerWidth()/2)-($("#indepth_caracteristiucas_triangulo_cont").outerWidth()/2))+"px");


$(document).on({
	mouseenter: function(){
		$(".indepth_loquiero_cuadro").show();
	},
	mouseleave: function(){
		$(".indepth_loquiero_cuadro").hide();
	}
},".loquieroover");



$('.indepth_pages').waypoint(function(direction) {
	 if(direction=='down'){
		 $("#indepth_loquiero_bar").fadeOut("slow");
		 $(".indepth_share").fadeOut("slow");
	 }else{
		  $(".indepth_share").fadeIn("slow");
		  $("#indepth_loquiero_bar").fadeIn("slow");
	 }
	 
	
},{offset: 'bottom-in-view'});



var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}


var slider_estados = function(){
	$(document).on("click",".indepth_box_buttom_item",function(){
		var estado=$(this).attr("estado");
		var estado_numero= $(this).attr("num");
		console.log(estado+"-"+estado_numero);
		$("#indepth_"+estado).animate({"margin-left":(-estado_numero*100)+"%"},700);
		$("#"+estado +" .indepth_box_buttom_item").removeClass('active');
		$(this).addClass('active');
	})
}


var startslider2 =function(){
	slider_on2=true;
	console.log("start");
	clearInterval(intervalID2);
	 intervalID2=setInterval(function(){
	 	if(posicion_slider2<numeroImages2-1){
	 		posicion_slider2++;
	 	}else{
	 		posicion_slider2=0;
	 	}
	 	slider_change2();	 		
	 }, 4000);
}
				 
var slider_change2=function(){
	 $(".indepth_docs_content").animate({"margin-left":-posicion_slider2*100+"%"},700);
	 $(".indepth_docs_ball").removeClass('active');
	 $("#indepth_docs_ball_"+posicion_slider2).addClass('active');
	  //$(".indepth_info_team_img").css("border-bottom","none");
	 //$("#indepth_info_team"+posicion_slider2+" .indepth_info_team_img").css("border-bottom","3px solid black");

}
						 
var slider_stop2= function(){
	slider_on2=false;
	clearInterval(intervalID2);
}

var slider_back2=function(){
	 if(posicion_slider2>0){
	            posicion_slider2 = posicion_slider2-1;
	            slider_change2();
	        }
	       slider_stop2();
}

var slider_next=function(){
	 if(numeroImages2-1>posicion_slider2){
            posicion_slider2 = posicion_slider2+1;
            slider_change2();
	        }
	       slider_stop2();
}


$(".indepth_docs_ball").on("click",function(){
	posicion_slider2=$(this).attr("number");
	 slider_change2();
	 slider_stop2();
});

$(".indepth_docs").on("click",function(){
	slider_stop2();
})

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

  var detect_mobile=function(){
	 var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
 };
 
	var mobile=false;
	
	 if (isMobile.Android())
	 {
	 mobile=true;
	 }
	 else if (isMobile.BlackBerry())
	 {
	 mobile=true;
	 }
	 else if (isMobile.iOS())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Opera())
	 {
	 mobile=true;
	 }
	 else if (isMobile.Windows())
	 {
	 mobile=true;
	 }
	 else
	 {
	 mobile=false;
 }
	 return mobile;
 }
 
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};







$(document).ready(function(){
	 total_item=$(".indepth_carac_logos_cont").outerWidth();
	 
	 
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	slider_estados();
	 startslider2();
	 
	 s = skrollr.init({
		 mobileCheck: function() {
                //hack - forces mobile version to be off
                return false;
            }
	 });
	 
	 $(" #skrollr-body").css({
		 "min-height": "1px",
		"position": "relative",
"top": 0,
"left": 0, 
"width": "100%",
"height": "auto"
	 })
	 
	 

	 var ventana_alto = $(window).height();
	var ventana_ancho = $(window).width();
	 if(ventana_ancho>600){
		
	}

	 
	$('.indepth_puma_fondo').css("height",ventana_alto+"px");
	//$("#indepth_break_2").css("height",)
	if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    {   	
    
    }else{
    	$('#indepth_cover').css("height",(ventana_alto-60)+"px");
    	
    	
    	 if(ventana_alto<800){
	 	
	 	
	 	


 	}else{
	 	$('.indepth_break').css("height",ventana_alto+"px");
 	}
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
    
    if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
	    console.log("ipad")
    }
		loadDisqus($("#indepth_coments"),disqus_url, "http://juanfutbol.com/indepth/"+disqus_url);
});

$(window).on("resize", function(){
	indepth_sizeAdjust(false);
	 total_item=$(".indepth_carac_logos_cont").outerWidth();
	 var ventana_alto = $(window).height();
	var ventana_ancho = $(window).width();
	if(ventana_ancho>600){
		
	}
	var ventana_alto = $(window).height();
    	 if(ventana_alto>600){
	 	$('.indepth_break').css("height",ventana_alto+"px");
	 	$('.indepth_puma_fondo').css("height",ventana_alto+"px");
 	}
	 if(navigator.platform == 'iPad'){
	    //$("#indepth_parallax_back").css("background-size", "100%");
	    $("#indepth_parallax_back").css("background-attachment", "initial");
    }
	 if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Android')
    { 
    }else{
    	var ventana_alto = $(window).height();
	 //ventana_alto=ventana_alto-(ventana_alto*.15)
	 	//$('.indepth_anuncio_section').css("height",ventana_alto-(ventana_alto*.10)+"px");
    }
})