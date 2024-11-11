import { useRouteError, useNavigate } from 'react-router-dom';

interface RouterError {
  message: string;
}

const Error = () => {
  const error = useRouteError() as RouterError;
  console.error(error);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};
export default Error;
