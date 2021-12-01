import React, { useState } from 'react';

const NewBoxForm = ({addBox}) => {
  const INITIAL_STATE = {
    color: '',
    width: '',
    height: ''
  }
  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="w3-padding" htmlFor="color">color</label>
          <input
            id="color"
            type="text"
            name="color"
            placeholder="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="w3-padding" htmlFor="width">width</label>
          <input
            id='width'
            type="width"
            name="width"
            placeholder="width"
            value={formData.width}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="w3-padding" htmlFor="height">height</label>
          <input
            id='height'
            type="height"
            name="height"
            placeholder="height"
            value={formData.height}
            onChange={handleChange}
          />
        </div>

        <button>create box</button>
      </form>
    </div>
  )
}

export default NewBoxForm;
