import * as React from 'react';
import cls from 'classnames';
import { connect } from '@umijs/max';
import Grid from './Grid';
import { changeStyleWithScale } from '@/utils/translate';
import './style.less';

function Editor(props: any, ref: any) {
  const { isEdit = true, canvasStyleData } = props;

  return (
    <div
      ref={ref}
      id="editor"
      className={cls('editor', { edit: isEdit })}
      style={{
        width:
          changeStyleWithScale(canvasStyleData?.width, canvasStyleData?.scale) +
          'px',
        height:
          changeStyleWithScale(
            canvasStyleData?.height,
            canvasStyleData?.scale,
          ) + 'px',
      }}
    >
      <Grid />
    </div>
  );
}

const mapStateToProps = (s: any) => ({
  componentData: s.app.componentData,
  curComponent: s.app.curComponent,
  canvasStyleData: s.app.canvasStyleData,
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(
  React.forwardRef(Editor),
);
