import * as React from 'react';
import { Tabs } from 'antd';
import { connect } from '@umijs/max';
import {
  AnimationList,
  CanvasAttr,
  ComponentList,
  Editor,
  EventList,
  RealTimeComponentList,
  Toolbar,
} from '@/components';
import { deepCopy, generateID } from '@/utils/utils';
import componentList from '@/custom-components/component-list';
import './style.less';

function Home(props: any) {
  const { curComponent, dispatch } = props;

  const editor = React.useRef<any>();

  const handleDrop = React.useCallback(
    (e: any) => {
      e.preventDefault();
      e.stopPropagation();

      const index = e.dataTransfer.getData('index');
      // const rectInfo =
      console.log(index, editor.current);
      if (index) {
        const rectInfo = editor.current?.getBoundingClientRect?.();
        const component = deepCopy(componentList[index]);
        component.style.top = e.clientY - rectInfo?.y;
        component.style.left = e.clientX - rectInfo?.x;
        component.id = generateID();

        dispatch({
          type: '',
        });
      }
    },
    [editor.current],
  );

  const handleDragOver = React.useCallback((e: any) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }, []);

  const handleMouseDown = React.useCallback((e: any) => {
    e.stopPropagation();
    dispatch({
      type: 'app/state',
      payload: {
        isInEditor: true,
        isClickComponent: false,
      },
    });
  }, []);

  const handleMouseUp = React.useCallback(() => {}, []);

  return (
    <div className="home">
      <Toolbar />

      <main>
        <section className="left">
          <ComponentList />
          <RealTimeComponentList />
        </section>
        <section className="center">
          <div
            className="content"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <Editor ref={editor} />
          </div>
        </section>
        <section className="right">
          {curComponent ? (
            <Tabs
              items={[
                { key: '0', label: '属性', children: null },
                { key: '1', label: '动画', children: <AnimationList /> },
                { key: '2', label: '事件', children: <EventList /> },
              ]}
            />
          ) : (
            <CanvasAttr />
          )}
        </section>
      </main>
    </div>
  );
}

const mapStateToProps = (s: any) => ({
  curComponent: s.app.curComponent,
});

export default connect(mapStateToProps)(Home);
