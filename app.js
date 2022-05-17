let text = [];

function welcome() {
	
	console.log("Hello user" + "\n\nEste programa servirá como auxiliar para traduzir o texto em código Morse...");

	return;
};

function bye() {
	
	console.log('\nbyebye');

	return;
};

function coletarTexto() {

	const leitor = require('readline').createInterface({
		input:process.stdin,
		outpur: process.stdout
	});

	console.log('\nAbrindo tradutor...');

	leitor.question("\nInsira o texto a ser traduzido:", function(resposta) {
		text = resposta.push;
		console.log(text + 'test')
		leitor.close();
	});
		
	console.log("\nFechando tradutor...");

	return;
};

function main() {

	welcome();
	//coletarTexto(rd);
	//traduzirTexto();
	bye();
	
return;
}

main();

process.exit();
