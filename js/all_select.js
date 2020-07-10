// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
  // エレメントの選択 ==================================================================================================
  // 全選択のエレメントを取得
  const selectAll = document.getElementById('select-all');

  // 各アイテムのエレメントを取得
  const items = document.getElementsByClassName('js-check');

  // 選択されたエレメントのアイテム名をセットするエレメントを取得
  const itemNames = document.getElementById('selected-items');

  // 仮想の配列
  let selectItem = [];

  // 全選択のクリックイベントをセット ==================================================================================
  selectAll.addEventListener('click', function ()  {
    // 仮想の配列とitemNamesを一回全てクリアにする
    itemNames.innerHTML = '';
    selectItem = [];
    // 全選択がチェックされたとき
    if (selectAll.checked) {
      for (let i = 0; i < items.length; i++) {
        // アイテムを全部チェック
        items[i].checked = true;
        // アイテム全てをコピーして、仮想配列とitemNamesにいれる
        const clone = items[i].nextElementSibling.cloneNode(true);
        itemNames.appendChild(clone);
        selectItem.push(items[i]);
      }
    } else {
      for (let i = 0; i < items.length; i++) {
        // アイテムのチェックを全部外す
        items[i].checked = false;
      }
    }
  }, false);

  // アイテムのクリックイベントを設定 ==================================================================================
  // 各アイテム毎にイベントをセット
  for(let i = 0; i < items.length; i++) {
      items[i].addEventListener('click', function () {
    // 仮想の配列とitemNamesを一回全てクリアにする
        itemNames.innerHTML = '';
        selectItem = [];
        for(let s = 0; s < items.length; s++ ) {
          // アイテム全てからチェックされているアイテムを選択
          if(items[s].checked) {
            const clone = items[s].nextElementSibling.cloneNode(true);
            itemNames.appendChild(clone);
            selectItem.push(items[s]);
          }
        }
      // 全アイテム数とチェックされているアイテム数が同じ
      if (items.length === selectItem.length) {
        selectAll.checked = true;
        selectAll.indeterminate = false;
        return;
      }

      // チェックされているアイテムが無い
      if (selectItem.length === 0) {
        selectAll.checked = false;
        selectAll.indeterminate = false;
        return;
      }

      // 一部がチェックされている
      selectAll.checked = false;
      selectAll.indeterminate = true;
      });
  }
}, false);
