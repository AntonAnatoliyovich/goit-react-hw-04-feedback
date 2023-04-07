import PropTypes from 'prop-types';
import css from '../Feedback/Feedback.module.css';

export const Notification = ({message}) => (
    <p className={css.statistics__text}>
        {message}
    </p>
)

Notification.propTypes = {
    message: PropTypes.string.isRequired
}
