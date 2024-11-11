import { countAtom } from '@/atoms/count-atom';

const ListenNow = () => {
  const [count, setCount] = useAtom(countAtom);
  const { t, i18n } = useTranslation();
  return (
    <div>
      count: {count}
      <Button
        onClick={() => {
          setCount((prev) => prev + 1);
          console.log('count', count);
        }}
      >
        add
      </Button>
      <Button
        onClick={() => {
          setCount((prev) => prev - 1);
          console.log('count', count);
        }}
      >
        del
      </Button>
      {t('theme.system')}
      <Button
        onClick={() => {
          i18n.changeLanguage('en');
        }}
      >
        en
      </Button>
      <Button
        onClick={() => {
          i18n.changeLanguage('zh');
        }}
      >
        zh
      </Button>
    </div>
  );
};

export default ListenNow;
