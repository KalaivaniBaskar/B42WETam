//2.
// fn runs only when called --> response_check()
// better to call this from console
var request = new XMLHttpRequest();
var method = 'GET'
var api = "https://restcountries.com/v3.1/all"
request.open(method,api)
request.send()
function response_check(){
    var data = request.response // string
    console.log(typeof data)
    //console.log(data)
     var obj = JSON.parse(data) // object
     console.log(obj) 
     console.log(obj.length)
     // obj is an array, each index has objects

     //console.log("Antartica has no nativeName ", JSON.stringify(obj[53]));

     for(let i of obj){
        console.log(i["name"]["common"], "--", i["subregion"]);
     } 

    var idx = 0;
     for(let i of obj){ 

        if(i["name"]["nativeName"]){
           // var natkeys = Object.keys(i["name"]["nativeName"]) [0]
            var natkeys = Object.keys(i["name"]["nativeName"]) 
            //var natkeys = Object.keys(obj.name.nativeName) 
            console.log(idx,i.name.common,"----------", natkeys);
            console.log(i["name"]["common"], "--", i["subregion"], "-native-", i["name"]["nativeName"][natkeys[0]]["common"]);
            
        }
        else{
            console.log(idx,i.name.common,'data is not present'); 
            console.log(i["name"]["common"], "--", i["subregion"], "-native-", "NONE");
        }
        idx++

        //console.log(i["name"]["common"], "--", i["subregion"], "-native-", i["name"]["nativeName"][natkeys[0]]);
     }
}
console.log("Hi.. XHR function response_check()")
//response_check()

//request.readystate ?
// VM31:1 Uncaught SyntaxError: Unexpected end of JSON input
//     at JSON.parse (<anonymous>)
//     at response_check (xhr.js:10:19)
//     at xhr.js:14:1 
// - this ero happens when data is not fully loaded