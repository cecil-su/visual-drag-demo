import { Button } from 'antd';
import './style.less';

function Toolbar() {
  return (
    <div>
      <div className="toolbar">
        <Button>JSON</Button>
        <Button>撤消</Button>
        <Button>重做</Button>
        <label htmlFor="input" className="insert">
          插入图片
          <input id="input" type="file" hidden />
        </label>
        <Button>预览</Button>
        <Button>保存</Button>
        <Button>清空画布</Button>
      </div>
    </div>
  );
}

export default Toolbar;
