import styles from './Section.module.css';
import Card from '../Card/Card';
import React, { useState, useEffect } from 'react';
import Toggle from '../Toggle/Toggle';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Carousel from '../Carousel/Carousel';

function Section({ title, API }) {

    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isToggled, setIsToggled] = useState(true);

    const handleToggle = () => {
        setIsToggled(prevState => !prevState);
    };

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                setAlbums(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.sectionTitle}>{title}</p>
                    <Toggle
                        onToggle={handleToggle}
                        label={isToggled ? "Show All" : "Collapse"}
                    />
                </div>
                <div className={styles.sectionContent}>
                    <div className={styles.grid}>
                        {loading ? (
                            <Box display="flex" justifyContent="center" alignItems="center" sx={{margin:"auto"}} py={10}>
                                <CircularProgress size={30}/>
                                <h4>Loading...</h4>
                            </Box>
                        ) : (
                            isToggled ? (
                                <Carousel 
                                    items={albums} 
                                    onItemClick={() => {}} 
                                />
                            ) : (
                                albums.map(album => (
                                    <Card 
                                        key={album.id} 
                                        cardImage={album.image}
                                        follows={album.follows}
                                        title={album.title}
                                    />
                                ))
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;