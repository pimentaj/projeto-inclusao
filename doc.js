(function () {


	var lista = [{
		"location": "Av. Brg. Faria Lima, 3989 - Itaim Bibi, São Paulo - SP, 04538-133",
		"name": "Hotel Blue Tree Towers",
		"description": "O hóspede com deficiência encontra boa infraestrutura de lazer e negócios. Há dois quartos adaptados."
	},
	{
			"location": "R. Araújo, 141 - República, São Paulo - SP, 01220-020",
			"name": "Comfort Hotel Downtown",
			"description": " Há rampas e elevadores, dois quartos adaptados. Opção econômica."
	}]
	console.log(lista)

	var name = lista[0]
	var list = "<div>" +
		"<ul>" +
			"<li>" + name.name + "</li>" +
			"<li>" + name.location + "</li>" +
			"<li>" + name.description + "</li>" +
		"</ul>" +
	"</div>"

	document.querySelector("#docs").innerHTML = list;

}());