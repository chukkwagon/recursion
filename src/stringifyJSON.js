// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var t = typeof(obj);

  //Simple data types
  if (t != 'object' || obj === null ) {
  	if (t==='string') {
  		return '"'+obj+'"'
  	}
  	return String(obj);
  } else {
  	var n, v;
  	var json = [];
  	var arr = (obj && obj.constructor === Array);

  	for (n in obj) {
  		v = obj[n];
  		t = typeof(v);

  		if (t=='string') {
  			v = '"' + v + '"';
  		} else if (t=='object' && v !== null) {
  			v = stringifyJSON(v);
  			console.log(v);
  		}
  		json.push((arr ? "" : '"' + n + '":') + String(v));
  	}
  	return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
  }
};

stringifyJSON({"a":{"b":"c"}});