// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', () => {
  // 取得した要素を配列に一旦変換して処理を行った方が楽にできます
  // jQueryと違い要素一つ一つにイベントをセットしたり、値を変更したりしなければなりません
  // [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)
  // アイテムゾーンを取得
  const left = document.getElementById('none-selected-items');
  const right = document.getElementById('selected-items');

  // 移動する関数
  const move = (from, to, optionKey) => {
    // オプションを取得
    const options = from.querySelectorAll(optionKey);
    // 選択を解除して移動
    options.forEach( option => {
      option.selected = false;
      to.appendChild(option);
    });
  };
  
  // 右側に移動
  document.querySelector('.js-item-to-right').addEventListener('click', () => {
    move(left, right, 'option:checked');
  },false);
  // 右側に全部移動
  document.querySelector('.js-item-to-right-all').addEventListener('click', () => {
    move(left, right, 'option')
  },false);
  // 左側に移動
  document.querySelector('.js-item-to-left').addEventListener('click', () => {
    move(right, left, 'option:checked');
  },false);
  // 左側に全部移動
  document.querySelector('.js-item-to-left-all').addEventListener('click', () => {
    move(right, left, 'option');
  },false);
}, false);
