window.addEventListener('DOMContentLoaded', ()=>{

//Tabs

	//по клику меню должны меняться картинка, текст и подсветка пункта меню
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

		//скроем все табы, чтобы было проще работать
		function hideTabsContent (){
			tabsContent.forEach(item => {
				item.classList.add('hide');
				item.classList.remove('show', 'fade');
			});

			tabs.forEach(item => {
				item.classList.remove('tabheader__item_active');
			});
			console.log('hide');
		}
		
		function showTabContent (i = 0) {
			tabsContent[i].classList.add('show', 'fade');
			tabsContent[i].classList.remove('hide');
			tabs[i].classList.add('tabheader__item_active');
			console.log('show');

		}

		hideTabsContent();
		showTabContent();
		//мы написали функцию, что скрывает все табы и затем добавили функцию, что показывает конкретный таб
		//по умолчанию должен показываться первый таб


		tabsParent.addEventListener('click', (event) => {
			//если придется много раз использовать event.target
			// то можно поместить ее в константу 
			const target = event.target;

			if(target && target.classList.contains('tabheader__item')){
				tabs.forEach((item,i) =>{
					//forEach - 1аргумент это элемент, 2й - это порядковый номер
					if(target == item){
						hideTabsContent();
						showTabContent(i);
					}					
				});
			};
		});

//Timer

	const deadLine = '2022-09-15';
	setClock('.timer', deadLine);

	//функция, что будет определять разницу между дедлайном и нашем теккущам временем
	function getTimeRemaining(endTime){
		const t = Date.parse(endTime) - Date.parse(new Date()),  //тут оно покажет в милисекундах
			days = Math.floor(t / (1000*60*60*24)),
			hours = Math.floor((t/(1000*60*60))%24),
			minutes = Math.floor((t/(1000*60))%60),
			seconds= Math.floor((t/1000)%60);
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
	//доп функция для нуля впереди
	function getZero(num){
		if(num>=0 && num<10){
			return `0${num}`;
		} else{
			return num;
		}
	}	
	function setClock(selector, endtime){
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);
			updateClock();
	//теперь прям тут пишем автообновление
	function updateClock(){
		const t = getTimeRemaining(endtime);
		days.innerHTML = getZero(t.days);
		hours.innerHTML = getZero(t.hours);
		minutes.innerHTML = getZero(t.minutes);
		seconds.innerHTML = getZero(t.seconds);

		if(t.total <= 0){
			clearInterval(timeInterval);
		}
	}
	}
	

//modal
	const btns = document.querySelectorAll('.modal');
	btns.forEach(item=>{
		item.addEventListener('click', ()=>{
			console.log('modal');

		})
	});
});