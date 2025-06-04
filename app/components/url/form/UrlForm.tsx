import { useFetcher } from "@remix-run/react";

export default function UrlForm() {
  const fetcher = useFetcher();

  return (
    <>
      <fetcher.Form className="oval-form" method="post">
        <input
          type="url"
          id="url"
          name="url"
          placeholder="Ссылку тут <3"
          required
        />
        <button type="submit">Create</button>
      </fetcher.Form>
    </>
  );
}
