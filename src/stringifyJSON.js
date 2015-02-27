var stringifyJSON = function(obj) {
  // your code goes here
  var t = typeof(obj)

  //Simple data types
  if (t != 'object' || obj === null ) {
  	if (t==='string') {
  		return '"'+obj+'"'
  	}
  	return String(obj)

  //Objects and arrays	
  } else {
  	var n, v
  	var arr = false
  	var json = []

  	if (obj.constructor === Array) {
  		arr = true;
  	}

  	for (n in obj) {
  		v = obj[n]
  		t = typeof(v)

  		if (v===undefined || t==='function') { 
  			return '{}';
  		}

  		if (t==='string') {
  			v = '"' + v + '"'
  		} else if (t==='object' && v!== null) {
  			v = stringifyJSON(v)
  		}
  		json.push((arr ? "" : '"' + n + '":') + String(v))
  	}
  	return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
  }
};

