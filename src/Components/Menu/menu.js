import p from './menu.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./sidebarFriends";

const Menu = (props) => {



    //let imgElements = props.img.map(i => <Friends img={i.img}/>)

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
               {/* <div>
                    <div className={p.someFriends}>FRIENDS
                        <div className={p.hr}></div>
                        <div className={p.FriendStand}>
                            {imgElements}
                        </div>
                    </div>
                </div>*/}

            </div>
        </div>

    )
}

export default Menu;