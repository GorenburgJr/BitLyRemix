import { Link, useFetcher } from '@remix-run/react';

export default function UrlItemList({ id, fromUrl, shortUrl, date, clickCount }) {

  const fetcher = useFetcher();
  const deleteUrlItemHandler = () => {
    fetcher.submit(null, { method: 'delete', action: `/profile/links/${id}` });
  }

  return (
      <Link to={`/profile/links/${id}`}>
        <div>
          <h2 className="url-tourl">{shortUrl}</h2>
          <p className='url-fromurl'>{new Date(date).toDateString().slice(4)}</p>
        </div>
        <div>
          <p>Count of Clicks: {clickCount}</p>
        </div>
        <menu className="url-actions">
          <button onClick={deleteUrlItemHandler} className='oval-form'>Delete</button>
        </menu>
      </Link>
  );
}