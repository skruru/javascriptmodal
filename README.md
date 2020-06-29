# DOM操作

- [【脱jQuery！】ネイティブなJavaScript（Vanilla JS）への書き換え方まとめ](https://wemo.tech/2101)
- [JQueryをVanilla JSに緩やかに置き換える](https://qiita.com/nightyknite/items/668c112c40931515ed67)
- [You Don't Need jQuery](https://qiita.com/tatesuke/items/b9548dd484b01b139b74)
- [ライブラリを使わない素のJavaScriptでDOM操作](https://qiita.com/kouh/items/dfc14d25ccb4e50afe89#%E5%B1%9E%E6%80%A7%E3%81%AE%E6%93%8D%E4%BD%9C)
- [現代の JavaScript チュートリアル(パート2)](https://ja.javascript.info/)

Javascriptの守備範囲はサーバサイドのプログラムからクライアントサイドのプログラムまでとても広いので情報が多くて悩むところですが、WEBアプリケーションやホームページを作成するときはDOMの操作がメインになります。

DOMの操作にも考え方が2種類あってHTMLの中のエレメントを選択してそのエレメント操作していくというやり方と、データを持っていてそのデータをJavascriptのテンプレートに埋め込んでいくといったやり方です。  
前者はjQueryやVanilla JSのやり方で後者はReactやVue.jsのやり方になります。

両者のやり方を混在して使おうとすると相性が悪いので思ったような動きになりません。これはブラウザのDOMを直接扱うか、VirtualDOMという仮想のDOMを扱うかの違いによるものです。

ここではVanilla JSを使用したDOM操作を学びます。

## jQueryとVanilla JSでのDOM操作の大きな違い

jQueryとVanilla JSでのDOM操作の大きな違いはVanilla JSでは取得した複数のエレメントに対しての操作が纏めて行えないことです。  
エレメントごとに属性を変更したり、イベントをセットしなければなりません。

また、fadeInやfadeOut、animateなどのアニメーション系のメソッドも存在しません。

## DOM操作の種類

- DOMエレメントの選択
- DOMエレメントの属性操作
- DOMエレメントの状態の操作
- DOMエレメントへのイベント設定
- DOMエレメントの生成・挿入

大きく分けると上記のものになります。

「エレメントを選択してそれに対して何かアクションを起こす」これが基本です。

アニメーションなどは最近ではCSSを使用しますので、クラスの付け外しで実装しましょう。  
複雑なアニメーションを行いたい場合はライブラリ([2019年注目のJavaScriptアニメーションライブラリ11選](https://qiita.com/baby-degu/items/2516bb55e97de612118b))を使用しましょう。

CSS3におけるセレクタもそうですが、jQueryで実装されていたものがJavascriptへ逆輸入的に実装されていますのでjQueryでできることは大抵Vanilla JSでも行うことができます。

### エレメントの選択

- [要素の取得方法まとめ](https://qiita.com/amamamaou/items/25e8b4e1b41c8d3211f4)
- [【DOM基礎】ノードの取得／属性の取得・設定](https://qiita.com/KDE_SPACE/items/e21bb31dd4d9c162c4a6)
- [検索: getElement* と querySelector*](https://ja.javascript.info/searching-elements-dom)

|メソッド|返り値|動的|
|--------|------|----|
|document.getElementById(id)|Element|いいえ|
|document.getElementsByName(name)|NodeList(IEはHTMLCollection)|いいえ|
|document.getElementsByClassName(names)|HTMLCollection|はい|
|Element.getElementsByClassName(names)|HTMLCollection|はい|
|document.getElementsByTagName(names)|HTMLCollection|はい|
|Element.getElementsByTagName(names)|NodeList|いいえ|
|document.querySelector(selectors)|Element|いいえ|
|Element.querySelector(selectors)|Element|いいえ|
|document.querySelectorAll(selectors)|NodeList|いいえ|
|Element.querySelectorAll(selectors)|NodeList|いいえ|

### エレメントの属性操作

- [属性とプロパティ(HTML 属性)](https://ja.javascript.info/dom-attributes-and-properties#ref-1572)
- [JavaScript 属性値を取得/設定/削除する](https://itsakura.com/js-getattribute)
- [JavaScriptでスタイルの動的変更方法](https://qiita.com/takahiro_itazuri/items/559427278f315ed119fe)
- [JavaScriptでカスタムデータ属性の値を取得・変更する](http://sarchitect.net/10929)

プロパティを使用して属性を操作するやり方とメソッドを使用して属性を操作するやり方があります。

### DOMエレメントの状態の操作

エレメントの高さや幅を取得したり、エレメント内に値をセットしたりします。

- [ドキュメントの変更](https://ja.javascript.info/modifying-document)
- [jQuery・JavaScript　高さ、横幅取得方法](https://qiita.com/ypyp/items/c4b76e85f32b1f0cd577)
- [スクロール位置取得方法をいい加減忘れないようにメモ](https://qiita.com/makoto1219/items/9d5b71a792025703cdea)
- [JavaScriptで要素を生成・追加する](http://cly7796.net/wp/javascript/create-elements-with-javascript/)

### DOMエレメントへのイベント設定

イベントはエレメントをクリックしたりホバーしたりしたときに何かを実行させる記述を行います。

- [JS イベントまとめ](https://qiita.com/hththt/items/aefbcc6eb191588dadff)
- [イベントリファレンス](https://developer.mozilla.org/ja/docs/Web/Events)
- [JavaScript イベントハンドラ一覧](https://web-designer.cman.jp/javascript_ref/event_list/)
- [DOMイベントのキャプチャ/バブリングを整理する 〜 JSおくのほそ道 #017](https://qiita.com/hosomichi/items/49500fea5fdf43f59c58)
- [JavaScriptでjQueryを使わずにイベントをtriggerする](https://qiita.com/ryounagaoka/items/a48d3a4c4faf78a99ae5)

イベントは色々と種類がありますが、`input`イベントなどは検索してもなかなか出てこないですし、タッチイベントなどもクリックとは異なったりします。
どんなイベントがあるのか、どういったときにイベントが発生するのかは普段から調べて試してみるといいでしょう。

最近のPCはスペックが高いので気づきにくいですがイベントも多様すると重くなってきますので注意しましょう。

また、同じエレメントに対して何度もイベントをセットすると実行される内容はセットした回数分実行されます。
動的に追加したエレメントにイベントを割り当てるときは気をつけましょう。

連続してイベントが発生するものも注意が必要です。
スクロールイベントやサイズ変更イベントは連続してイベントが発生するのでスペックが低いマシンだとカクカクしてしまうことがあります。

## jQueryで作ったものをVanilla JSで実装してみよう

jQueryで作成した「トップへ戻る([scroll_top.js](js/scroll_top.js))」ボタンや「ページ内リンク([smooth_scroll.js](js/smooth_scroll.js))」「セレクトボックス間のアイテムを移動([select.js](js/select.js))」などをVanilla JSで作成してみましょう。  
アニメーションについては今回は無しとします。

`javascript.html`

- [今どきのスムーズスクロール(2019年版)](https://www.to-r.net/media/smooth_scrolling_2019/)

## チェックボックスの全選択を実装してみよう

[all_select.js](js/all_select.js) にコードを書いて`全選択.html`を実装してみましょう。

## ドラッグアンドドロップを実装してみよう

- [ドラッグ&ドロップ　〜HTML5のAPIでドラッグ＆ドロップする方法〜](https://tamentai.jp/wp/tamentai-labo/2019/03/11/html5dnd/)
- [ドラッグ操作](https://developer.mozilla.org/ja/docs/DragDrop/Drag_Operations)
- [HTML ドラッグ＆ドロップ API](https://developer.mozilla.org/ja/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag & Drop API を使うときにやっておいたほうがいいこと](https://qiita.com/boushi-bird@github/items/ce720122fd0c15abe036)

[drag_and_drop.js](js/drag_and_drop.js) にコードを書いて`ドラッグアンドドロップ.html`を実装してみましょう。

## おまけ

- [JavaScript 長く使える系の知識](https://qiita.com/yamadar/items/bfdfc58cec49bf2690e1)
- [要約 プログラマが知るべき97のこと＋１０](https://qiita.com/masakinihirota/items/5fd5fffa5ac5e057a9df)

### 読んでおいた方がいいかなと思う本

- [イラスト図解式 この一冊で全部わかるWeb技術の基本](https://www.amazon.co.jp/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E5%9B%B3%E8%A7%A3%E5%BC%8F-%E3%81%93%E3%81%AE%E4%B8%80%E5%86%8A%E3%81%A7%E5%85%A8%E9%83%A8%E3%82%8F%E3%81%8B%E3%82%8BWeb%E6%8A%80%E8%A1%93%E3%81%AE%E5%9F%BA%E6%9C%AC-%E5%B0%8F%E6%9E%97-%E6%81%AD%E5%B9%B3/dp/4797388811/ref=reads_cwrtbar_7?_encoding=UTF8&pd_rd_i=4797388811&pd_rd_r=2751c9ef-9ffb-4559-beee-004637d2b735&pd_rd_w=XAsLe&pd_rd_wg=qmYY7&pf_rd_p=4b9baafe-7fd8-4810-9492-1f84db78a43a&pf_rd_r=ZK7EVQKX5GZ91MMTX0TP&psc=1&refRID=ZK7EVQKX5GZ91MMTX0TP)
- [リーダブルコード](https://www.amazon.co.jp/%E3%83%AA%E3%83%BC%E3%83%80%E3%83%96%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%89-%E2%80%95%E3%82%88%E3%82%8A%E8%89%AF%E3%81%84%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E6%9B%B8%E3%81%8F%E3%81%9F%E3%82%81%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%A7%E5%AE%9F%E8%B7%B5%E7%9A%84%E3%81%AA%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF-Theory-practice-Boswell/dp/4873115655)
- [体系的に学ぶ 安全なWebアプリケーションの作り方 第2版 **脆弱性が生まれる原理と対策の実践**](https://www.amazon.co.jp/%E4%BD%93%E7%B3%BB%E7%9A%84%E3%81%AB%E5%AD%A6%E3%81%B6-%E5%AE%89%E5%85%A8%E3%81%AAWeb%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E4%BD%9C%E3%82%8A%E6%96%B9-%E7%AC%AC2%E7%89%88-%E8%84%86%E5%BC%B1%E6%80%A7%E3%81%8C%E7%94%9F%E3%81%BE%E3%82%8C%E3%82%8B%E5%8E%9F%E7%90%86%E3%81%A8%E5%AF%BE%E7%AD%96%E3%81%AE%E5%AE%9F%E8%B7%B5-%E5%BE%B3%E4%B8%B8/dp/4797393165/ref=reads_cwrtbar_41?_encoding=UTF8&pd_rd_i=4797393165&pd_rd_r=28ea2e6b-a693-4a63-8c84-e6c4ae2c7ea6&pd_rd_w=0mECR&pd_rd_wg=enKHX&pf_rd_p=4b9baafe-7fd8-4810-9492-1f84db78a43a&pf_rd_r=TMZG6TSBBW6CCMDX4D6V&psc=1&refRID=TMZG6TSBBW6CCMDX4D6V)
- [Java言語で学ぶデザインパターン入門](https://www.amazon.co.jp/%E5%A2%97%E8%A3%9C%E6%94%B9%E8%A8%82%E7%89%88Java%E8%A8%80%E8%AA%9E%E3%81%A7%E5%AD%A6%E3%81%B6%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E5%85%A5%E9%96%80-%E7%B5%90%E5%9F%8E-%E6%B5%A9/dp/4797327030/ref=reads_cwrtbar_2/355-5912526-3947607?_encoding=UTF8&pd_rd_i=4797327030&pd_rd_r=49ff6dfb-5075-4584-9e1f-35804c62c73c&pd_rd_w=Mpq7E&pd_rd_wg=8avoH&pf_rd_p=4b9baafe-7fd8-4810-9492-1f84db78a43a&pf_rd_r=QDR6C831VKKWNP9JAEM1&psc=1&refRID=QDR6C831VKKWNP9JAEM1)
- [ドメイン駆動設計入門 ボトムアップでわかる! ドメイン駆動設計の基本](https://www.amazon.co.jp/%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E9%A7%86%E5%8B%95%E8%A8%AD%E8%A8%88%E5%85%A5%E9%96%80-%E3%83%9C%E3%83%88%E3%83%A0%E3%82%A2%E3%83%83%E3%83%97%E3%81%A7%E3%82%8F%E3%81%8B%E3%82%8B-%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E9%A7%86%E5%8B%95%E8%A8%AD%E8%A8%88%E3%81%AE%E5%9F%BA%E6%9C%AC-%E6%88%90%E7%80%AC-%E5%85%81%E5%AE%A3/dp/479815072X/ref=reads_cwrtbar_8?_encoding=UTF8&pd_rd_i=479815072X&pd_rd_r=28ea2e6b-a693-4a63-8c84-e6c4ae2c7ea6&pd_rd_w=0mECR&pd_rd_wg=enKHX&pf_rd_p=4b9baafe-7fd8-4810-9492-1f84db78a43a&pf_rd_r=TMZG6TSBBW6CCMDX4D6V&psc=1&refRID=TMZG6TSBBW6CCMDX4D6V)
- [SQLアンチパターン](https://www.amazon.co.jp/SQL%E3%82%A2%E3%83%B3%E3%83%81%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3-Bill-Karwin/dp/4873115892)
