import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldCat } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <>
            <h1>
                Felino 
                <FontAwesomeIcon icon={faShieldCat} />
                Warriors
            </h1>
        </>
    )
    }

export default Header