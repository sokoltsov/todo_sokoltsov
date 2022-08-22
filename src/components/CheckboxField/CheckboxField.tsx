import React from 'react';

interface IProps {
  id: number;
  title: string;
  checked: boolean;
  onCheck: (id: number) => void;
}

const CheckboxField = ({ id, title, checked, onCheck }: IProps) => {
  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        checked={checked}
        onClick={() => onCheck(id)}
      />
      <label htmlFor={`todo${id}`}>{ title }</label>
    </div>
  );
}

export default CheckboxField;
