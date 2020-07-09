{
  // ドラッグ中のアイテムを保持しておく変数
  // event.dataTransfer.setData()でIDをセットしておくサンプルばかりですが、
  // 動的に追加する要素に一意のIDを振るのは大変なのでドラッグするエレメント(event.target)をdragItemに入れるという
  // やり方でやってみましょう
  let dragItem = null;
  const dropItems = document.getElementById('drop-items');

  const dragEventHandlers = function (item) {
    item.addEventListener('dragstart', function (e) {
      dragItem = e.target;
    },false);
    item.addEventListener('dragend', function () {
      dragItem = null;
    },false);
  };

  const dropEventHandlers = function (dropZone) {
    const className = 'drag-enter';
    dropZone.addEventListener('dragenter', function (e) {
      if(dragItem){
        e.target.classList.add(className);
      }
    },false);
    dropZone.addEventListener('dragover', function (e) {
      if(dragItem){
        e.preventDefault();
      }
    },false);
    dropZone.addEventListener('dragleave', function (e) {
      if(dragItem){
        e.target.classList.remove(className);
      }
    },false);
    dropZone.addEventListener('drop', function (e) {
      e.target.classList.remove(className);
      if(dragItem){
        e.preventDefault();
        e.target.appendChild(dragItem);
      }
    },false);
  };

  document.addEventListener('DOMContentLoaded', function () {
    const dragItems = document.querySelectorAll('.drag-item');
    for(let i = 0; i < dragItems.length; i++){
      dragEventHandlers(dragItems[i]);
      console.log(dragItems[i])
    }
    // dragItems.forEach(dragItem => {
    //   dragEventHandlers(dragItem);
    // });
    const dropZones = document.querySelectorAll('.drop-item');
    for(let i = 0; i < dropZones.length; i++){
      dropEventHandlers(dropZones[i]);
      console.log(dropZones[i])
    }
    // dropZones.forEach(dropItem => {
    //   dropEventHandlers(dropItem);
    // });

    document.querySelector('.js-add-item').addEventListener('click', function () {
      const dragItem = dragItems[0].cloneNode(true);
      dragEventHandlers(dragItem);
      dropZones[0].appendChild(dragItem);
    },false);

    document.querySelector('.js-add-drop-item').addEventListener('click', function () {
      const dropZone = dropZones[0].cloneNode(false);
      dropEventHandlers(dropZone);
      dropItems.appendChild(dropZone);
    },false);

  },false);
}
