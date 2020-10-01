var sequential = require('../');

var failKnight = "Plenty of practice!' he went on repeating, all the time that Alice was getting him on his feet again. 'Plenty of practice!'.\n'It's too ridiculous!' cried Alice, losing all her patience this time. 'You ought to have a wooden horse on wheels, that you ought!'\n\n";

function printLetter(letter){
	process.stdout.write(letter);

}

var letters = failKnight.split('');


// sequential
var sequence = sequential(printLetter, letters, 12);

sequence();


