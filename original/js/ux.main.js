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
				methods.creaModal();
			},
			abreMenu:function(){
				
			},
			creaModal:function(){
				msg = 'TEST';
				modal = '<div class="overlay"></div><div class="message"><div class="ctn">'+msg+'</div></div>';
				
				$BODY.append(modal);	
			}
		}	
		methods.init();
	}

})();