let  itemBox = document.querySelectorAll('.item-box');
function addtocart() {
	if (this.innerHTML == "Купить") {
	let cart = JSON.parse(localStorage.getItem('cart'));
	if (!cart) cart = {};
	let parent = this.parentNode;
	let id = this.getAttribute('data-id');
	let img = parent.parentNode.querySelector('.col-lg-2').querySelector('.gimg').getAttribute('src');
	let name = parent.querySelector('.cata').innerHTML;
	let price = parent.querySelector('.price').getAttribute('data-price');
	cart[id] = [name, price, img];
	localStorage.setItem('cart', JSON.stringify(cart));
	this.innerHTML = "В Корзине";
	this.setAttribute("class", "btn btn-info");
    } else {
    this.innerHTML = "Купить";
	this.setAttribute("class", "btn btn-success");
	let cart = JSON.parse(localStorage.getItem('cart'));
	delete cart[this.getAttribute('data-id')];
	localStorage.setItem('cart', JSON.stringify(cart));
    }
}
for(var i = 0; i < itemBox.length; i++){
  console.log(i);
  itemBox[i].querySelector('.btn').addEventListener('click', addtocart);
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (!(cart[itemBox[i].querySelector('.btn').getAttribute('data-id')] == null)) {
  	itemBox[i].querySelector('.btn').innerHTML = "В Корзине";
	itemBox[i].querySelector('.btn').setAttribute("class", "btn btn-info");
  }
}

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
   'total': t,
   'days': days,
   'hours': hours,
   'minutes': minutes,
   'seconds': seconds
  };
}

function changetime() {
	let elem = document.getElementById("stock");
	let t = getTimeRemaining('2021-6-15');
	elem.innerHTML = "До конца акции: " + t.days + ":" + t.hours + ":" + t.minutes + ":" + t.seconds;
}

setInterval(changetime, 1000);