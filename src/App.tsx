import { useState, useEffect } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import './App.css';

interface FeedbackState {
  good: number;
  neutral: number;
  bad: number;
}

const STORAGE_KEY = 'feedback-stats';

function App() {
  // Инициализация состояния из localStorage или значениями по умолчанию
  const [feedback, setFeedback] = useState<FeedbackState>(() => {
    const savedFeedback = localStorage.getItem(STORAGE_KEY);
    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  // Сохранение в localStorage при изменении состояния
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  // Обработчик обновления отзывов
  const updateFeedback = (feedbackType: keyof FeedbackState) => {
    setFeedback(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1
    }));
  };

  // Обработчик сброса
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  // Вычисляемые значения
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback > 0 
    ? Math.round((feedback.good / totalFeedback) * 100) 
    : 0;

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">Sip Happens Café</h1>
          <p className="description">
            Please leave your feedback about our service by selecting one of the options below.
          </p>
        </header>

        <main className="main">
          <Options 
            onFeedback={updateFeedback}
            totalFeedback={totalFeedback}
            onReset={resetFeedback}
          />

          {totalFeedback > 0 ? (
            <Feedback
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              totalFeedback={totalFeedback}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification message="No feedback given yet" />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
