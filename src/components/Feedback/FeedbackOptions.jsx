import PropTypes from 'prop-types';
import css from '../Feedback/Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={css.card__button}> 
        {Object.keys(options).map(option => (
        <button
            className={css.button}
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
        >
            {option}
        </button>
    ))}
    </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
