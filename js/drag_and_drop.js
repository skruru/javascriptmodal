{
  // ドラッグ中のアイテムを保持しておく変数
  // event.dataTransfer.setData()でIDをセットしておくサンプルばかりですが、
  // 動的に追加する要素に一意のIDを振るのは大変なのでドラッグするエレメント(event.target)をdragItemに入れるという
  // やり方でやってみましょう
  let dragItem = null;
  const dropItems = document.getElementById('drop-items');

  const dragEventHandlers = item => {
    item.addEventListener('dragstart', e => {
      dragItem = e.target;
    },false);
    item.addEventListener('dragend', () => {
      dragItem = null;
    },false);
  };

  const dropEventHandlers = dropZone => {
    const className = 'drag-enter';
    dropZone.addEventListener('dragenter', e => {
      if(dragItem){
        e.target.classList.add(className);
      }
    },false);
    dropZone.addEventListener('dragover', e => {
      if(dragItem){
        e.preventDefault();
      }
    },false);
    dropZone.addEventListener('dragleave', e => {
      if(dragItem){
        e.target.classList.remove(className);
      }
    },false);
    dropZone.addEventListener('drop', e => {
      e.target.classList.remove(className);
      if(dragItem){
        e.preventDefault();
        e.target.appendChild(dragItem);
      }
    },false);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const dragItems = document.querySelectorAll('.drag-item');
    dragItems.forEach(dragItem => {
      dragEventHandlers(dragItem);
    });
    const dropZones = document.querySelectorAll('.drop-item');
    dropZones.forEach(dropItem => {
      dropEventHandlers(dropItem);
    });

    document.querySelector('.js-add-item').addEventListener('click', () => {
      const dragItem = dragItems[0].cloneNode(true);
      dragEventHandlers(dragItem);
      dropZones[0].appendChild(dragItem);
    },false);

    document.querySelector('.js-add-drop-item').addEventListener('click', () => {
      const dropZone = dropZones[0].cloneNode(false);
      dropEventHandlers(dropZone);
      dropItems.appendChild(dropZone);
    },false);

  },false);
}
