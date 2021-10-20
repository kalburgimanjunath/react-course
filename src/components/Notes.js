import React from 'react';
export default function Notes() {
  return (
    <div>
      <button>Add Notes</button>
      <form>
        <textarea rows="4" cols="40" />
        <button>Save</button>
        <button>Cancel</button>
      </form>
    </div>
  );
}
