import styles from './Options.module.css';

interface OptionsProps {
  onFeedback: (feedbackType: 'good' | 'neutral' | 'bad') => void;
  totalFeedback: number;
  onReset: () => void;
}

const Options = ({ onFeedback, totalFeedback, onReset }: OptionsProps) => {
  return (
    <div className={styles.options}>
      <button 
        className={`${styles.button} ${styles.good}`}
        onClick={() => onFeedback('good')}
      >
        Good
      </button>
      <button 
        className={`${styles.button} ${styles.neutral}`}
        onClick={() => onFeedback('neutral')}
      >
        Neutral
      </button>
      <button 
        className={`${styles.button} ${styles.bad}`}
        onClick={() => onFeedback('bad')}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button 
          className={`${styles.button} ${styles.reset}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
