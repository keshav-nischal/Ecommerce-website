import style from "./SocialContainer.module.css"
import {MdEmail, MdFacebook} from "react-icons/md"
import {BsInstagram} from "react-icons/bs"
import {AiFillFacebook} from "react-icons/ai"
const SocialsContainer = () => {
  return (
    <div className={style.SocialContainer}>
        <span> <BsInstagram /></span>
        <span><AiFillFacebook /></span>
        <span> <MdEmail/> </span>
    </div>
  )
}

export default SocialsContainer