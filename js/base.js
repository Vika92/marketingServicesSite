(function () {
//function for controlling menu rendering
//	window.addEventListener('resize',function(){
		//var wid=document.documentElement.clientWidth;
		//var menu=document.querySelectorAll('.main-menu')[0];
		//if (wid>640){
		//	menu.style.display ='block';
		//}
		//	else menu.style.display="none";
		//});
////event handlers for controlling some blocks to be showed or hidden
//	var logoMenuForMobile=document.querySelector(".fa-bars");
//	logoMenuForMobile.addEventListener('click',function(){
//		var mainMenu = document.querySelector(".main-menu");
//		return toggleElements(mainMenu);
//	});

//function for controlling blocks rendering
	function toggleElements(elem){
		if (elem.style.display=="none"){
			elem.style.display="block";
		}
		else elem.style.display="none";
	}

//dropdown list on for screen with width more than 640px
var menu = document.querySelectorAll(".menu-for-mobile")[0];
menu.addEventListener('click',function(event){
  if (event.target.tagName === 'I'){
	  var list = document.querySelectorAll(".main-menu")[0];
	  return toggleElements(list);
  }

});		
//event handlers for cutting text content when the space of parent element is less than content length
//	window.addEventListener('load',function () {
//		wrapText('service-text');
//		wrapText('our-approach-item-text');
//	});
//	window.addEventListener('resize',function(){
//		wrapText('service-text');
//		wrapText('our-approach-item-text');
//	});
//function for cutting text when the space of parent element is less than content length
//	function wrapText(selector){
//		var elem=document.getElementsByClassName(selector);
//		for (i=0; i<elem.length; i++) {
//			if (elem[i].scrollHeight>elem[i].clientHeight){
//				lengthToDisplay=(elem[i].innerText.length/elem[i].scrollHeight)*elem[i].clientHeight;
//				var stringToDisplay=elem[i].innerText.substr(0,lengthToDisplay-3)+"...";
//				elem[i].innerText=stringToDisplay;
//			}
//		}};
})();

