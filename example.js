/**
 * Created by ChrisCheshire on 19/08/15.
 */

'use strict';

var nestob = require('./index');

//Create a new nestable object - instead of the standard js object ({})
var newNested = new nestob.Nestable();

//Set nested object properties without having to create the objects first!
newNested.setNested('biscuits.oblong.marmaduke', 'cheese');
newNested.setNested('orange.tartan.pipedream', { poppers: 'astray', numbers: [123,456,789]});

console.log(newNested, newNested.orange.tartan.pipedream);

//Get nested object properties without having to worry about whether the objects exist
//Pass in a default value to be returned if desired
console.log(newNested.getNested('generic.yoghurt.asguard', 'autodrome'), newNested.getNested('chips.along.the'));

//You can also use nestob to modify object not created using nestob
var normalObj = {};

nestob.setNested(normalObj, 'running.out.of', 'words');

console.log(normalObj);

console.log(nestob.getNested(normalObj, 'random.things', 'indigo'), nestob.getNested(normalObj, 'improbable.apricots'));