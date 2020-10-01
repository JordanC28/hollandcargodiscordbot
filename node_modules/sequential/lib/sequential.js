function runner(handler, handlerArgs, timer) {
	var argPointer = 0;
	var chainedFunctions = [];
	var executor = function executor() {
		if (argPointer !== handlerArgs.length) {
			setTimeout(function() {
				var callArgs = handlerArgs[argPointer];
				argPointer = argPointer + 1;
				handler.call(null, callArgs);
				executor();
			}, timer);
		} else {
			argPointer = 0;
			chainedFunctions.forEach(function(chained) {
				chained.fn.apply(null, chained.args);
			});
			chainedFunctions = [];
		}
	};
	var chain = {
		then: function(fn) {
			var rest = [].slice.call(arguments, 1);
			chainedFunctions.push({
				fn: fn,
				args: rest
			});
			return chain;
		}
	};
	var toRet = function() {
		executor();
		return chain;
	};
	toRet.then = chain.then;
	return toRet;
}
module.exports = runner;