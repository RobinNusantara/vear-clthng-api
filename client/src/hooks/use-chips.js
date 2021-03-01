import {useState} from 'react';

function useChips (initialValue) {
  const [chips, setChips] = useState(initialValue);
  
  const inputChip = (event) => {
    let value = event.target.value;
    if (event.key === 'Enter' && value) {
      setChips([...chips, value]);
      event.preventDefault();
    }
  }
  
  const removeChip = (idx) => {
    const newChips = [...chips];
    newChips.splice(idx, 1);
    setChips(newChips);
  }
  
  return [chips, inputChip, removeChip];
}

export default useChips;
