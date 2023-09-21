import PropTypes from 'prop-types';

const Special = ({ asset }) => {
    return (
        <div>
            <h2>Special Person</h2>
            <p>Has: {asset}</p>
        </div>
    );
};

Special.propTypes = {
    asset: PropTypes.string,
};

export default Special;