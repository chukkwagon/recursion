// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var results = [];
	var pageElems = document.getElementsByTagName("*");
	var length = pageElems.length;

  for (var i = 0; i < length; i++) {
  	classlist = pageElems[i].classList;
  	length1 = classlist.length;
  	for (var j = 0; j < length1; j++) {
  		console.log("searching the classList")
  		checkedClass = classlist[j];
  		if (checkedClass == className) {
  			results[results.length] = pageElems[i];
  			console.log("You added something to results!")
  		}
  	}
  }
  console.log(results);
 	return results;
}
