function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.589205529007195, lng: 130.39978664038068 },
    zoom: 17,
    heading: 320,
    tilt: 47.5,
    mapId: "90f87356969d889c",
    controlSize: 30
  });

  let currentLocationMarker = null; // 現在地マーカーを格納する変数
  let showingCurrentLocation = false; // 現在地を表示中かどうかのフラグ

  // ...

  
  const locationButton = document.createElement("button");
  locationButton.textContent = "現在地を取得";
  document.body.appendChild(locationButton);

  locationButton.textContent = "現在地を表示";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(locationButton);
  locationButton.addEventListener("click", () => {
    if (!showingCurrentLocation) {
      // 現在地を表示する
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          currentLocationMarker = new google.maps.Marker({
            position: pos,
            map,
            icon: {
              url: "images/mypin.png",
              scaledSize: new google.maps.Size(20, 30),
            },
          });

          map.setCenter(pos);

          // ボタンのラベルを切り替える
          locationButton.textContent = "現在地を非表示";
          showingCurrentLocation = true;
        });
      } else {
        // Geolocationがサポートされていない場合の処理
        handleLocationError(false, infoWindow, map.getCenter());
      }
    } else {
      // 現在地を非表示にする
      if (currentLocationMarker) {
        currentLocationMarker.setMap(null);
        currentLocationMarker = null;
      }
      
      // ボタンのラベルを切り替える
      locationButton.textContent = "現在地を表示";
      showingCurrentLocation = false;
    }
  });


  // マーカーの LatLng とタイトル テキストを設定します。最初のマーカー (ボイントン パス)
  // タブが押されたときに最初のフォーカスを受け取ります。矢印キーを使用して
  // マーカー間を移動します。もう一度タブを押して、マップ コントロールを切り替えます。




  const  markers= [
  
   
    {
      position: { lat: 33.592693, lng: 130.396838 },
      photos: ["images/01.png","images/mypin.png"], // 写真のURLをここに追加
      title:["ゴーインベルボ"],
      content: "<div><br>住所:〒810-0041 福岡県福岡市中央区大名2-2-44 マウンテンハウスII 4F<br>営業時間: 13時00分~19時00分<br>定休日: 火、その他不定休</div>",
    },

    {
      position:{ lat:33.585241,lng: 130.406052 },
      photos:["logo.svg"],
      content:"<div>RAGTAG(ラグタグ) 福岡パルコ店<br>住所:<br>〒810-0001 福岡県福岡市中央区天神2-11-1 福岡パルコ本館6F </br>  <br>営業時間: 月～金11:30〜15:30（L.O.15:15）、18:30～24:00（L.O.23:45） 土・日・祝11:30～24:00（L.O.23:45）  </br>  <br>定休日: なし</br>  <br>メニュー:</br>  <br>ラーメン700円</br> <br>ネギらーめん 770円</br> <br>チャーシューメン 800円</br> <br>炙りトロ肉チャーシューメン 1000円</br> 「博多だるま」の本店。トロ肉チャーシューは本店限定。<br>備考</br><br></br></div>  "
      
    },

    {
      position:{ lat:33.592456,lng: 130.386512 }, 
      photos:["logo.svg"],
      content:"<div>GoodTime <br>住所:<br>〒810-0041 福岡県福岡市中央区大名1-10-33 </br>  <br>営業時間:   6:00～翌1:45</br>  <br>定休日: なし</br>  <br>メニュー:</br>  <br>ラーメン 550円</br><br>替玉 150円</br><br>替肉 100円</br><br>備考:</br></div>"
    },

    {
    position:{ lat:33.589187, lng:130.395818 }, 
    photos:["logo.svg"],
    content:"<div> SNUG <br>住所:<br> 〒810-0041 福岡県福岡市中央区大名1-15-22</br>  <br>営業時間:11:00〜23:00   </br>  <br>定休日: 日曜</br>  <br>メニュー:</br>  <br>ラーメン （並）550円（大）680円</br><br>チャーシューメン （並）750円（大）880円</br><br>ワンタンメン （並）750円（大）880円</br><br></br></div>"
    },
    
    {
      position:{ lat:33.591784,lng: 130.385313 },
      photos:["logo.svg"], 
      content:"<div>萬金粉<br>住所:<br> 〒810-0041 福岡県福岡市中央区大名1丁目3-52 </br>  <br>営業時間: 24時間営業</div>"
    },
    

    {
      position:{ lat:33.581589,lng: 130.403639}, 
      photos:["logo.svg"],
      content:"<div>CAPERS<br>住所:<br> 〒810-0012 福岡県福岡市中央区大名1-15-30 天神ミーズビル 102 </br>  <br>営業時間: 	11:00-20:00  </br>  <br>定休日: 	日曜、祝日</br>  <br>メニュー:</br>  <br>ラーメン 700円</br><br>ワンタンメン 900円</br><br>チャーシューメン 900円</br></div>"
    },

    {
      position:{lat:33.582658, lng: 130.394121},
      photos:["logo.svg"],
      content:"<div>KORDS<br>住所:<br> 〒810-0041 福岡県福岡市中央区大名1丁目2-31	</br>  <br>営業時間:  11:30～14:30／18:00～24:30[日・祝] 11:30～17:00／18:00～22:00 </br>  <br>定休日: 無休</br>  <br>メニュー:</br>  <br>玄瑛流ラーメン 750円</br><br>潮薫醤油ラーメン 850円</br><br>玄瑛流担々麺 900円</br><br>海老薫醤油ラーメン 900円</br></div>"
    },

    {
    position:{lat:33.587407,lng: 130.404602},
    photos:["logo.svg"],
    content:"<div> 西海岸Ruby’s西通り店 <br>住所:<br>〒810-0001 福岡県福岡市中央区天神2丁目4-17-1 </br>  <br>営業時間:   12:00～15:30／17:30～20:00</br>  <br>定休日: 水曜日</br>  <br>メニュー:</br>  <br>醤油ラーメン￥800</br><br>白湯ラーメン￥800</br><br>のどぐろラーメン</br><br>備考</br><br>福岡では珍しい鶏白湯のお店です</br></div>"
    },

    {
    position:{lat:33.587443,lng: 130.400408},
    photos:["logo.svg"],
    content:"	<div>pushmeharder<br>住所:<br>〒810-0041 福岡県福岡市中央区大名1丁目3-5-1 </br>  <br>営業時間:   	10:30〜22:00</br>  <br>定休日: 元日</br>  <br>メニュー:</br>  <br>ラーメン￥850</br><br>チャーシューメン￥1000</br><br>昔ラーメン￥800</br><br>昔チャーシューメン￥950</br></div> "
    },

    {
    position:{lat:33.581233,lng: 130.395343},
    photos:["logo.svg"],
    content:"<div>古着屋JAM福岡店<br>住所:<br> 〒810-0041 福岡県福岡市中央区大名2丁目9-5 </br>  <br>営業時間: 11:45～14:00（L.O.）19:00～22:00（L.O.）  </br>  <br>定休日: 日曜日</br>  <br>メニュー:</br>  <br>濃厚鶏そば 900円</br><br>鶏そばアメリカン 750円</br><br>中華そば 750円</br></div> "
    },

    {
    position:{lat:33.592152, lng:130.400524},
    photos:["logo.svg"],
    content:"<div>LOWECObyJAM<br>住所:<br> 〒810-0041  福岡県福岡市中央区大名2丁目6-26</br>  <br>営業時間:  10:00～23:00 </br>  <br>定休日: 無休</br>  <br>メニュー:</br>  <br>ラーメン￥890</br><br>半熟ゆでたまご￥130</br><br>追加ネギ￥120</br></div>"
    },

   
  ];
  
  // マーカー間で共有する情報ウィンドウを作成します。
  const infoWindow = new google.maps.InfoWindow();

  // マーカーを作成します。
  markers.forEach((marker, i) => {
    const mapMarker = new google.maps.Marker({
      position: marker.position,
      map,
      title: `${i + 1}. ${marker.content}`,
      icon: {
        url: 'images/mappin.png',
        scaledSize: new google.maps.Size(40, 40),
      },
    });

    mapMarker.addListener("click", () => {
      infoWindow.close();
      const infoWindowContent = createCustomInfoWindowContent(marker);
      infoWindow.setContent(infoWindowContent);
      infoWindow.open(map, mapMarker);
    });
  });
