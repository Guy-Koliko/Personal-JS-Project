function easyHttp() {
    //get the httprequest
    this.http = new XMLHttpRequest();
}

easyHttp.prototype.get = function (url, callBack) {
    this.http.open('GET', url, true)

    //load the 
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callBack(null, self.http.responseText)
        } else {
            console.log('Error ' + self.http.status);
        }
    }
    //sending the http request
    this.http.send();
}

//MAKE AN HTTP POST

easyHttp.prototype.post = function (url, data, callBack) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function () {
        callBack(null, self.http.responseText)
    }
    this.http.send(JSON.stringify(data));
}

//MAKE A PUT

easyHttp.prototype.put = function (url, data, callBack) {
    this.http.open('PUT', url, true);

    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this;

    this.http.onload = function () {
        callBack(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data))
}

//MAKE DELETE

easyHttp.prototype.delete = function (url, callBack) {
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callBack(null, 'POST Deleted');
        } else {
            callBack('Error ' + self.http.status)
        }
    }
    this.http.send()
}