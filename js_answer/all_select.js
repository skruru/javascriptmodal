// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', () => {
  // エレメントの選択 ==================================================================================================
  // 全選択のエレメントを取得
  const selectAll = document.getElementById('select-all');

  // 各アイテムのエレメントを取得
  // Liveで取りたいのでgetElementsByClassNameを使用
  // querySelectorAllで取得した場合には「items.filter()」で取得されるcheckedは10行目時点のchecked
  const items = Array.from(document.getElementsByClassName('js-check'));

  // 選択されたエレメントのアイテム名をセットするエレメントを取得
  const itemNames = document.getElementById('selected-items');

  // 選択されたアイテムを「選択されたアイテム一覧」に追加 ==============================================================
  const addItems = checkedItems => {
    // 「選択されたアイテム一覧」をクリア
    itemNames.innerHTML = '';

    checkedItems.forEach(checkedItem => {
      // チェックされたアイテムのspanのコピー
      const cloneItem = checkedItem.parentNode.querySelector('span').cloneNode(true);

      // コピーを「選択されたアイテム一覧」に追加
      itemNames.appendChild(cloneItem);
    });
  };

  // 全選択のクリックイベントをセット ==================================================================================
  selectAll.addEventListener('click', event => {
    // 各アイテムに全選択と同じチェックステートをセット
    items.forEach(item => item.checked = event.target.checked);

    // チェックされているアイテムを取得
    const checkedItems = items.filter(ietm => ietm.checked === true);

    // 「選択されたアイテム一覧」に追加
    addItems(checkedItems);
  }, false);

  // アイテムのクリックイベントを設定 ==================================================================================
  items.forEach(item => {
    // 各アイテム毎にイベントをセット
    item.addEventListener('click', () => {
      // チェックされているアイテムを取得
      const checkedItems = items.filter(ietm => ietm.checked === true);

      // 「選択されたアイテム一覧」に追加
      addItems(checkedItems);

      // 全アイテム数とチェックされているアイテム数が同じ
      if (items.length === checkedItems.length) {
        selectAll.checked = true;
        selectAll.indeterminate = false;
        return;
      }

      // チェックされているアイテムが無い
      if (checkedItems.length === 0) {
        selectAll.checked = false;
        selectAll.indeterminate = false;
        return;
      }

      // 一部がチェックされている
      selectAll.checked = false;
      selectAll.indeterminate = true;
    });
  });
}, false);
