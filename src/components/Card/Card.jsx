import styles from './Card.module.css';
import { Chip } from '@mui/material';
import cardImage from '../../assets/Frame 3743.png'; // Adjust the path as necessary


function Card(){
    return(
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.imgContainer}>
                    <img src={cardImage} alt="Card Image" className={styles.cardImage}/>
                </div>
                <Chip 
                    label="100 Follows"
                    sx={{backgroundColor: 'black', color: 'white'}}
                    size="small"
                    component="div"
                />
            </div>
            <div className={styles.cardText}>
                <p>New English Songs</p>
            </div>
        </div> 
    );
}

export default Card;