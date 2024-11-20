const Browser = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    if (iframeRef.current) {
      //iframe 撑满整个页面
      iframeRef.current.style.width = '100vw';
      iframeRef.current.style.height = '100vh';
      //iframe 无边框
      iframeRef.current.style.border = 'none';
    }
  }, []);
  return (
    <iframe ref={iframeRef} src="https://www.baidu.com">
      index
    </iframe>
  );
};

export default Browser;
