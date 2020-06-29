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

  // 「選択されたアイテム一覧」の表示を変更 ============================================================================
  // チェックされているアイテムを保持しておく変数
  const checkedItems = [];

  // 表示を変更する関数
  const changeItemNames = (item, checked) => {
    // チェックされたアイテムのspanのコピー
    const cloneItem = item.parentNode.querySelector('span').cloneNode(true);

    // itemがチェックされているアイテムの変数のどの位置に存在するかを確認する変数
    // -1 のときは存在しないものとする
    let index = -1;

    // 選択されているアイテムに存在するかを確認
    checkedItems.forEach((checkedItem, i) => {
      if (checkedItem.isEqualNode(cloneItem)) {
        index = i;
      }
    });
    // もしcheckedItemsが多くてパフォーマンスが出ない場合は下記の書き方にしても可
    // for (let i = 0, len = checkedItems.length; i < len; i++) {
    //   if (checkedItems[i].isEqualNode(cloneItem)) {
    //     index = i;
    //     break;
    //   }
    // }

    // チェック状態なのに存在しない場合はアイテムを追加
    if (index === -1 && checked) {
      // コピーを「選択されたアイテム一覧」に追加
      itemNames.appendChild(cloneItem);

      // 選択されているアイテムに追加
      checkedItems.push(cloneItem);

      return;
    }

    // チェック状態でないときに存在する場合はアイテムを削除
    if (index !== -1 && !checked) {
      // 該当インデックスのアイテムを削除
      itemNames.removeChild(itemNames.childNodes[index]);

      // 選択されているアイテムから削除
      checkedItems.splice(index, 1);
    }
  }

  // 全選択のクリックイベントをセット ==================================================================================
  selectAll.addEventListener('click', event => {
    const checked = event.target.checked;

    // 各アイテムに全選択と同じチェックステートをセット
    items.forEach(item =>{
      // 各アイテムを全選択と同じチェック状態にする
      item.checked = checked;

      changeItemNames(item, checked);
    });
  }, false);

  // アイテムのクリックイベントを設定 ==================================================================================
  items.forEach(item => {
    // 各アイテム毎にイベントをセット
    item.addEventListener('click', event => {
      const checked = event.target.checked;

      changeItemNames(event.target, checked);

      // チェックされているアイテムを取得
      const checks = items.filter(ietm => ietm.checked === true);

      // 全アイテム数とチェックされているアイテム数が同じ
      if (items.length === checks.length) {
        selectAll.checked = true;
        selectAll.indeterminate = false;
        return;
      }

      // チェックされているアイテムが無い
      if (checks.length === 0) {
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
