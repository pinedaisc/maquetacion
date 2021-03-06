// agrega comas a las cifras
function addCommas(nStr) {
  	nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
    	x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function numberToPhone(number) {
	if (number) {
		return number.replace(/\D+/g, "").replace(/([0-9]{2})([0-9]{4})([0-9]{4}$)/gi, "$1-$2-$3");
	} else {
		return "";
	}
};