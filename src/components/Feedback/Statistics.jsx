import PropTypes from 'prop-types';
import css from '../Feedback/Feedback.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div className={css.statistics}>    
        <h3 className={css.feedback__title}>Statistics</h3>
        <p className={css.statistics__text}>Good: {good}</p>
        <p className={css.statistics__text}>Neutral: {neutral}</p>
        <p className={css.statistics__text}>Bad: {bad}</p>
        <p className={css.statistics__text}>Total: {total}</p>
        <p className={css.statistics__text}>Positive feedback: {positivePercentage}%</p>
    </div>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

