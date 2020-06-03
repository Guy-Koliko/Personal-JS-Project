//calling the easyhttp class

const http = new easyHttp;

// http.get('https://jsonplaceholder.typicode.com/posts', function (err, p) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(p);

//     }
// });

const data = {
    "title": "This is a new Test",
    "body": "We dont care what you want"
}

// //post request 
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(post);
//     }
// });

//put or update a record
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, respons) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(respons);
//     }
// });

//delete records

http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, de) {

    if (err) {
        console.log(err);
    } else {
        console.log(de);
    }
});