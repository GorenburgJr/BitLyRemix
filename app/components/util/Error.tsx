import { FaExclamationCircle } from 'react-icons/fa';

function Error({ title, children }: {children: React.ReactNode, title: string}) {
  return (
    <div className="error">
      <div className="icon">
        <FaExclamationCircle />
      </div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Error;
