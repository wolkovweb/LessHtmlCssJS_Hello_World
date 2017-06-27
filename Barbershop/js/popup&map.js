
<!-- Для попапа откр/закр -->
	var link = document.querySelector(".login");
	var popup = document.querySelector(".modal_content");
	var close = popup.querySelector(".modal_content-close");
	var overLay = document.querySelector(".modal_overlay");
	
	var form = popup.querySelector("form");
	var login = popup.querySelector("[name=login]");
	var passw = popup.querySelector("[name=pass]");
	
	var storage = localStorage.getItem("login");
	
	<!-- Для карты откр/закр -->
	var howUsFind = document.querySelector(".footer_contacts a");
	var mContMap = document.querySelector(".modal_content-map");
	var mClose = mContMap.querySelector(".modal_content-close");
	<!------------------------->
	
	link.addEventListener("click", function(event){
		event.preventDefault();
		console.log("Клик по ссылке вход");
		popup.classList.add("modal_content-show");
		overLay.classList.add("modal_overlay-show");
		
		if (storage) {
			login.value = storage;
			passw.focus();
		} else {
				login.focus();
			}
	});
	
	form.addEventListener("submit", function(event){
		if (!login.value || !passw.value){
			event.preventDefault();
			console.log("Нужно ввести логи и пароль");
			popup.classList.add("modal_error");
		} else {
				localStorage.setItem("login", login.value);
				console.log(login.value);
			}
	});
	
	
	close.addEventListener("click", function(event){
		event.preventDefault();
		console.log("Закрвть");
		popup.classList.remove("modal_content-show");
		popup.classList.remove("modal_error");
		overLay.classList.remove("modal_overlay-show");
	});
	
	window.addEventListener("keydown", function(event){
		if (event.keyCode === 27) {
			if(popup.classList.contains("modal_content-show")) {
				popup.classList.remove("modal_content-show");
				popup.classList.remove("modal_error");
				overLay.classList.remove("modal_overlay-show");
			};
		};
	});
	
	<!-- карта -->
	
	howUsFind.addEventListener("click", function(event){
		event.preventDefault();
		console.log("Карта");
		mContMap.classList.add("modal_content-map-show");
		overLay.classList.add("modal_overlay-show");
	})
	
	mClose.addEventListener("click", function(event){
		event.preventDefault();
		console.log("Закрвть");
		mContMap.classList.remove("modal_content-map-show");
		overLay.classList.remove("modal_overlay-show");
	})
	
	window.addEventListener("keydown", function(event){
		if (event.keyCode === 27) {
			if(mContMap.classList.contains("modal_content-map-show")) {
				mContMap.classList.remove("modal_content-map-show");
				overLay.classList.remove("modal_overlay-show");
			};
		};
	});
