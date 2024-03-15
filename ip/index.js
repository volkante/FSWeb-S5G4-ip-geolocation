//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
*/

/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
//adım 1-2
let myUrl = "https://apis.ergineer.com/ipgeoapi/78.177.167.136";
axios.get(myUrl).then((response) => {
  console.log(response);
});

//adım 3

function ipCardCreator(obj) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const flagImg = document.createElement("img");
  flagImg.setAttribute("src", obj.data.ülkebayrağı);
  cardDiv.appendChild(flagImg);

  const cardInfoDiv = document.createElement("div");
  cardInfoDiv.classList.add("card-info");
  cardDiv.appendChild(cardInfoDiv);

  const h3 = document.createElement("h3");
  h3.classList.add("ip");
  h3.textContent = obj.data.sorgu;
  cardInfoDiv.appendChild(h3);

  const countryP = document.createElement("p");
  countryP.classList.add("ulke");
  countryP.textContent = `${obj.data.ülke} (${obj.data.ülkeKodu})`;
  cardInfoDiv.appendChild(countryP);

  const enlemP = document.createElement("p");
  enlemP.textContent = `Enlem: ${obj.data.enlem} Boylam: ${obj.data.boylam}`;
  cardInfoDiv.appendChild(enlemP);

  const cityP = document.createElement("p");
  cityP.textContent = obj.data.şehir;
  cardInfoDiv.appendChild(cityP);

  const timeZoneP = document.createElement("p");
  timeZoneP.textContent = obj.data.saatdilimi;
  cardInfoDiv.appendChild(timeZoneP);

  const currencyP = document.createElement("p");
  currencyP.textContent = obj.data.parabirimi;
  cardInfoDiv.appendChild(currencyP);

  const ispP = document.createElement("p");
  ispP.textContent = obj.data.isp;
  cardInfoDiv.appendChild(ispP);

  return cardDiv;
}

axios.get(myUrl).then((response) => {
  document.querySelector(".cards").appendChild(ipCardCreator(response));
});

async function getData() {
  const ipadresim = await ipAdresimiAl();
}
