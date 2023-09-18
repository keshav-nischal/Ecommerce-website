import Button from "./Button"
import style from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={style.Footer}>
        <div className={style.headingLineContainer}>
            <div className={style.headingContainer}>
                <h1>Life Etc.</h1>
            </div>
            <div className={style.lineContainer}>
                <hr />
            </div>
        </div>
        <div className={style.links_NewsletterForm_Info_Container}>
            <div className={style.linksContainer}>
                <a href='#blank' className={style.links}>shop</a>
                <a href='#blank' className={style.links}>about</a>
                <a href='#blank' className={style.links}>journal</a>
                <a href='#blank' className={style.links}>contact</a>
            </div>
            <div className={style.linksContainer}>
                <a href='#blank' className={style.links}>FAQ</a>
                <a href='#blank' className={style.links}>Shipping & Returns</a>
                <a href='#blank' className={style.links}>Store Policy</a>
                <a href='#blank' className={style.links}>Payment</a>
            </div>
            <div className={style.infoContainer}>
                {/* create option to email */}
                <a href="#blank">info@my-domain.com</a>
                <p>address address address, address address</p>
                <span>Tel: </span><a href="#blank">8725043810</a>
            </div>
            <div className={style.formContainer}>
                <form>
                    <label>sign up, stay stylish</label>
                    <br></br>
                    <input placeholder="Enter your email here*"></input>
                    <br></br>
                    <Button>Subscribe</Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Footer