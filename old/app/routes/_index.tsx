import { useState } from 'react';
import type { LinksFunction } from '@remix-run/node';
import styles from '../styles/home.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function Index() {
  const [value, 
    // setValue
  ] = useState('https://example.com');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // alert('Ошибка при копировании');
    }
  };

  return (
    <div className="center-wrapper">
      <div className="oval-box">
        <input
          type="text"
          value={value}
          // onChange={(e) => setValue(e.target.value)}
          className="copy-input"
        />
        <button onClick={handleCopy} className='cta'>Скопировать</button>
        {copied && <div className="copied-popup">Ссылка скопирована!</div>}
      </div>
    </div>
  );
}
