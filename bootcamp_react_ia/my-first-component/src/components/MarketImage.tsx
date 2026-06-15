interface ImgOptions {
  source: string;
  alternative: string;
  width: number;
  style?: React.CSSProperties;
}

export function MarketImage() {
  const imageOptions: ImgOptions = {
    source: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alternative: "Market",
    width: 300,
    style: { border: '2px solid #ccc' }
  };

  const { source, alternative, width, style } = imageOptions;

  return (
    <img
    src={source}
    alt={alternative}
    width={`${width}px`}
    style={style}
    />
  )
}
