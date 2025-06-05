

let msg = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sit facilis dolorem, delectus porro molestias nemo dicta at, aliquam perspiciatis pariatur suscipit neque hic magnam deleniti minus ducimus temporibus ratione. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quis officia temporibus tenetur nostrum, ratione iste incidunt ab placeat quod inventore ullam veniam. Tempore, in harum. Deserunt, quas. Aut, reprehenderit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex recusandae amet totam. Quam sunt, eum nulla, doloremque aspernatur maiores labore sit doloribus pariatur sed eius provident dicta debitis. In, officiis."

let show = document.getElementById('show');

let text = msg;

function send(){
    showmsg(text)
}
function showmsg(text){
    
    console.log(`Total ${text.length}`)
    if(text.length > 50 ){
        show.innerHTML= `<p>${text.slice(0,50)}...<button onclick="more(text)" >Read More</button> </p>`
    }else{
        show.innerHTML = `<p>${text}</p>`
    }
}
function more(text){
    if (text.length > 300){
        show.innerHTML = `<p> ${text.slice(0,600)}...<button onclick="or(text)"> Read More </button></p>`
    }else{
        show.innerHTML = `<p> ${text} </p>`
    }
}
 function or(text){
    if(text.length > 300){
      show.innerHTML = `<p> ${text.slice(0,695)}<button onclick="ok(text)"> Show Less </button></p>`
    }
 }

 function ok(){
    if(text.length > 300){
        show.innerHTML = `<p> ${text.slice(0,300)}...<button onclick="less(text)"> Show Less </button></p>`
    }
 }

function less(){
    if(text.length > 50){
        show.innerHTML = `<p>${text.slice(0,50)}.....<button onclick = "more(text)">Read More</button></p>`
    }
}




