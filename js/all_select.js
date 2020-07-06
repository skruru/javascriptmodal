// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
  // 全選択をクリックしたときのイベントをセットします
  const selectAll = document.getElementById('select-all');
  const items = Array.from(document.getElementsByClassName('js-check'));
  const itemNames = document.getElementById('selected-items');

  const addItems = checkedItems => {
    itemNames.innerHTML = '';
    checkedItems.forEach(checkedItem => {
      const cloneItem = checkedItem.parentNode.querySelector('span').cloneNode(true);
      itemNames.appendChild(cloneItem);
    });
  };

  selectAll.addEventListener('click', e => {
    items.forEach(item => item.checked = e.target.checked);
    const checkedItems = items.filter(item => item.checked === true);
    addItems(checkedItems);
  },false);
  // 各アイテムをクリックしたときのイベントをセットします
  items.forEach(item => {
    item.addEventListener('click', () => {
      const checkedItems = items.filter(item => item.checked === true);
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
