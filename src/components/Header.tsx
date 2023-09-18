import style from "./Header.module.css"
// import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import {MdAccountCircle} from "react-icons/md";
import {BsBagFill} from "react-icons/bs"
import Button from "./Button";

const Header = () => {
  return (
    <header className={style.Header}>
        <div className={style.headerRow1}>
            <div className={style.searchBar}>
                {/* change searchbar */}
                {/* <input placeholder='SEARCH'></input> */}
            </div>
            <div className={style.accountIconloginBagContainer}>
                <span className={style.accountIcon}><MdAccountCircle /></span>
                <Button>Log in</Button>
                <span className={style.bagIcon}><BsBagFill /></span>
            </div>
        </div>
        <div className={style.headerRow2}>
            <h1>Life Etc.</h1>
        </div>
        <div className={style.headerRow3}>
            <a href='#blank' className={style.links}>Shop</a>
            <a href='#blank' className={style.links}>About</a>
            <a href='#blank' className={style.links}>Journal</a>
            <a href='#blank' className={style.links}>Contact</a>
        </div>
    </header>
  )
}

export default Header