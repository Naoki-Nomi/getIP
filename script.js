import { APIKEY, AUTHDOMAIN, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID, APPID, MEASUREMENTID, URL } from "./env.js"

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// 非同期処理を伴う関数定義にasyncをつけ、非同期処理を伴う関数実行時にawaitをつける
// Internet Explorerなど古いブラウザの場合はbabelの使用を推奨
const getIP = async () => {

  const json = await fetch(URL)
    .then((res) => res.json()
    ).then(jsonRes => {
      return jsonRes.ip
      console.log(jsonRes.ip);
    }).catch(error => {
      return null
    });

  // DBに保存
  const db = firebase.firestore();
  db.collection("test-companies").add({
    ip: json
    // 大陸: `${SURFPOINT .getContinentCode()}`,
    // 国: `${SURFPOINT .getCountryCode()}`,
    // 国_英語表記: `${SURFPOINT .getCountryAName()}`,
    // 国_日本語表記: `${SURFPOINT .getCountryJName()}`,
    // 地方: `${SURFPOINT .getRegionCode()}`,
    // 都道府県: `${SURFPOINT .getPrefCode()}`,
    // 都道府県_ローマ字表記: `${SURFPOINT .getPrefAName()}`,
    // 都道府県_日本語表記: `${SURFPOINT .getPrefJName()}`,
    // 都道府県_緯度: `${SURFPOINT .getPrefLatitude()}`,
    // 都道府県_経度: `${SURFPOINT .getPrefLongitude()}`,
    // 市区町村: `${SURFPOINT .getCityCode()}`,
    // 市区町村_ローマ字表記: `${SURFPOINT .getCityAName()}`,
    // 市区町村_日本語表記: `${SURFPOINT .getCityJName()}`,
    // 市区町村_緯度: `${SURFPOINT .getCityLatitude()}`,
    // 市区町村_経度: `${SURFPOINT .getCityLongitude()}`,
    // 企業フラグ: `${SURFPOINT .getBCFlag()}`,
    // 企業: `${SURFPOINT .getOrgCode()}`,
    // 本支店フラグ: `${SURFPOINT .getOrgOfficeCode()}`,
    // 自営業フラグ: `${SURFPOINT .getOrgIndependentCode()}`,
    // 企業名: `${SURFPOINT .getOrgName()}`,
    // 企業_都道府県: `${SURFPOINT .getOrgPrefCode()}`,
    // 企業_市区町村: `${SURFPOINT .getOrgCityCode()}`,
    // 企業_緯度: `${SURFPOINT .getOrgLatitude()}`,
    // 企業_経度: `${SURFPOINT .getOrgLongitude()}`,
    // 郵便番号: `${SURFPOINT .getOrgZipCode()}`,
    // 住所: `${SURFPOINT .getOrgAddress()}`,
    // 電話番号: `${SURFPOINT.getOrgTel()}`,
    // FAX番号: `${SURFPOINT.getOrgFax()}`,
    // 上場区分フラグ: `${SURFPOINT.getOrgIpoType()}`,
    // 証券コード: `${SURFPOINT .getStockTickerNumber()}`,
    // 設立年月日: `${SURFPOINT .getOrgDate()}`,
    // 資本金コード: `${SURFPOINT .getOrgCapitalCode()}`,
    // 従業員数コード: `${SURFPOINT .getOrgEmployeesCode()}`,
    // 売上高コード: `${SURFPOINT .getOrgGrossCode()}`,
    // 代表者名: `${SURFPOINT .getOrgPresident()}`,
    // 業種大分類: `${SURFPOINT .getOrgIndustrialCategoryL()}`,
    // 業種中分類: `${SURFPOINT .getOrgIndustrialCategoryM()}`,
    // 業種小分類: `${SURFPOINT .getOrgIndustrialCategoryS()}`,
    // 業種細分類: `${SURFPOINT .getOrgIndustrialCategoryT()}`,
    // WEBサイトアドレス: `${SURFPOINT.getOrgUrl()}`,
    // ドメイン名: `${SURFPOINT .getOrgDomainName()}`,
    // ドメインタイプ: `${SURFPOINT.getDomainType()}`,
    // 組織_社名_屋号英語: `${SURFPOINT.getOrgEnglishName()}`,
    // 組織_住所英語: `${SURFPOINT .getOrgEnglishAddress()}`,
    // IPアドレス: `${SURFPOINT.getIP()}`,
    // 回線コード: `${SURFPOINT .getLineCode()}`,
    // 回線日本語表記: `${SURFPOINT .getLineCode()}`,
    // タイムゾーン: `${SURFPOINT.getTimeZone()}`,
    // 市外局番: `${SURFPOINT.getTelCode()}`,
    // ドメイン名: `${SURFPOINT .getDomainName()}`,
    // プロキシ判定: `${SURFPOINT .getProxyFlag()}`,
    // 都道府県CF値: `${SURFPOINT.getPrefCF()}`,
    // 市区町村CF値: `${SURFPOINT.getCityCF()}`,
    // 回線CF値: `${SURFPOINT.getLineCF()}`
  }).catch((error) => {
    console.error("Error adding document: ", error);
});

}

getIP();