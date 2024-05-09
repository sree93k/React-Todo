import style from './footer.module.css'
export default function Footer({completedCount,totalCount})
{
    return(
        <div className={style.footer} >
                 <span className={style.item}>Total Count : {totalCount}</span>
                 <span className={style.item}>Completed Count : {completedCount}</span>
        </div>
    )
}