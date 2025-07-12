import styles from './Section.module.css';
import Card from '../Card/Card';
import React, { useState, useEffect } from 'react';

function Section({ title, API }) {

    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

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
                    <p className={styles.btn}>Collapse</p>
                </div>
                <div className={styles.sectionContent}>
                    <div className={styles.grid}>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            albums.map(album => (
                                <Card 
                                    key={album.id} 
                                    cardImage={album.image}
                                    follows={album.follows}
                                    title={album.title}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;