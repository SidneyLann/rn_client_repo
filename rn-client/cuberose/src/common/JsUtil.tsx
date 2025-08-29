
const JsUtil = {}

const REQUEST_TYPE_WWW = 'application/x-www-form-urlencoded';
JsUtil.REQUEST_TYPE_WWW = REQUEST_TYPE_WWW;

const getUri = uri => {
	const websit = "http://sh1.koreacentral.cloudapp.azure.com:8443";
	//const websit = "http://127.0.0.1:8443";

	return websit + uri;
}
JsUtil.getUri = getUri;

const asyncHttpPost = (that, uri, param, succ, err, contentType = 'application/json') => {
    const headers = {};
    
    if (contentType !== 'multipart/form-data') {
        headers['Content-Type'] = contentType;
    }
    
    // Handle body conversion for different content types
    let body;
    if (contentType === 'application/x-www-form-urlencoded') {
        body = new URLSearchParams(param).toString();
    } else if (contentType === 'application/json') {
        body = JSON.stringify(param);
    } else {
        body = param; // For FormData or other types
    }

    uri = JsUtil.getUri(uri);

    fetch(uri, {
        method: 'POST',
        headers: headers,
        body: body
    })
    .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
            // Handle HTTP errors (4xx, 5xx)
            return response.text().then(text => {
                throw new Error(`HTTP ${response.status}: ${text}`);
            });
        }
        return response.json(); // Parse JSON body
    })
    .then(data => {
        succ(data); // Success callback with parsed data
    })
    .catch(error => {
        console.error('Request failed:', error);
        err(error); // Error callback
    });
};
JsUtil.asyncHttpPost = asyncHttpPost

const countSubstring = (str, substr, allowOverlapping = false) => {
  if (substr.length === 0) return 0; 

  let count = 0;
  let step = allowOverlapping ? 1 : substr.length;
  
  for (let pos = 0; pos <= str.length - substr.length; pos += step) {
    pos = str.indexOf(substr, pos);
	console.log('pos:',pos)
    if (pos === -1) break;
    count++;
  }
  
  return count;
}
JsUtil.countSubstring = countSubstring;

export default JsUtil
