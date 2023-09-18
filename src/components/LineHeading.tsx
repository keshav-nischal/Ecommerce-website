import style from "./LineHeading.module.css"
interface lineHeadingProps{
  children: React.ReactNode;
}
const LineHeading = ({children}:lineHeadingProps) => {
  return (
    <div className={style.LineHeading}>
        <div className={style.line}>
            <hr></hr>
        </div>
        <div className={style.headingContainer}>
            <h2>{children}</h2>
        </div>  
        <div className={style.line}>
            <hr></hr>
        </div>
    </div>
  )
}

export default LineHeading