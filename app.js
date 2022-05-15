const rd = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

function welcome() {
	console.log("Hello user" + "\n\nEste programa servirá como auxiliar para traduzir o texto em código Morse");

	return
}

function bye() {
	console.log('byebye' + '\n\nEND\n');

	return
}

function main() {
	welcome();
	//coletarTexto();
	//traduzirTexto();
	bye();
	
	return

}

main();
