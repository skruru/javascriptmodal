{
  // ドラッグ中のアイテムを保持しておく変数
  let dragItem = null;

  const dropItems = document.getElementById('drop-items');

  // ドラッグするアイテムのイベントを纏めてセット ======================================================================
  const dragEventHandlers = item => {
    // ドラッグを開始したとき ==================================================
    item.addEventListener('dragstart', event => {
      // ドラッグ中のアイテムをセット
      dragItem = event.target;
    }, false);

    // ドラッグを終了したとき ==================================================
    item.addEventListener('dragend', () => {
      // ドラッグ中のアイテムを解除
      dragItem = null;
    }, false);
  };

  // ドロップされるアイテム(ドロップゾーン)のイベントを纏めてセット ====================================================
  const dropEventHandlers = dropZone => {
    // ドロップゾーンの上にアイテムがドラッグされた時のクラス名
    const className = 'drag-enter';

    // ドロップゾーンの上にアイテムが入ってきたとき ============================
    dropZone.addEventListener('dragenter', event => {
      if (dragItem) {
        // クラス名を付与
        event.target.classList.add(className);
      }
    }, false);

    // ドロップゾーンの上にアイテムがあるとき ==================================
    dropZone.addEventListener('dragover', event => {
      if (dragItem) {
        // デフォルトのイベントをキャンセルする
        event.preventDefault();
      }
    }, false);

    // ドロップゾーンからアイテムが離れたとき ==================================
    dropZone.addEventListener('dragleave', event => {
      // クラス名を外す
      event.target.classList.remove(className);
    }, false);

    // アイテムがドロップゾーンにドロップされたとき ============================
    dropZone.addEventListener('drop', event => {
      // クラス名を外す
      event.target.classList.remove(className);

      if (dragItem) {
        // デフォルトのイベントをキャンセルする
        event.preventDefault();

        // ドロップされたアイテムを追加する
        event.target.appendChild(dragItem);
      }
    }, false)
  };

  // 初期表示されているエレメントに処理をセット ========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    // ドラッグ可能なアイテム ==================================================
    const dragItems = document.querySelectorAll('.drag-item');
    // アイテムにイベントをセット
    dragItems.forEach(dragItem => {
      dragEventHandlers(dragItem);
    });

    // ドロップされるアイテム(ドロップゾーン) ==================================
    const dropZones = document.querySelectorAll('.drop-item');
    // アイテムにイベントをセット
    dropZones.forEach(dropItem => {
      dropEventHandlers(dropItem);
    });

    // ボタンにイベントをセット ========================================================================================

    // 「アイテムを追加」ボタン ================================================
    // アイテムにイベントをセット
    document.querySelector('.js-add-item').addEventListener('click', () => {
      // アイテムのクローンを作成
      const dragItem = dragItems[0].cloneNode(true);
      // イベントをセット
      dragEventHandlers(dragItem);
      // ドロップゾーンに追加
      dropZones[0].appendChild(dragItem);
    });


    // 「ドロップゾーンを追加」ボタン ==========================================
    // アイテムにイベントをセット
    document.querySelector('.js-add-drop-item').addEventListener('click', () => {
      // ドロップゾーンのクローンを作成(中身はクローンしない)
      const dropZone = dropZones[0].cloneNode();
      // イベントをセット
      dropEventHandlers(dropZone);
      // ドロップゾーンの一覧に追加
      dropItems.appendChild(dropZone);
    });
  }, false);
}
