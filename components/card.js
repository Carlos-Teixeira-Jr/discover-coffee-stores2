import Link from "next/link";
import Image from "next/image";
import styles from "./card.module.css";
import cls from "classnames";

//Esses PROPS são propriedades que os elementos deverão ter e seus valores serão preenchidos no arquivo Index;
const Card = (props) => {
  return (
    <Link href={props.href} legacyBehavior>
      <a className={styles.cardLink}>
        <div className={cls("glass",styles.container)}>
          <div  className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{props.name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image 
              className={styles.cardImage} 
              src={props.imgUrl} 
              width={260} 
              height={160} />
          </div>
        </div>

        
      </a>  
    </Link>
  );
}

export default Card;