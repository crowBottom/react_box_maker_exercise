import React, { useState } from 'react';
import {v4 as uuid} from "uuid";
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
  const INITIAL_STATE = [
    {id: uuid(), color: "black", width: '50px', height: '50px'},
  ]
  const [boxes, setBox] = useState(INITIAL_STATE)
  const addBox = (newBox) => {
    setBox(boxes => [...boxes, {...newBox, id: uuid()}])
  }
  const handleRemove = (id) => {
   const newList = boxes.filter((item) => item.id !== id);
   setBox(newList)
  }

  return (
    <div>
      <h3>Boxes</h3>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({id, color, width, height}) =>
          <div>
            <Box id={id} color={color} width={width} height={height} />
            <span className="w3-btn w3-ripple" onClick={() => handleRemove(id)}>del</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default BoxList;
