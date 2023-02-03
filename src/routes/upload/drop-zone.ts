export function dropzone(node: HTMLElement, onDrop: (file: File) => void) {
  function dragEnter(e: DragEvent) {
    e.stopPropagation();
    e.preventDefault();

    node.setAttribute('dragging', '')
    e.dataTransfer!.dropEffect = 'copy';
  }

  function dragLeave(e: DragEvent) {
    e.stopPropagation();
    e.preventDefault();

    node.removeAttribute('dragging')
    e.dataTransfer!.dropEffect = 'copy';
  }

  function dragOver(e: DragEvent) {
    e.stopPropagation();
    e.preventDefault();

    node.setAttribute('dragging', '')
    e.dataTransfer!.dropEffect = 'copy';
  }

  function drop(e: DragEvent) {
    e.stopPropagation();
    e.preventDefault();

    node.removeAttribute('dragging')
    var dt = e.dataTransfer!;
    for (let i = 0; i < dt.items.length; i++) {
      const item = dt.items[i]
      if (item.kind === 'file') {
        const file = item.getAsFile()
        if (file) {
          onDrop(file)
        }
      }
    }
  }

  document.addEventListener('dragenter', dragEnter, false);
  document.addEventListener('dragleave', dragLeave, false);
  document.addEventListener('dragover', dragOver, false);
  document.addEventListener('drop', drop, false);

  return {
    destroy() {
      document.removeEventListener('dragenter', dragEnter);
      document.removeEventListener('dragleave', dragLeave);
      document.removeEventListener('dragover', dragOver);
      document.removeEventListener('drop', drop);
    }
  }
}