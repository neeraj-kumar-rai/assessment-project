var url = parent.document.URL;
var product_id = url.substring(url.indexOf('?')+1,url.length);
//console.log(product_id);
product_id = product_id.substring(product_id.indexOf('=')+1,product_id.length);
//console.log(product_id);

var flag = 0;

url = 'https://price-api.datayuge.com/api/v1/compare/detail?api_key=RZgjPCQKEbqyNFNcIZAjRaYZj8Lp23MpOxS&id='+product_id;
var xhr = new XMLHttpRequest();
xhr.open('GET',url);
xhr.onreadystatechange = function(){
  //console.log('infunction');
  if(this.status==200&&this.readyState==4){
    //console.log('inif');
    var res_data = JSON.parse(this.responseText);
  }
  //console.log(res_data);


  var carouselinner = document.getElementById('carouselinner');
  var carouselol = document.getElementById('carouselol');
  for(let i=0;i<res_data.data.product_images.length;i++){
    //console.log(res_data.data.product_images[i]);
    var carouselli = document.createElement('li');
    carouselli.setAttribute('data-target','#myCarousel');
    var string = i+"";
  //  //console.log(string);
    carouselli.setAttribute('data-slide-to',string);
    if(i==0){
      carouselli.setAttribute('class','active');
    }
    carouselol.appendChild(carouselli);
  }
//  //console.log(carouselol);

  for(let i=0;i<res_data.data.product_images.length;i++){
    var carouseldiv = document.createElement('div');
    if(i==0){
      carouseldiv.setAttribute('class','carousel-item active');
    }
    else{
      carouseldiv.setAttribute('class','carousel-item');
    }
    var carouselimage = document.createElement('img');
    carouselimage.setAttribute('class','d-block widthsame');
    carouselimage.setAttribute('src',res_data.data.product_images[i]);
    carouseldiv.appendChild(carouselimage);
    carouselinner.appendChild(carouseldiv);
  }
//  //console.log(carouselinner);




  var title = document.getElementById('product_title');
  var title2 = document.getElementById('product_title2');
  var pagetitle = document.getElementById('pagetitle');
  var name = document.createTextNode(res_data.data.product_model);
  var name2 = document.createTextNode(res_data.data.product_model);
  title.appendChild(name);
  title2.appendChild(name2);
  pagetitle.innerHTML = res_data.data.product_model+"-Product Details";

  if(res_data.data.product_category=="mobile"){
    url2 = 'https://price-api.datayuge.com/api/v1/compare/specs?api_key=RZgjPCQKEbqyNFNcIZAjRaYZj8Lp23MpOxS&id='+product_id;
    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET',url2);
    xhr2.onreadystatechange = function(){
      if(this.status=200&&this.readyState==4){
        var res_data2 = JSON.parse(this.responseText);
      }
      //console.log(res_data2);

      var subspecsdiv = document.getElementById('subspecs');



      var batterydiv = document.createElement('div');
      let batteryul = document.createElement('ul');
      let batteryhead = document.createElement('h3');
      batteryhead.innerHTML = "BATTERY";
      batteryhead.setAttribute('class','card-header');
      for(let i=0;i<res_data2.data.sub_specs.Battery.length;i++){
        let batteryli = document.createElement('li');
        batteryli.innerHTML = "<b>"+res_data2.data.sub_specs.Battery[i].spec_key+"</b>"+" : "+res_data2.data.sub_specs.Battery[i].spec_value;
        batteryul.appendChild(batteryli);
      }
      batterydiv.appendChild(batteryhead);
      batterydiv.appendChild(batteryul);
      batterydiv.setAttribute('class','card');
      subspecsdiv.appendChild(batterydiv);


      var cameradiv = document.createElement('div');
      let cameraul = document.createElement('ul');
      let camerahead = document.createElement('h3');
      camerahead.innerHTML = "CAMERA";
      camerahead.setAttribute('class','card-header');
      for(let i=0;i<res_data2.data.sub_specs.Camera.length;i++){
        let camerali = document.createElement('li');
        camerali.innerHTML = "<b>"+res_data2.data.sub_specs.Camera[i].spec_key+"</b>"+" : "+res_data2.data.sub_specs.Camera[i].spec_value;
        cameraul.appendChild(camerali);
      }
      cameradiv.appendChild(camerahead);
      cameradiv.appendChild(cameraul);
      cameradiv.setAttribute('class','card');
      subspecsdiv.appendChild(cameradiv);


      var connectivitydiv = document.createElement('div');
      let connectivityul = document.createElement('ul');
      let connectivityhead = document.createElement('h3');
      connectivityhead.innerHTML = "CONNECTIVITY";
      connectivityhead.setAttribute('class','card-header');
      for(let i=0;i<res_data2.data.sub_specs.Connectivity.length;i++){
        let connectivityli = document.createElement('li');
        connectivityli.innerHTML = "<b>"+res_data2.data.sub_specs.Connectivity[i].spec_key+"</b>"+" : "+res_data2.data.sub_specs.Connectivity[i].spec_value;
        connectivityul.appendChild(connectivityli);
      }
      connectivitydiv.appendChild(connectivityhead);
      connectivitydiv.appendChild(connectivityul);
      connectivitydiv.setAttribute('class','card');
      subspecsdiv.appendChild(connectivitydiv);


      var displaydiv = document.createElement('div');
      let displayul = document.createElement('ul');
      let displayhead = document.createElement('h3');
      displayhead.innerHTML = "DISPLAY";
      displayhead.setAttribute('class','card-header');
      for(let i=0;i<res_data2.data.sub_specs.Display.length;i++){
        let displayli = document.createElement('li');
        displayli.innerHTML = "<b>"+res_data2.data.sub_specs.Display[i].spec_key+"</b>"+" : "+res_data2.data.sub_specs.Display[i].spec_value;
        displayul.appendChild(displayli);
      }
      displaydiv.appendChild(displayhead);
      displaydiv.appendChild(displayul);
      displaydiv.setAttribute('class','card');
      subspecsdiv.appendChild(displaydiv);


      var generaldiv = document.createElement('div');
      let generalul = document.createElement('ul');
      let generalhead = document.createElement('h3');
      generalhead.innerHTML = "GENERAL";
      generalhead.setAttribute('class','card-header');
      for(let i=0;i<res_data2.data.sub_specs.General.length;i++){
        let generalli = document.createElement('li');
        generalli.innerHTML = "<b>"+res_data2.data.sub_specs.General[i].spec_key+"</b>"+" : "+res_data2.data.sub_specs.General[i].spec_value;
        generalul.appendChild(generalli);
      }
      generaldiv.appendChild(generalhead);
      generaldiv.appendChild(generalul);
      generaldiv.setAttribute('class','card');
      subspecsdiv.appendChild(generaldiv);


      var processordiv = document.createElement('div');
      let processorul = document.createElement('ul');
      let processorhead = document.createElement('h3');
      processorhead.innerHTML = "PROCESSOR";
      processorhead.setAttribute('class','card-header');
      for(let i=0;i<res_data2.data.sub_specs.Processor.length;i++){
        let processorli = document.createElement('li');
        processorli.innerHTML = "<b>"+res_data2.data.sub_specs.Processor[i].spec_key+"</b>"+" : "+res_data2.data.sub_specs.Processor[i].spec_value;
        processorul.appendChild(processorli);
      }
      processordiv.appendChild(processorhead);
      processordiv.appendChild(processorul);
      processordiv.setAttribute('class','card');
      subspecsdiv.appendChild(processordiv);


      var sensorsdiv = document.createElement('div');
      let sensorsul = document.createElement('ul');
      let sensorshead = document.createElement('h3');
      sensorshead.innerHTML = "SENSORS";
      sensorshead.setAttribute('class','card-header');
      for(let i=0;i<res_data2.data.sub_specs.Sensors.length;i++){
        let sensorsli = document.createElement('li');
        sensorsli.innerHTML = "<b>"+res_data2.data.sub_specs.Sensors[i].spec_key+"</b>"+" : "+res_data2.data.sub_specs.Sensors[i].spec_value;
        sensorsul.appendChild(sensorsli);
      }
      sensorsdiv.appendChild(sensorshead);
      sensorsdiv.appendChild(sensorsul);
      sensorsdiv.setAttribute('class','card');
      subspecsdiv.appendChild(sensorsdiv);


      var softwarediv = document.createElement('div');
      let softwareul = document.createElement('ul');
      let softwarehead = document.createElement('h3');
      softwarehead.innerHTML = "SOFTWARE";
      softwarehead.setAttribute('class','card-header');
      for(let i=0;i<res_data2.data.sub_specs.Software.length;i++){
        let softwareli = document.createElement('li');
        softwareli.innerHTML = "<b>"+res_data2.data.sub_specs.Software[i].spec_key+"</b>"+" : "+res_data2.data.sub_specs.Software[i].spec_value;
        softwareul.appendChild(softwareli);
      }
      softwarediv.appendChild(softwarehead);
      softwarediv.appendChild(softwareul);
      softwarediv.setAttribute('class','card');
      subspecsdiv.appendChild(softwarediv);


      var sounddiv = document.createElement('div');
      let soundul = document.createElement('ul');
      let soundhead = document.createElement('h3');
      soundhead.innerHTML = "SOUND";
      soundhead.setAttribute('class','card-header');
      for(let i=0;i<res_data2.data.sub_specs.Sound.length;i++){
        let soundli = document.createElement('li');
        soundli.innerHTML = "<b>"+res_data2.data.sub_specs.Sound[i].spec_key+"</b>"+" : "+res_data2.data.sub_specs.Sound[i].spec_value;
        soundul.appendChild(soundli);
      }
      sounddiv.appendChild(soundhead);
      sounddiv.appendChild(soundul);
      sounddiv.setAttribute('class','card');
      subspecsdiv.appendChild(sounddiv);


      // var storagediv = document.createElement('div');
      // let storageul = document.createElement('ul');
      // let storagehead = document.createElement('h3');
      // storagehead.innerHTML = "STORAGE";
      // storagehead.setAttribute('class','card-header');
      // for(let i=0;i<res_data2.data.sub_specs.Storage.length;i++){
      //   let storageli = document.createElement('li');
      //   storageli.innerHTML = "<b>"+res_data2.data.sub_specs.Storage[i].spec_key+"</b>"+" : "+res_data2.data.sub_specs.Storage[i].spec_value;
      //   storageul.appendChild(storageli);
      // }
      // storagediv.appendChild(storagehead);
      // storagediv.appendChild(storageul);
      // storagediv.setAttribute('class','card');
      // subspecsdiv.appendChild(storagediv);

  }
  xhr2.send();
}
}
xhr.send();
//<-------------------------------->


