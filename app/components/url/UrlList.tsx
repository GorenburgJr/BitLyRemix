import UrlItemList from './UrlItemList';

function UrlList({ urls }): {urls: {}[]} {
  return (
    <ol id="url-list">
      {urls.map((url) => (
        <li key={url.id}>
          <UrlItemList
            id={url.id}
            fromUrl={url.fromUrl}
            shortUrl={url.shortUrl}
            date={url.date}
            clickCount={url.clicks}
          />
        </li>
      ))}
    </ol>
  );
}

export default UrlList;