window.addEventListener('DOMContentLoaded', ()=>{

	//по клику меню должны меняться картинка, текст и подсветка пункта меню
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll(.tabcontent),
		tabsParent = document.querySelector('.tabheader__items');

		//скроем все табы, чтобы было проще работать
		function hideTabsContent (){
			tabsContent.forEach(item => {
				item.style.display = 'none';
			});

			tabs.forEach(item => {
				item.classList.remove('tabheader__item_active');
			});
		}
		
		function showTabContent (i = 0) {
			tabsContent[i].style.display = 'block';
			tabs[i].classList.add('tabheader__item_active');
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

});