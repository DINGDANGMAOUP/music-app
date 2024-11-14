import { useRouteError, useNavigate } from 'react-router-dom';
import errorSvg from '@/assets/error.svg';
interface RouterError {
  message: string;
}

const Error = () => {
  const error = useRouteError() as RouterError;
  console.error(error);
  const navigate = useNavigate();
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <img alt="error" src={errorSvg} width={300} height={300} />
      <h2 className="font-sans text-xl">Oops! Something went wrong.</h2>
      <p className="line-clamp-3">{error.message}</p>
      <Button variant="ghost" onClick={() => navigate('/')}>
        Go back
      </Button>
    </div>
  );
};
export default Error;
