import React from 'react'
import './UserCard.css'

interface UserCard {
  name: string;
  score: number;
  role: string;
}

type Props = {
  userCard: UserCard;
}

const UserCard = ({ userCard }: Props) => {
  return (
    <div className='active-player-container'>
        <div className='player-card'>
          <div className='player-info'>
            <div className='player'>
              <span className='player-name'>{userCard.name}</span>
              <span className='player-role'>{userCard.role}</span>
            </div>
            <span className="player-score">{userCard.score}</span>
          </div>
          <div className='button-action'>
            <button className='btn-action btn-win' style={{ display: 'none' }}>Win</button>
            <button className='btn-action btn-lose' style={{ display: 'none' }}>Lose</button>
            <button className='btn-action btn-wx2' style={{ display: 'none' }}>Wx2</button>
            <button className='btn-action btn-lx2' style={{ display: 'none' }}>Lx2</button>
            <button className='btn-action btn-win-all'>Win All</button>
          </div>
          <input className='status-checkbox' type="checkbox" name="status" id="" />
        </div>
      </div>
  )
}

export default UserCard