export function MarketImage() {
  const source: string = "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const alternative: string = "Market"
  const width: number = 400


  return (
    <img
    src={source}
    alt={alternative}
    width={`${width}px`}
    />
  )
}
