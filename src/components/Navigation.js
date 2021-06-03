import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';

function Navigation({isAuthCustomer, toggleAuthCustomer, isAuthUser, toggleAuthUser, isAuthAdmin, toggleAuthAdmin}) {
    const history = useHistory();

    function signOut() {
        toggleAuthCustomer(false);
        toggleAuthUser(false);
        toggleAuthAdmin(false);

        history.push('/')
    }


    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                {/*Is de gebruiker ingelogd? Laat dan de blogposts en uitlog knop zien, en anders alleen de login knop */}


                {((isAuthCustomer === false) && (isAuthUser === false) && (isAuthAdmin === false)) &&
                <li>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </li>}

                {(isAuthCustomer === true) && (isAuthUser === false) && (isAuthAdmin === false) &&
                <>
                    <li>
                        <NavLink to="/customer1">
                            customer1
                        </NavLink>
                    </li>





                </>
                }


                {((isAuthCustomer === false) && (isAuthUser === true) && (isAuthAdmin === false)) &&
                <>
                    <li>
                        <NavLink to="/blogposts">
                            Blogposts
                        </NavLink>
                    </li>


                </>
                }

                {((isAuthCustomer === false) && (isAuthUser === false) && (isAuthAdmin === true)) &&
                <>
                    <li>
                        <NavLink to="/admin1">
                            admin1
                        </NavLink>
                    </li>

                </>
                }

                {((isAuthCustomer === true) || (isAuthUser === true) || (isAuthAdmin === true)) &&
                <>

                    <li>
                        <button type="button" onClick={signOut}>
                            Uitloggen
                        </button>
                    </li>
                </>
                }


            </ul>
        </nav>
    );
}

export default Navigation;