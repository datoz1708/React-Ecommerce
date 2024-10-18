import React, { useEffect, useRef } from 'react';

const AutoFocusAndClick = () => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }, []);

  const handleClick = () => {
    alert("OK");
  };

  return (
    <div>
      <input ref={inputRef} />
      <br />
      <button ref={buttonRef} onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default AutoFocusAndClick;
