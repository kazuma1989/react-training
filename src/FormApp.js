import React from 'react';

export function FormApp(props) {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.onChange} />
      <button onClick={props.onClick.bind(null, props.value)}>Send</button>
      <div>
        {props.data}
      </div>
    </div>
  );
}
