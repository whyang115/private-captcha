import React, { useEffect, useState } from 'react';
import './App.css';
import { Input, Spin, Button } from 'antd';
import { get } from 'lodash';
import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://www.mingdao.com/api/',
// });

const getStr = () => {
  return Math.random().toString(16).slice(2);
};
function App() {
  const [data, setData] = useState();
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [randstr, setStr] = useState('');

  const onOk = () => {
    window.sendContent = () => {
      const data = { ticket: value, randstr };
      if (get(window, ['webkit', 'messageHandlers', 'Save', 'postMessage'])) {
        window.webkit.messageHandlers.Save.postMessage(data);
      } else {
        window.Android.Save(data);
      }
    };
  };
  const onClose = () => {
    window.sendContent = () => {
      if (get(window, ['webkit', 'messageHandlers', 'Save', 'postMessage'])) {
        window.webkit.messageHandlers.Save.postMessage();
      } else {
        window.Android.Save();
      }
    };
  };
  function getCaptcha() {
    const randstr = getStr();
    setStr(randstr);
    if (loading) return;
    setLoading(true);
    axios
      .get('http://api.dev.mingdao.net/oauth2/genImageCaptcha', { params: { randstr }, responseType: 'arraybuffer' })
      .then(res => {
        const buffer = res.data;
        const blob = new Blob([buffer], { type: 'image/gif' });
        const file = new FileReader();
        file.onload = e => {
          const base64 = e.target.result;
          setData(base64);
        };
        file.readAsDataURL(blob);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    getCaptcha();
  }, []);
  return (
    <div className="App">
      <div className="title">{'请输入验证码'}</div>
      <Input value={value} onChange={e => setValue(e.target.value)} />
      <div className="imgWrap" onClick={getCaptcha} style={{ backgroundImage: `url(${data})` }}>
        {loading && <Spin size="large" />}
      </div>
      <div className="text" onClick={getCaptcha}>
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