// カスタム情報ウィンドウのスタイリング
function createCustomInfoWindowContent(marker) {
  const content = document.createElement("div");
  content.style.backgroundColor = "#000000";
  content.style.color = "#ffffff";
  content.style.borderRadius = "8px";
  content.style.padding = "10px";
  content.style.maxWidth = "400px"

  // 写真を表示するためのdiv要素を作成
  const photoElement = document.createElement("div");
  photoElement.className = "owl-carousel custom-carousel"; // Owl Carouselのクラスを追加

  // 写真のサイズを適切に設定
  const photoSize = {
    width: "250px", // 写真の幅を調整
    height: "200px", // 写真の高さを調整
  };


  // 写真のURLを追加
  const photoUrls = marker.photos.map(
    (photo) => `<div><img src="${photo}" alt="Photo" style="width: ${photoSize.width}; height: ${photoSize.height};"></div>`
  );
  photoElement.innerHTML = photoUrls.join("");

  // Owl Carouselを初期化
  $(photoElement).owlCarousel({
    items: 1, // 1つの写真を表示
    loop: true, // ループさせる
    nav: true, // ナビゲーション（前後のスライドボタン）を表示
    // 写真要素のサイズを設定
  
  });

  // タイトルと説明を適切に取得する
  const title = marker.title;
  const description = marker.content;

  const titleElement = document.createElement("h1");
  titleElement.textContent = title;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = description.replace(/\n/g, "<br />"); // 改行をHTMLの改行タグに変換

 
  
  // タイトルと説明をコンテンツに追加
  content.appendChild(titleElement);
   // 写真要素をコンテンツに追加
   content.appendChild(photoElement);
  content.appendChild(descriptionElement);

  



   



  return content;
}



}
 


  const buttons = [
    ["←", "rotate", 20, google.maps.ControlPosition.LEFT_CENTER],
    ["→", "rotate", -20, google.maps.ControlPosition.RIGHT_CENTER],
    ["↓", "tilt", 20, google.maps.ControlPosition.TOP_CENTER],
    ["↑", "tilt", -20, google.maps.ControlPosition.BOTTOM_CENTER],
  ];

  buttons.forEach(([text, mode, amount, position]) => {
    const controlDiv = document.createElement("div");
    const controlUI = document.createElement("button");

    controlUI.classList.add("ui-button");
    controlUI.innerText = `${text}`;
    controlUI.addEventListener("click", () => {
      adjustMap(mode, amount);
    });
    controlDiv.appendChild(controlUI);
    map.controls[position].push(controlDiv);
  });

  const adjustMap = function (mode, amount) {
    switch (mode) {
      case "tilt":
        map.setTilt(map.getTilt() + amount);
        break;
      case "rotate":
        map.setHeading(map.getHeading() + amount);
        break;
      default:
        break;
    }
  };
  

  





document.body.addEventListener('touchmove', (e) => {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, {passive: false});



window.initMap = initMap;




// 営業しているお店を表示
// 細かいジャンルの色分け
//いったお店のチェック機能
//口コミ機能

// 現在地ピンの不具合
// 博多区の営業時間メニュー定休日のデータ入力

// 因数の引き渡しと色訳の作成、現在地のピンデザイン
// ラーメンマーカーの作成３D化
// データが重い＝画面に表示されている（一定部分）だけを表示して読み込みを軽くする
// 中央区と博多区以外のデータも作成
// ログイン画面の作成デザインphp　sql　の作成
// AWSサーバーを構築
