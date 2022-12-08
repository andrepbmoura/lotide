# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @andrepbmoura/lotide`

**Require it:**

`const _ = require('@andrepbmoura/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head` : function that returns the first element of an array.
* `tail` : function that returns the "tail" of an array.
* `middle` : function that returns the elements from the middle of an array (1 element if lengh of the array is odd, 2 elements if lengh of the array is even).
* `eqArrays` : function that compares if two arrays are identical.
* `flatten` : function that takes a nested array and returns a single line array with the same order as the original array.
* `countOnly` : function that takes a collection of elements and returns a specific subset of those elements.
* `letterPositions` : function that takes a string and returns all the indexes of the letter positions in that string.
* `findKeyByValue` : function that takes in a object and returns the key corresponding to the given value in the given object. 
* `eqObjects` : function that compares if two objects are identical.
* `findKey` : function that takes in an object and callback and returns the first key if the criteria of the callback is true.
* `countLetters` : function that takes an object and returns a count of each letter of that object. 
* `map` : functions that takes a callback to each element of an array and returns a new array based on the results.
* `takeUntil` : function that takes an array and a callback, and returns a slice of the array based on the criteria of the callback.
* `without` : function that takes an array and a second array and returns the items from the first array that are not in the second array.





