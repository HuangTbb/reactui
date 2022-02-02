import ReactDOM from 'react-dom';
import React from 'react';
import Icon from './icon';
const fn: React.MouseEventHandler = (e)=>{
    console.log(e.target)
}
ReactDOM.render(<div>  
    <Icon name="wechat"/>
    <Icon name="alipay"/>
    <Icon className="aaaa" name="qq" onClick={fn} onMouseEnter={()=>console.log('enter')}/>
    </div>, document.querySelector('#root'))