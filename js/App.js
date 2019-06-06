var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '4048',
  'X-Auth-Token': 'a714dfd1d7aae7442bd57b62ecc18c3b'
};

fetch(baseUrl + '/board', { headers: myHeaders })
  .then(function(resp) {
    return resp.json();
  })
  .then(function(resp) {
    setupColumns(resp.columns);
  });

//TWORZENIE KOLUMN
function setupColumns(columns) {
	columns.forEach(function(column) {
		  var col = new Column(column.id, column.name);
		board.addColumn(col);
		setupCards(col, column.cards);
	});
  }
//TWORZENIE KARD
function setupCards(col, cards) {
	cards.forEach(function (card) {
    var cardObj = new Card(card.id, card.name);
  	col.addCard(cardObj);
	});
}

// OGÓLNA FUNKCJA
function generateTemplate(name, data, basicElement) {
  	var template = document.getElementById(name).innerHTML;
  	var element = document.createElement(basicElement || 'div');
  
  	Mustache.parse(template);
  	element.innerHTML = Mustache.render(template, data);
  
  	return element;
}