import { useState } from "react";

function Search({cb}) {
  const [value, setValue] = useState('')

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    cb(value)
  }

  return <div>
    <div className="input-field col s12">
      <input 
        type="search"
        id="search-field"
        placeholder="search"
        onKeyDown={handleEnter}
        onChange={(e) => setValue(e.target.value)}
        value={value} 
      />
      <button
        className="btn"
        style={{
          position: 'absolute',
          top: 0,
          right: 0
        }}
        onClick={handleSubmit}
      >search</button>
    </div>
  </div>
}

export {Search}