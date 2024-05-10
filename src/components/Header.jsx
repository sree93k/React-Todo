import style from './header.module.css'
import image1 from '../../image.png'
import image2 from '../../panda.jpg'
export default function Header()
{
    return(

        <div className={style.header}>
            <div >
            <img className={style.image1} src={image1} alt="new image" /></div>
            {/* <div className={style.header}>To-Do List</div> */}
        </div>
        
    )
}