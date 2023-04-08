import React, { useState } from 'react';
import { Statistics } from './Feedback/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Notification } from './Feedback/Notification';
import { Section } from './Feedback/Section';
import css from './Feedback/Feedback.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const handleLeaveFeedback = event => {
    const {name} = event.target;
    if(name === 'good') {
      setGood(good + 1)
    } else if(name === 'neutral') {
      setNeutral(neutral + 1)
    } else {
      setBad(bad + 1)
    }
  };

  return (
    <>
    <div className={css.feedback__card}>
    <Section title="Please leave feedback">
        <FeedbackOptions
          options={ {good, neutral, bad} }
          onLeaveFeedback={handleLeaveFeedback}
          />
          { countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback"></Notification>) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
          />)}
      </Section>
    </div>
    </>  
  );
}

export default App
