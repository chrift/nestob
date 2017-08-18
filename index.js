/**
 * Created by ChrisCheshire on 19/08/15.
 */

'use strict';


var e = {};

HELLO THIS IS TOTES GONNA BREAK HAHAHAHAHAHA

/**
 *
 * @param path A full stop-ped separated string OR array containing keys of the nested value you want to retrieve
 * @param defaultValue optional - A default value to return if the nested value doesn't exist
 * @returns {*}
 */
e.getNested = function (obj, path, defaultValue) {
	var args = typeof path === 'object' ? path : path.split('.'),
	    numArgs = args.length,
	    defaultValue = typeof defaultValue === 'undefined' ? false : defaultValue,
	    i;

	for (i = 0; i < numArgs; i++) {
		if (!obj || !obj.hasOwnProperty(args[i]))
			return defaultValue;

		obj = obj[args[i]];
	}

	return obj;
};

/**
 *
 * @param path A full stop-ped separated string OR array containing keys of the nested value you want to set
 * @param value The value to set
 * @returns {Object}
 */
e.setNested = function (obj, path, value) {
	var args = typeof path === 'object' ? path : path.split('.'),
	    numArgs = args.length,
	    value = typeof value === 'undefined' ? null : value,
	    i;

	for (i = 0; i < numArgs; i++) {
		if (!obj || !obj.hasOwnProperty(args[i]))
			obj[args[i]] = {};

		if (args[i + 1]) {
			obj = obj[args[i]];
		} else {
			obj[args[i]] = value;
		}
	}

	return obj;
};

function Nestable(){}

Nestable.prototype.getNested = function(pathString, defaultValue){
	return e.getNested(this, pathString, defaultValue);
};

Nestable.prototype.setNested = function(pathString, value){
	return e.setNested(this, pathString, value);
};

e.Nestable = Nestable;

module.exports = e;
