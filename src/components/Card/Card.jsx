import styles from './Card.module.css';
import { Chip } from '@mui/material';


function Card({cardImage, follows, title}){
    return(
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.imgContainer}>
                    <img src={cardImage} alt="Card Image" className={styles.cardImage}/>
                </div>
                <div className={styles.chip}>
                    <Chip 
                        label={`${follows} Follows`}
                        sx={{backgroundColor: 'black', color: 'white'}}
                        size="small"
                        component="div"
                    />
                </div>
            </div>
            <div className={styles.cardText}>
                <p>{title}</p>
            </div>
        </div> 
    );
}

export default Card;