$(function(){
	$('.order-recall').on('click', function()
	{
		$('#form-container').css('display', 'flex');
	});

	$('#form-container').on('click', function(event)
	{
		if(event.target == this){
			$('#form-container').css('display', 'none');
		}
	});

	$('#recall-form').on('submit', function() /*отправка формы*/
	{ 
		let data = {
			'name' : $(this).find('#name').val()
		};
		$.post('api.php', data, function(response)
		{
			if (response.result == 1)
			{
				$('#recall-form input[type = "text"]').val('');/*очистка полей ввода*/
				$('#form-container').css('display', 'none');/*скрытие формы*/
			}
		});
		return false; /*для того, чтобы страница не перезагружалась*/
	});


	$('.more').on('click', function()
	{
		$('#more-container').css('display', 'flex');
	});
	$('#more-container').on('click', function(event)
	{
		if(event.target == this){
			$('#more-container').css('display', 'none');
		}
	});


});