import React from 'react';
import { useAccordianContext } from './Accordian';

export default function AccordianItem({ id, title, children }) {
  const { openItem, openItemId, closeItem } = useAccordianContext();

  const isOpen = openItemId === id;

  function handleClick() {
    if (isOpen) {
      closeItem();
    } else {
      openItem(id);
    }
  }

  return (
    <li>
      <h2 onClick={handleClick}>{title}</h2>
      {isOpen && <div>{children}</div>}
    </li>
  );
}
