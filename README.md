# css-selector-crawler
過去習慣在寫爬蟲程式時都是使用正規表示法來剖析網頁結構取得資料。

最近在寫 Chrome Extension 時 Chrome Extension 可以使用 `chrome.tabs.executeScript` 在一個 tab 內的內容執行自己寫的 JavaScript，在這個機制可以利用 Css Selector 來做網頁的剖析取得想要的資料，極其方便。

所以一個簡單的想法是，取得網頁資料->執行 JavaScript ->取得想要的資料

就找到 Node.js 有個 Project `jsdom` 符合此需求

此程式便是使用 `jsdom` 的去 ted 網站取得演講資訊

## Quick Start
install node modules

```
$ npm install
```
start
```
$ node ted-crawler.js
```
## Keys
[jsdom](https://github.com/tmpvar/jsdom)
