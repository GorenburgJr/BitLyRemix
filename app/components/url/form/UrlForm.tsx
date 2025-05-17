export default function UrlForm () {
    return (
        <form className="oval-form" method="post">
            <input type="url" id='url' name='url' placeholder="Ссылку тут <3" />
            <button type="submit">Создать</button>
        </form>
    )
}