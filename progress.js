function Progress(options) {

	var elem = options.elem;
  
	/**
		Эта функция устанавливает анимацию элемента или снимает ее.
		(по крайней мере, в текущей реализации так).
	*/
	
	function setMod(mode, flag) {
		if (mode=='animated' && flag == 'yes')
		{
			//if(this.state <= 0)
			var circle = document.getElementsByTagName('svg')[0];
			circle.classList.add('animated');
		}
		else if(mode == 'animated' && flag == '')
		{
			var circle = document.getElementsByTagName('svg')[0];
			circle.classList.remove('animated');
		}
	};

	/**
		Эта функция принимает на вход значение val и, если оно числовое,
		устанавливает значение js progress bar'a, равное val.
	*/
	function setValue(val)
	{
		if(!isNaN(val))
		{
			var circle = document.getElementsByClassName('js-progress-bar')[0];
	
			if (val < 0) 
				val = 0;
			else 
				if (val > 100) 
					val = 100;
			
			var r = circle.getAttribute('r');
			var c = Math.PI*(r*2);
			var pct = ((100-val)/100)*c;

			circle.style.strokeDashoffset = pct;
		}
	}
	
	/**
		Скрываем элемент
	*/
	
	function hide()
	{
		var circle = document.getElementById('progress-bar-container');
		circle.style.visibility = "hidden";
	}
	/**
		Показываем элемент
	*/
	function show()
	{
		var circle = document.getElementById('progress-bar-container');
		circle.style.visibility = "visible";
	}
  this.setMod = setMod;
  this.setValue = setValue;
  this.hide = hide;
  this.show = show;
}