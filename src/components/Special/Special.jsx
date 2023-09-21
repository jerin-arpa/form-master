import PropTypes from 'prop-types';
import { AssetContext } from '../Grandpa/Grandpa';
import { useContext } from 'react';

const Special = ({ asset }) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special Person</h2>
            <p>Has: {asset}</p>
            <p>Also Has: {gift}</p>
        </div>
    );
};

Special.propTypes = {
    asset: PropTypes.string,
};

export default Special;