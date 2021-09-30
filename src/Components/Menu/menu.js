import p from './menu.module.css';
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return (
        <div className={p.menu}>
            <div className={p.container}>
                <div>
                    <div className={p.item}><NavLink to={'/profile'}
                                                     activeClassName={p.active}>Profile</NavLink>
                    </div>
                    <div className={p.item}><NavLink to={'/messages'}
                                                     activeClassName={p.active}>Messages</NavLink></div>
                    <div className={p.item}><NavLink to={'/Components/News/news'}
                                                     activeClassName={p.active}>News</NavLink>
                    </div>
                    <div className={p.item}><NavLink to={'/Components/Music/music'}
                                                     activeClassName={p.active}>Music</NavLink>
                    </div>
                    <div className={p.item}><NavLink to={'/users'}
                                                     activeClassName={p.active}>Users</NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Menu;