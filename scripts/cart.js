function updatecart() {
	let cart = JSON.parse(localStorage.getItem('cart'));
	let table = "";
	let sum = 0;
	if (Object.keys(cart).length) {
		table = '<table class="table" style="vertical-align: middle;"><tr><th>Игра</th><th></th><th>Цена</th></tr>';
		for(let items in cart){
			table += '<tr>';
			/*for(let i = 0; i < cart[items].length; i++){
				table += "<td>" + cart[items][i] + "</td>";
			}*/
			table += '<td width="75px"><img width="75px" height="100px" src="'+ cart[items][2] + '"></td>';
			table += '<td style="vertical-align: middle; text-align: left;"><h1>' + cart[items][0] + "</h1></td>";
			table += '<td width="100px" style="vertical-align: middle; color:green;">' + cart[items][1] + "₴" + "</td>";
			table += '<td width="30px" style="vertical-align: middle;">' + '<i class="bi bi-archive" onclick="delitem(' + "'" + items + "'" + ')" style="color: red;" data-id="' + items +'"></i>' + "</td>";
			table += "</tr>";
			sum += parseInt(cart[items][1], 10);
		}
		table += "</table>";
		table += '<button class="btn btn-success" style="text-align: right;">Купить для себя</button>';
		table += '<button class="btn btn-success" style="margin-left:10px;">Купить в подарок</button>';
	} else  {
		table = '<p style="font-size:30px;">Корзина пуста</p>';
	}
	let elem = document.getElementById("cart_content");
	elem.innerHTML = table;
	elem = document.getElementById("sum");
	elem.innerHTML = "Итог:" + sum + "₴";
}
//document.body.addEventListener('click', updatecart);
updatecart();

function delitem(str) {
	let cart = JSON.parse(localStorage.getItem('cart'));
	delete cart[str];
	localStorage.setItem('cart', JSON.stringify(cart));
	updatecart();
}