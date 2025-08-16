import styles from './Feedback.module.css';

interface FeedbackProps {
  good: number;
  neutral: number;
  bad: number;
  totalFeedback: number;
  positiveFeedback: number;
}

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }: FeedbackProps) => {
  return (
    <div className={styles.feedback}>
      <h3 className={styles.title}>Statistics</h3>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.label}>Good:</span>
          <span className={`${styles.value} ${styles.good}`}>{good}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.label}>Neutral:</span>
          <span className={`${styles.value} ${styles.neutral}`}>{neutral}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.label}>Bad:</span>
          <span className={`${styles.value} ${styles.bad}`}>{bad}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.label}>Total:</span>
          <span className={styles.value}>{totalFeedback}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.label}>Positive feedback:</span>
          <span className={`${styles.value} ${styles.positive}`}>{positiveFeedback}%</span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
