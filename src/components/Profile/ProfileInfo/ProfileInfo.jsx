import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return(
        <div>
            <div className={s.banner}>
                <img src='https://thumbs.dreamstime.com/b/conceptual-wood-deck-over-sea-sky-banner-concept-blue-background-51413369.jpg' />
            </div>

            <div className={s.descriptionBlok}>
                <img className={s.avatar} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWNvxqwJyqQtJQLKuWSGDQaxDG0JQ1LHbV_ffZ1qdFc85UtnfLu1D2IbsKPdIqnUtyE8&usqp=CAU' />
                <div className={s.description}>
                    
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;