// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', () => {
  // #から始まるリンク(内部リンク)のクリックイベントに実装
  const links = document.querySelectorAll('[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', event => {
      // デフォルトの動作をキャンセル(ブラウザのURLに#○○○が付くのを防ぐ)
      event.preventDefault();

      // アンカーの値取得
      const href = link.getAttribute('href');

      // 移動先を取得(リンク先のidが存在するかを確認してトップに戻るかどうかを切り替える)
      const target = document.querySelector(href === '#' ? 'html' : href) || document.querySelector('html');

      // 現在のスクロール量を取得
      const offsetTop = window.pageYOffset;

      // 移動先を数値で取得(エレメントの上端の位置を取得)
      const position = target.getBoundingClientRect().top;

      // bodyのフォントサイズを取得(単位のpxが付いてくるので外して数値に変換)
      const defaultFontSize = parseInt(window.getComputedStyle(document.body).fontSize, 10);
      //だいたい10進数になっているけど保険

      // 固定のヘッダの高さを取得(隙間を一文字分足しておく)
      const offset = document.querySelector('.fixed-top').offsetHeight + defaultFontSize;

      // スムーススクロールを実行
      window.scrollTo({
        top: position + offsetTop - offset,
        behavior: 'smooth'
      });
    }, false);
  });
}, false);
