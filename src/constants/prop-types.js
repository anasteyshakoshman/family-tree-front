import PropTypes from 'prop-types';

export const CardHumanType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    patronymic: PropTypes.string,
    surname: PropTypes.string,
    birthDate: PropTypes.string,
    birthCity: PropTypes.string,
    partnerId: PropTypes.number,
    childrenList: PropTypes.arrayOf(PropTypes.number)
});