//<-------------------------------->
url1 = 'https://price-api.datayuge.com/api/v1/compare/specs?api_key=RZgjPCQKEbqyNFNcIZAjRaYZj8Lp23MpOxS&id='+product_id;
var xhr1 = new XMLHttpRequest();
xhr1.open('GET',url1);
xhr1.onreadystatechange = function(){
  if(this.status=200&&this.readyState==4){
    var res_data1 = JSON.parse(this.responseText);
  }
//  //console.log(res_data1);
  var mainspecslist = document.getElementById('mainspecslist');
  for(let i=0;i<res_data1.data.main_specs.length;i++){
    let li = document.createElement('li');
    let text = document.createTextNode(res_data1.data.main_specs[i]);
    //console.log(text);
    li.appendChild(text);
    mainspecslist.appendChild(li);
  }
}
xhr1.send();

//<------------------------------------------->
url3 = 'https://price-api.datayuge.com/api/v1/compare/detail?api_key=RZgjPCQKEbqyNFNcIZAjRaYZj8Lp23MpOxS&id='+product_id;
var xhr3 = new XMLHttpRequest();
xhr3.open('GET',url3);
xhr3.onreadystatechange = function(){
  if(this.status==200&&this.readyState==4){
    var res_data3 = JSON.parse(this.responseText);
  }
  //console.log(res_data3);
  //console.log(res_data3.data.stores);

  var stores = document.getElementById('stores');

  var minpricestoreurl = 'a';
  var minprice = Number.MAX_VALUE;

  var storeprice0 = res_data3.data.stores[0].amazon.product_price;
  if(storeprice0!=undefined){
    let storediv0 = document.createElement('div');
    let storelink0 = document.createElement('a');
    storelink0.innerHTML = "<h3><a class='blanklinks' href='"+res_data3.data.stores[0].amazon.product_store_url+"'>"+res_data3.data.stores[0].amazon.product_store+"</a></h3>";
    let storelogo0 = document.createElement('img');
    storelogo0.setAttribute('height','30px');
    storelogo0.setAttribute('width','90px');
    storelogo0.setAttribute('src',res_data3.data.stores[0].amazon.product_store_logo);
    let storep = document.createElement('p');
    storep.innerHTML = "<b>Price : </b>"+res_data3.data.stores[0].amazon.product_price+"<br><b>Delivery Time : </b>"+res_data3.data.stores[0].amazon.product_delivery+"<br><b>Return Period : </b>"+res_data3.data.stores[0].amazon.return_time;

    storediv0.appendChild(storelink0);
    storediv0.appendChild(storelogo0);
    storediv0.appendChild(storep);
    storediv0.setAttribute('class','storecard');
    stores.appendChild(storediv0);
  }

  var storeprice1 = res_data3.data.stores[1].flipkart.product_price;
  if(storeprice1!=undefined){
    let storediv1 = document.createElement('div');
    let storelink1 = document.createElement('a');
    storelink1.innerHTML = "<h3><a  class='blanklinks' href='"+res_data3.data.stores[1].flipkart.product_store_url+"'>"+res_data3.data.stores[1].flipkart.product_store+"</a></h3>";
    let storelogo1 = document.createElement('img');
    storelogo1.setAttribute('height','30px');
    storelogo1.setAttribute('width','90px');
    storelogo1.setAttribute('src',res_data3.data.stores[1].flipkart.product_store_logo);
    let storep = document.createElement('p');
    storep.innerHTML = "<b>Price : </b>"+res_data3.data.stores[1].flipkart.product_price+"<br><b>Delivery Time : </b>"+res_data3.data.stores[1].flipkart.product_delivery+"<br><b>Return Period : </b>"+res_data3.data.stores[1].flipkart.return_time;

    storediv1.appendChild(storelink1);
    storediv1.appendChild(storelogo1);
    storediv1.appendChild(storep);
    storediv1.setAttribute('class','storecard');
    stores.appendChild(storediv1);
  }

  var storeprice2 = res_data3.data.stores[2].snapdeal.product_price;
  if(storeprice2!=undefined){
    let storediv2 = document.createElement('div');
    let storelink2 = document.createElement('a');
    storelink2.innerHTML = "<h3><a  class='blanklinks' href='"+res_data3.data.stores[2].snapdeal.product_store_url+"'>"+res_data3.data.stores[2].snapdeal.product_store+"</a></h3>";
    let storelogo2 = document.createElement('img');
    storelogo2.setAttribute('height','30px');
    storelogo2.setAttribute('width','90px');
    storelogo2.setAttribute('src',res_data3.data.stores[2].snapdeal.product_store_logo);
    let storep = document.createElement('p');
    storep.innerHTML = "<b>Price : </b>"+res_data3.data.stores[2].snapdeal.product_price+"<br><b>Delivery Time : </b>"+res_data3.data.stores[2].snapdeal.product_delivery+"<br><b>Return Period : </b>"+res_data3.data.stores[2].snapdeal.return_time;

    storediv2.appendChild(storelink2);
    storediv2.appendChild(storelogo2);
    storediv2.appendChild(storep);
    storediv2.setAttribute('class','storecard');
    stores.appendChild(storediv2);
  }

  var storeprice3 = res_data3.data.stores[3].ebay.product_price;
  if(storeprice3!=undefined){
    let storediv3 = document.createElement('div');
    let storelink3 = document.createElement('a');
    storelink3.innerHTML = "<h3><a  class='blanklinks' href='"+res_data3.data.stores[3].ebay.product_store_url+"'>"+res_data3.data.stores[3].ebay.product_store+"</a></h3>";
    let storelogo3 = document.createElement('img');
    storelogo3.setAttribute('height','30px');
    storelogo3.setAttribute('width','90px');
    storelogo3.setAttribute('src',res_data3.data.stores[3].ebay.product_store_logo);
    let storep = document.createElement('p');
    storep.innerHTML = "<b>Price : </b>"+res_data3.data.stores[3].ebay.product_price+"<br><b>Delivery Time : </b>"+res_data3.data.stores[3].ebay.product_delivery+"<br><b>Return Period : </b>"+res_data3.data.stores[3].ebay.return_time;

    storediv3.appendChild(storelink3);
    storediv3.appendChild(storelogo3);
    storediv3.appendChild(storep);
    storediv3.setAttribute('class','storecard');
    stores.appendChild(storediv3);
  }

  var storeprice13 = res_data3.data.stores[13].paytmmall.product_price;
  if(storeprice13!=undefined){
    let storediv13 = document.createElement('div');
    let storelink13 = document.createElement('a');
    storelink13.innerHTML = "<h3><a  class='blanklinks' href='"+res_data3.data.stores[13].paytmmall.product_store_url+"'>"+res_data3.data.stores[13].paytmmall.product_store+"</a></h3>";
    let storelogo13 = document.createElement('img');
    storelogo13.setAttribute('height','30px');
    storelogo13.setAttribute('width','90px');
    storelogo13.setAttribute('src',res_data3.data.stores[13].paytmmall.product_store_logo);
    let storep = document.createElement('p');
    storep.innerHTML = "<b>Price : </b>"+res_data3.data.stores[13].paytmmall.product_price+"<br><b>Delivery Time : </b>"+res_data3.data.stores[13].paytmmall.product_delivery+"<br><b>Return Period : </b>"+res_data3.data.stores[13].paytmmall.return_time;

    storediv13.appendChild(storelink13);
    storediv13.appendChild(storelogo13);
    storediv13.appendChild(storep);
    storediv13.setAttribute('class','storecard');
    stores.appendChild(storediv13);
  }

  var storeprice15 = res_data3.data.stores[15].mi.product_price;
  if(storeprice15!=undefined){
    let storediv15 = document.createElement('div');
    let storelink15 = document.createElement('a');
    storelink15.innerHTML = "<h3><a  class='blanklinks' href='"+res_data3.data.stores[15].mi.product_store_url+"'>"+res_data3.data.stores[15].mi.product_store+"</a></h3>";
    let storelogo15 = document.createElement('img');
    storelogo15.setAttribute('height','30px');
    storelogo15.setAttribute('width','90px');
    storelogo15.setAttribute('src',res_data3.data.stores[15].mi.product_store_logo);
    let storep = document.createElement('p');
    storep.innerHTML = "<b>Price : </b>"+res_data3.data.stores[15].mi.product_price+"<br><b>Delivery Time : </b>"+res_data3.data.stores[15].mi.product_delivery+"<br><b>Return Period : </b>"+res_data3.data.stores[15].mi.return_time;

    storediv15.appendChild(storelink15);
    storediv15.appendChild(storelogo15);
    storediv15.appendChild(storep);
    storediv15.setAttribute('class','storecard');
    stores.appendChild(storediv15);


    console.log(minpricestoreurl);


  }
















}
xhr3.send();
