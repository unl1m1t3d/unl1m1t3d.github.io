/**
* Функция, создающая progress bar.
*
* @param {Object} options - массив свойств, на основе которых будет генерироваться объект Progress
* @param {Object} options[elem] - корневой элемент, внутри которого должен быть уже расположен сверстанный progress bar.
*/

function Progress(options) {

	var elem = options.elem;
  
	/**
	* Переключает состояние элемента (в данном случае переключает в анимированное состояние или снимает его).
	*
	* @param {String} mode - Название состояния, которое требуется переключить.
	* @param {String} flag - Если flag равен yes, то состояние, указанное в параметре mode, нужно включить, иначе отключить.
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
	 * Эта функция принимает на вход значение val и, если оно числовое,
	 * устанавливает значение js progress bar'a, равное val.
	 *
	 * @param {Number} val - Значение progress bar'a, на которое надо сместить dashoffset.
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
	* Скрываем элемент
	*/
	
	function hide()
	{
		var circle = document.getElementById('progress-bar-container');
		circle.style.visibility = "hidden";
	}
	/**
	* Показываем элемент
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
