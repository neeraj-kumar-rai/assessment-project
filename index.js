var input = document.getElementById('inputText');
var btn = document.getElementById('searchButton');
var textArea = document.getElementById('output');
btn.addEventListener('click',findProduct);
function findProduct(){
var url="https://price-api.datayuge.com/api/v1/compare/search?api_key=RZgjPCQKEbqyNFNcIZAjRaYZj8Lp23MpOxS&product="+input.value+"&page=1";
var xhr = new XMLHttpRequest();
xhr.open('GET',url);
xhr.onreadystatechange = function(){
  //console.log('infunction');
  if(this.status==200&&this.readyState==4){
    //console.log('inif')
    var res_data = JSON.parse(this.responseText);
  }
  //console.log(res_data);
  document.getElementById('list').innerHTML = '';
  for(let i=0;i<10;i++){
    var mainlist = document.getElementById('list');
    var div1 = document.createElement('div');
    div1.setAttribute('class','box');
    var divleft = document.createElement('div');
    var divright = document.createElement('div');
    divright.innerHTML = "<b>"+res_data.data[i].product_title+"</b>"+"<br><br>"+"<b>Lowest Price :</b>"+res_data.data[i].product_lowest_price+"<br><br>";
    var imgtag = document.createElement('img');
    imgtag.setAttribute('src',res_data.data[i].product_image);
    // imgtag.setAttribute('height','80px');
    imgtag.setAttribute('class','imageicons');
    divleft.appendChild(imgtag);
    divleft.setAttribute('class','leftdiv');
    divright.setAttribute('class','rightdiv');
    div1.appendChild(divleft);
    div1.appendChild(divright);
    var li = document.createElement('li');
    li.appendChild(div1);

    var link = document.createElement('a');
    link.setAttribute('href','details.html?prodId='+res_data.data[i].product_id);
    link.appendChild(li);

    var hr = document.createElement('hr');
    link.appendChild(hr);

    //var title = document.createTextNode("<b>"+res_data.data[i].product_title+"</b>"+"<br>");
    //var lowest_price = document.createTextNode(res_data.data[i].product_lowest_price+"<br><br>");
    //div1.append(title);
    //div1.append(lowest_price);
    mainlist.appendChild(link);
  }
}
xhr.send();
}
