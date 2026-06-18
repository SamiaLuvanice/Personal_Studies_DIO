import { PropsWithChildren } from "react"

interface Props {
  id?: string
  onClick?: () => void
}

export function Recipe({ children, id, onClick }: PropsWithChildren<Props>) {
  function handleClick() {
    if (onClick) {
      onClick()
    } else {
      alert("Veja a receita completa!")
    }
  }
  return (
    <>
      <div className="card">
        {children}
        <button onClick={onClick || handleClick} className="button">Ver Receita</button>
      </div>
    </>
  )
}