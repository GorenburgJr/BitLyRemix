import { useFetcher } from '@remix-run/react';

export default function UrlItemList({ id, fromUrl, shortUrl, date }) {

  const fetcher = useFetcher();
  function deleteUrlItemHandler() {
    fetcher.submit(null, { method: 'delete', action: `/profile/links/${id}` });
  }

  if (fetcher.state !== 'idle') {
    return (
      <article className="url-item locked">
        <p>Deleting...</p>
      </article>
    );
  }

  return (
    <article className="url-item">
      <div>
        <h2 className="url-tourl">{shortUrl}</h2>
        <p className='url-fromurl'>{new Date(date).toDateString().slice(4)}</p>
      </div>
      <menu className="url-actions">
        <button onClick={deleteUrlItemHandler}>Delete</button>
      </menu>
    </article>
  );
}