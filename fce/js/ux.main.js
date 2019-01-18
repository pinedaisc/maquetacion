(function(){
	init();
	function init(){
		initComponents();
		initEvents();
		bloquearClicks();
		

	}
	function initComponents(){
		console.log('init componentes')
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
		console.log('init events')
		var menu = '',
			msg = '',
			modal = '';
		methods = {
			init: function(){
				methods.buscar();
				// methods.abremenu();
			},
			abreMenu:function(){
				//to do
			},
			creaModal:function(){
				msg = 'TEST';
				modal = '<div class="overlay"></div><div class="message"><div class="ctn">'+msg+'</div></div>';
				
				$BODY.append(modal);	
			},
			buscar:function(){
				$('.search').on('click', function(e){
					alert('busqueda...')
				})	
			}
		}	
		methods.init();
	}

	function bloquearClicks(){
		$(document).click(function(e) {
			e.preventDefault();
			console.log("class name:" + e.target.className)
		});
	}
})();