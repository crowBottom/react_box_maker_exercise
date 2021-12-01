import React from 'react';

const Box = (props) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: props.color,
          width: props.width,
          height: props.height
        }}
      >
      </div>
    </div>
  )
}

export default Box;
