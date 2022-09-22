import img from './error-404.jpg';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <>
        <img className={styles.img} src={img} alt='Not Found' />
    </>
  )
}

export default NotFoundPage;