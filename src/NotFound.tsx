import notFound from '@/assets/not-found.svg';
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <Button
        variant="ghost"
        size="icon"
        className="no-drag-region absolute left-4 top-10 rounded-md"
        onClick={() => navigate(-1)}
      >
        <Icon name="undo-2" />
      </Button>
      <img alt="result" src={notFound} width={300} height={300} />
    </div>
  );
}
