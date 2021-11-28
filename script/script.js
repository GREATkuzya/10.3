const url = "wss://echo-ws-service.herokuapp.com";

const divIn = document.querySelector(".div-in");
const divOut = document.querySelector(".div-out");
const btnGeo = document.querySelector('.j-btn-geo');
const btnSend = document.querySelector('.j-btn-send');

const websocket = new WebSocket(url);
websocket.onopen = () => {console.log("CONNECTED")};
websocket.onclose = () => {console.log("DISCONNECTED")}
let n = 1;

btnSend.addEventListener('click', () => {
let message = document.querySelector('.input1').value;
let card = `<div class="message">Сообщение отправителя: ${message}</div>`;
divIn.innerHTML = card;
websocket.send(message);

websocket.onmessage = function(evt) {
  divOut.innerHTML ='<div class="message-response">Сообщение сервера: ' + evt.data+'</div>';
};

}
)

btnGeo.addEventListener('click', () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      console.log(`https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`);
      divIn.innerHTML = `<div class="message">
      <a href="https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}" target="_blanc">Гео-локация</a>
      </div>`
    });
   
  }
  else {
    console.log('Geolocation не поддерживается вашим браузером');
  }
}
)

