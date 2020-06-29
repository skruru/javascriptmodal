// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', () => {
  // #から始まるリンク(内部リンク)のクリックイベントに実装
  const links = document.querySelectorAll('[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', event => {
      // デフォルトの動作をキャンセル(ブラウザのURLに#○○○が付くのを防ぐ)
      event.preventDefault();

      // アンカーの値取得(先頭の#を削除して取得(slice(1)))
      const href = link.getAttribute('href').slice(1);

      // ターゲットのエレメントを取得
      const targetElm = document.getElementById(href);

      // 現在のスクロール量を取得
      const offsetTop = window.pageYOffset;

      // コンテンツ上部から要素までの距離を取得
      // リンク先のidが存在しない場合はトップに戻るため現在のスクロール量のマイナス値を取得
      const rectTop = targetElm ? targetElm.getBoundingClientRect().top : offsetTop * -1;

      // bodyのフォントサイズを取得(単位のpxが付いてくるので外して数値に変換)
      const defaultFontSize = parseInt(window.getComputedStyle(document.body).fontSize, 10);

      // 固定のヘッダの高さを取得(隙間を一文字分足しておく)
      const offset = document.querySelector('.fixed-top').offsetHeight + defaultFontSize;

      // スムーススクロールを実行
      window.scrollTo({
        top: rectTop + offsetTop - offset,
        behavior: 'smooth'
      });
    }, false);
  });
}, false);
