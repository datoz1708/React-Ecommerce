import React, { useEffect, useRef } from 'react';

const AutoFocusAndClick = () => {
  const inputRef = useRef(null); // ფოკუსისთვის
  const buttonRef = useRef(null); // ღილაკზე ავტომატური დაჭერისთვის

  useEffect(() => {
    // ავტომატური ფოკუსი input-ზე
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // ავტომატური ღილაკზე დაჭერა გვერდის ჩატვირთვისას
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }, []); // ერთხელ შესრულება გვერდის ჩატვირთვისას

  const handleClick = () => {
    alert("Button was clicked automatically!");
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Focus will be here automatically" />
      <br />
      <button ref={buttonRef} onClick={handleClick}>
        Click Me (automatically clicked)
      </button>
    </div>
  );
};

export default AutoFocusAndClick;
