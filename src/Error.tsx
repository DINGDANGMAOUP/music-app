import { useRouteError, useNavigate } from 'react-router-dom';

interface RouterError {
  message: string;
}

const Error = () => {
  const error = useRouteError() as RouterError;
  console.error(error);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message}</p>
      <Button variant="ghost" onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
};
export default Error;
