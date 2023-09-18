import img1 from '../assets/cardImg1.webp';
import Button from './Button';
import style from "./BuyCard.module.css"
const BuyCard = () => {
  return (
    <div className={style.Card}>
        <img src={img1} className={style.cardImg}></img>
        <span>Tote Bag</span>
        <span>$20.00</span>
        <Button>Add to cart</Button>
    </div>
  )
}

export default BuyCard