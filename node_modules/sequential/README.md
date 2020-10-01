sequential
==========

doing stuff in time. time and space. 

i guess space is optional, actually. but the time bit is important.

## so anyway

Let's assume you have a series of commands you want to execute `sequential`ly. This could look like:

- One handler function which is called repetitively while it still has data left to execute on its stack
- chained `then` commands which are executed after the stack has completed
- A series of callbacks (@todo)

This library lets you create a new function from this, which you can then execute when you are ready. 

The API is pretty simple. 

```javascript
var boundConsole = console.log.bind(console);
var sequential = require('sequential');

// the signature is handlerFunc, array of args, time between steps
var mySequence = sequential(boundConsole, [1,2,3,4], 100);

// all these functions are called synchronously
mySequence.then(boundConsole,'almost there');
// can chain thens too
mySequence.then(boundConsole,'almost, almost').then(boundConsole,'and we are done');

// run this sequence
mySequence();

```

This produces the following output:

```

1
2
3
4
almost there
almost, almost
and we are done

```


As this is /!\ totally alpha /!\ expect this to change, but you get the idea.

## todo

- error handling (probably turn the sequence into an event emitter and bind to `.on('error', ...)` before executing it )
- pause, restart, cancel (again, maybe as an EE)
- pass array of callbacks which are called sequentially
- tests once a solid API emerges from the original idea
- don't let the function be called again (will currently reexecute the chained functions);

## example

```javascript
var sequential = require('sequential');

var failKnight = "Plenty of practice!' he went on repeating, all the time that Alice was getting him on his feet again. 'Plenty of practice!'.\n'It's too ridiculous!' cried Alice, losing all her patience this time. 'You ought to have a wooden horse on wheels, that you ought!'\n\n";

function printLetter(letter){
	process.stdout.write(letter);
}

var letters = failKnight.split('');

// bash them out to console as quick as possible
letters.forEach(printLetter);

// sequential
var sequence = sequential(printLetter, letters, 12);
sequence.then(console.log.bind(console), 'done');
sequence();

```


# changelog

## 0.0.4

- Remove JSON.stringify / JSON.parse dance (not needed)

## licence

The MIT License (MIT)

Copyright (c) 2013 Dan Peddle

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

