// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	money={};
	cash={'H':50,'Q':25,'D':10,'N':5,'P':1};
	if (currency>10000){
		money["error"]='You are rich, my friend! We don\'t have so much coins for exchange';
}
	else {
		for (var i in cash){
		if (currency>0){
			var cel=parseInt(currency/cash[i]);
			if (cel>0){
				money[i]=cel;
}
			currency=currency%cash[i];
}
}
}
	return(money);
}