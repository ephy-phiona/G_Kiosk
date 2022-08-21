let fetch=require("node-fetch")

fetch('https://jsonplaceholder.typicode.com/todos',{

    method:'POST',
    headers:{
        "content-Type": "application/json"
        
    },
    // body:JSON.stringify({
    //     userId:5,
    //     title:"Hoppperlab",
    //     completed:true

    // }),

})
.then(function (response) {
return response.json();
})
.then(function (data) {
 let vegetables=data

vegetables.map(function(vegetables){
    let Apple = document.createElement('fruList');
    let Mangoes = document.createElement('fruList');
    let Melons = document.createElement('fruList')

    Apple.innerHTML = `${vegetables.Apple}`;
    Mangoes.innerHTML = `${vegetables.Mangoes}`;
    Melons.innerHTML = `${vegetables.Melons}`;

        fruList.appendChild(Apple);
        fruList.appendChild(Mangoes);
        fruList.appendChild(Melons);
});

// console.log('success', data);
})

.catch(function (error){
console.log('error', error);
});
ul.appendChild(vegetables);
 