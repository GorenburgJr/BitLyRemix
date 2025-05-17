import ExpenseListItem from './UrlItemList';

function UrlList({ urls }) {

  return (
    <ol id="expenses-list">
      {urls.map((url) => (
        <li key={url.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  );
}

export default UrlList;