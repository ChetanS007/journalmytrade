import React, { useState } from "react";

const EdtiableArea = ({ value, onChange }) => {
  const [editable, setEditable] = useState(false);

  if (editable) {
    return (
      <textarea
        autoFocus
        defaultValue={value}
        onChange={event => onChange(event.target.value)}
        onBlur={() => setEditable(false)}
      />
    );
  } else {
    return <span onClick={() => setEditable(true)}>{value}</span>;
  }
};

export default EdtiableArea;
