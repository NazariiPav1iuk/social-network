import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return(
        <div>
            <div className={s.banner}>
                <img src='https://thumbs.dreamstime.com/b/conceptual-wood-deck-over-sea-sky-banner-concept-blue-background-51413369.jpg' />
            </div>

            <div className={s.descriptionBlok}>
                <img className={s.avatar} src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' />
                <div className={s.description}>
                    
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;