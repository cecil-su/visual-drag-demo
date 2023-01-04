import * as React from 'react';
import list from '@/custom-components/component-list';
import './style.less';

function ComponentList() {
  const handleDragStart = React.useCallback((e: any) => {
    e.dataTransfer.setData('index', e.target.dataset.index);
  }, []);

  return (
    <div className="component-list" onDragStart={handleDragStart}>
      {(list || []).map((d: any, index: number) => (
        <div key={index} className={'list'} draggable data-index={index}>
          {d.label}
        </div>
      ))}
    </div>
  );
}

export default ComponentList;
