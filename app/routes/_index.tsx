import { useState } from 'react';
import type { LinksFunction } from '@remix-run/node';
import styles from '../styles/home.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function Index() {
  const [value, setValue] = useState('https://example.com');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof window !== 'undefined' && navigator?.clipboard) {
      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Ошибка при копировании', err);
      }
    }
  };
  

  return (
    <div className="center-wrapper">
      <div className="oval-box">
        <input
          type="text"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
          className="copy-input"
        />
        <button 
        onClick={handleCopy} 
        className="cta">Скопировать</button>
        {copied && <div className="copied-popup">Ссылка скопирована!</div>}
      </div>
    </div>
  );
}
