// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', () => {
  // 「window.scroll」を使ってスクロールさせましょう
  // jQueryと違い要素一つ一つにイベントをセットしたり、値を変更したりしなければなりません
  // [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)
  const links = document.querySelectorAll('[href^="#"]');//hrefの前方一致
  //配列内のそれぞれの要素にイベントをつける
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event){
      //aタグのデフォルトをキャンセルする
      event.preventDefault();
      //hrefの取得
      const href = links[i].getAttribute('href');
      //移動先があるかどうかを取得
      const target = document.querySelector(href === '#' ? 'html' : href) || document.querySelector('html');
      // navのaタグをクリックしたら、クリックした時のwindowからのy座標をとる
      const offsetTop = window.pageYOffset;
      // リンク先のトップ位置の取得
      const position = target.getBoundingClientRect().top;
      //フォントサイズを取得
      const defaultFontSize = parseInt(window.getComputedStyle(document.body).fontSize, 10);
      // navのheightをとる
      const offset = document.querySelector('.navbar').offsetHeight + defaultFontSize;
      // window.scrollでスクロールさせる
      window.scroll({
        top: position + offsetTop - offset,
        behavior: 'smooth'
      });
    }, false);
  }
  // links.forEach(link => {
  //   link.addEventListener('click', event => {
  //     //aタグのデフォルトをキャンセルする
  //     event.preventDefault();
  //     //hrefの取得
  //     const href = link.getAttribute('href');
  //     //移動先があるかどうかを取得
  //     const target = document.querySelector(href === '#' ? 'html' : href) || document.querySelector('html');
  //     // navのaタグをクリックしたら、クリックした時のwindowからのy座標をとる
  //     const offsetTop = window.pageYOffset;
  //     // リンク先のトップ位置の取得
  //     const position = target.getBoundingClientRect().top;
  //     //フォントサイズを取得
  //     const defaultFontSize = parseInt(window.getComputedStyle(document.body).fontSize, 10);
  //     // navのheightをとる
  //     const offset = document.querySelector('.navbar').offsetHeight + defaultFontSize;
  //     // window.scrollでスクロールさせる
  //     window.scrollTo({
  //       top: position + offsetTop - offset,
  //       behavior: 'smooth'
  //     });
  //   }, false);
  // });
}, false);
