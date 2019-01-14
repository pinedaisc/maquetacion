(function(){
	init();
	function init(){
		initComponents();
		initEvents();
	}
	function initComponents(){
		var isMobile = {
				Android: function() {
						return /Android/i.test(navigator.userAgent.toLowerCase());
				},
				BlackBerry: function() {
						return /BlackBerry/i.test(navigator.userAgent.toLowerCase());
				},
				iOS: function() {
						return /iPhone|iPad|iPod/i.test(navigator.userAgent.toLowerCase());
				},
				Opera: function() {
						return /Opera Mini/i.test(navigator.userAgent.toLowerCase());
				},
				Windows: function() {
						return /IEMobile/i.test(navigator.userAgent.toLowerCase());
				},
				any: function() {
						return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
				}
		};
		if(isMobile.any()) {
			
		}
		
	}
	function initEvents(methods){
		var menu = '',
			msg = '',
			modal = '';
		methods = {
			init: function(){
				methods.tooltip();
				methods.radios();
				methods.abreMenu();
				methods.abreSubMenu();
				$('select').selectBox().change(function(){
					
				});
				
				
			},
			radios:function(){
					var c = '<button class="checkStars">ETIQUETA</button>'
					$('input.rdBtn, .TEST').each(function(T){
						T = $(this);  // ====  <input type="radio" name="genero" value="H" class="rdBtn" data-value="sexo" data-label="Hombre"/>
						console.log(T.data('value'));
						console.log(T.data('label'));
						var c = '<button class="ratio"></button>';
						T.after(c);
						T.next().data('value', T.data('value')).html(T.data('label'));	
						if(T.is(':disabled')){
							T.next().addClass('disabled');
						}
					});
					$('input.chkBox').each(function(T){
						T = $(this);  // ====  <input type="radio" name="genero" value="H" class="rdBtn" data-value="sexo" data-label="Hombre"/>
						console.log(T.data('value'));
						console.log(T.data('label'));
						var c = '<button class="ChkBox"></button>';
						T.after(c);
						T.next().data('value', T.data('value')).html(T.data('label'));
						if(T.is(':disabled')){
							T.next().addClass('disabled');
						}
					});
					$('.ratio').click(function(e){
						e.preventDefault();
						if($(this).prev().is(':disabled')){
							return false;
						}else{
							$('input[data-value="'+$(this).data('value')+'"]').removeAttr('checked')
							$('.ratio').removeClass('selected')
							$(this).addClass('selected').prev().prop('checked', true);
						}
					});
					$('.ChkBox').click(function(e){
							e.preventDefault();
							if($(this).prev().is(':disabled')){
								return false;
							}else{
								if($(this).prev().is(':checked')){
									$(this).removeClass('selected').prev().removeAttr('checked')
								}else{
									$(this).addClass('selected').prev().prop('checked', true);
								}
							}
						});	
			},
			abreMenu:function(){
				$WINDOW.resize(function(){
					if($('.menuMb').length == 0 && $WINDOW.width() < 551 ){
						$('.head .cont').append('<button class="menuMb"></button>');
					}else{
						$('.menuMb').remove();
						if($('.head nav').is(':hidden')){$('.head nav').show()}
					}
				})
				if($('.menuMb').length == 0 && $WINDOW.width() < 551 ){
					$('.head .cont').append('<button class="menuMb"></button>');
				}
				$('body').on('click', '.menuMb', function(){
					if($('.head nav').is(':hidden')){
						$('.head nav').fadeIn();
					}else{
						$('.head nav').fadeOut();
					}
					
				});
			},
			abreSubMenu:function(){
				
				$('body').on('click mouseover', 'ul li', function(e){
					e.preventDefault();
					console.log($(this).find('.SbMenu').length)
					if($(this).find('.SbMenu').length > 0){
						$('.SbMenu').hide();
						$(this).find('.SbMenu').show();
					}else{
						$('.SbMenu').hide();
					}
					
				});
			},
			creaModal:function(msg){
				msg = 'TEST';
				modal = '<div class="overlay"></div><div class="message"><div class="ctn">'+msg+'</div></div>';
				
				$BODY.append(modal);	
			},
			personalizaRadios:function(){
				
			},
			tooltip: function(){
				
				$('.ttip').click( function(e){
					e.preventDefault();
					if($('.tooltip').length == 0){
						var a = '<div class="tooltip"><button class="btns closeTT">Cerrar</button></div>'
						$('.dom').append(a)
					}
					
					$('.closeTT').click(function(){
						$('.tooltip').remove();
					})

				 })
				 
			}
		}	
		methods.init();
	}

})();