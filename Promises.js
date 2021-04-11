/**
 *  Promises
 */


let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Run Before"), 1000)
});

promise.then (
    result =>{
        console.log(result)
        GetAfter()
    },error=>console.log(error)
)

function GetAfter() {
    console.log("Print After")
}


