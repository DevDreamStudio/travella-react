
import styles from './ArticleItem.module.scss';

interface ArticleItemProps {

}

const ArticleItem: React.FC<ArticleItemProps> = () => {
    return (
        <article className={styles.item}>
            <div className={styles.content}>

            </div>
        </article>
    );
}

export default ArticleItem;