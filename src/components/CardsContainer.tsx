import style from "./CardsContainer.module.css"
interface CardsContainerInterface{
    children: React.ReactNode
}
const CardsContainer = ({children}:CardsContainerInterface) => {
  return (
    <div className={style.CardsContainer}>
        {children}
    </div>
  )
}

export default CardsContainer