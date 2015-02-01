jQuery(document).ready(function($){
	
	//Choose any elements number
	var i = 1;
	var lineWidth = 0;
	var count = prompt('Сколько человек Вы хотите добавить?','10');
	
	while (count.replace(/\d/g, '').length) {
		alert('вы ввели не только цифры')
		count = prompt('Сколько человек Вы хотите добавить?','10');
	};
	
	if(count == null){
		count = 10;
	}
	
	$('.steps').text(count);
	$('.action-box h1 span').text(count);
	
	function validData() {
		
		var boxWidth = $('.info-bar').width() - 2;
		var neededStep = boxWidth/count;
				
		//elements adding
		var inputVal = $(".action-form input:text").val();
		
		if(inputVal != 'Имя знакомого' && inputVal != ''){
			if (i <= count) {
				lineWidth += neededStep;
				i++;
			}
			$('.info-bar .line').width(lineWidth);
			$('.result-list').prepend("<li>" + inputVal + "," + "</li>");
			
		}
		else {
			i = 1;
			alert('Введите имя знакомого!');
		}
	}

	$("#submit").bind("click", function(event){
		
		event.preventDefault();
		
		//strip filling
	
		validData();

		if($('.result-list li:last') && $('.result-list li').length < 2){
			
			var lastLi = $('.result-list li:last').text().slice(0, -1);
			$('.result-list li:last').text(lastLi);
			
		}
		
		var listLen = $('.result-list li').length;
		
		$('.info-bar .number .counter').text(listLen);
		
		if (listLen == count) {

			$("#submit").unbind("click");

			alert('Список из ' + count + ' имен заполнен!');
		}
		//elements adding *end*
			
	});
	
	//validation
	$(".action-form input:text").keydown(function(event){

		var keyCode = event.keyCode ? event.keyCode :
		event.charCode ? event.charCode :
		event.which ? event.which : void 0;
		
		if((keyCode != 13) && (keyCode != 8) && (keyCode != 32)) {
			var c = String.fromCharCode(event.which);
		}
		
		rgxp = /[a-zA-Z]/;
	
		if (!rgxp.test(c)){
			return false;
		}
		 
	});

});