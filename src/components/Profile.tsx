import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/pauloprevilato.png"
            alt="Paulo Previlato" />
             <div>
                <strong>Paulo Previlato</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                    </p>
            </div>
        </div>
    );
}