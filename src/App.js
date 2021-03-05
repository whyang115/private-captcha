import React, { useEffect, useState } from 'react';
import './App.css';
import { Input, Button } from 'antd';
import { get } from 'lodash';

const getStr = () => {
  return Math.random().toString(16).slice(2);
};

function App() {
  const [value, setValue] = useState('');
  const [randstr, setStr] = useState('');
  const [url, setUrl] = useState('');

  window.getPara = url => {
    setUrl(url);
  };

  const onOk = () => {
    const data = { ticket: value, randstr };
    if (get(window, ['webkit', 'messageHandlers', 'Save', 'postMessage'])) {
      window.webkit.messageHandlers.Save.postMessage(data);
    } else {
      window.Android.Save(JSON.stringify(data));
    }
  };
  const onClose = () => {
    if (get(window, ['webkit', 'messageHandlers', 'Save', 'postMessage'])) {
      window.webkit.messageHandlers.Save.postMessage('');
    } else {
      window.Android.Save('');
    }
  };

  const refresh = () => {
    setStr(getStr());
  };

  useEffect(() => {
    refresh();
  }, [url]);

  return (
    <div className="App">
      <div className="title">{'请输入验证码'}</div>
      <Input value={value} onChange={e => setValue(e.target.value)} />
      <div className="imgWrap" onClick={refresh}>
        <img alt="captcha" src={`${url}?randStr=${randstr}&width=500&height=100&fontSize=50`}></img>
      </div>
      <div className="text" onClick={refresh}>
        看不清，换一张
      </div>
      <div className="btns">
        <Button onClick={onClose}>取消</Button>
        <Button type="primary" disabled={!value} onClick={onOk}>
          确认
        </Button>
      </div>
    </div>
  );
}

export default App;
