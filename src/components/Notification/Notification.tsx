import styles from './Notification.module.css';

interface NotificationProps {
  message: string;
}

const Notification = ({ message }: NotificationProps) => {
  return (
    <div className={styles.notification}>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Notification;
