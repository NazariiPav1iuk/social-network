import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
    
    if (props.users.length === 0){
        props.setUsers([
            {id:1, photoUrl:'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg',
                followed: true, fullName: 'Andrei', status:'Im a boss', location:{city: 'Kalush', country: 'Ukraine'}},
            {id:2, photoUrl:'https://image.flaticon.com/icons/png/512/194/194938.png',
                 followed: false, fullName: 'Tanya', status:'Nice girl', location:{city: 'Roztoky', country: 'Ukraine'}},
            {id:3, photoUrl:'https://image.flaticon.com/icons/png/512/147/147144.png', 
                followed: true, fullName: 'Stepa', status:'left for dead', location:{city: 'Minsk', country: 'Bilorus'}},
            {id:4, photoUrl:'https://eccentrictechnology.com/wp-content/uploads/2020/09/Consumer.png', 
                followed: false, fullName: 'Artem', status:'Im alive', location:{city: 'Moscow', country: 'Russia'}}  
        ])
    }
    return(
        <div className={s.usersPage}>
            <h1 className={s.title}>all users</h1>
            {
                props.users.map(u => <div key={u.id} className={s.userBlock}>
                    <div className={s.leftBlock}> 
                        <div className={s.userImg}>
                            <img src={u.photoUrl } alt="" />
                        </div>
                        <div className={s.followBtn}>
                            {u.followed 
                            ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button> 
                            : <button onClick={() => {props.follow(u.id)}}>follow</button>
                            }
                            
                        </div>
                    </div>
                    <div className={s.rightBlock}> 
                        <div className={s.genetalInfo}>
                            <h3>{u.fullName}</h3>
                            <p>{u.status}</p>
                        </div>
                        <div className={s.location}>
                            <p>{u.location.country}</p>
                            <p>{u.location.city}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;