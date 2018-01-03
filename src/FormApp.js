import React from 'react';

export function FormApp(props) {
  const { value, data } = props;
  const onChange = e => props.onChange(e.target.value);
  const onClick = e => props.onClick(value);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onClick}>SEND</button>
      <div>
        {data}
      </div>
    </div>
  );
}
