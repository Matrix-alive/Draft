import { Bell, Menu, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useNotifications } from '../context/NotificationContext'

export default function Topbar({ onMenu }) {
  const { user } = useAuth()
  const { unreadCount } = useNotifications()
  const navigate = useNavigate()
  return <header className="topbar"><button className="icon-button menu-button" onClick={onMenu} aria-label="Open navigation"><Menu size={21} /></button><div className="search-box"><Search size={17} /><input placeholder="Search skills, people or opportunities" aria-label="Search" /></div><div className="topbar-actions"><button className="icon-button notification-button" onClick={() => navigate('/notifications')} aria-label={`Notifications${unreadCount ? `, ${unreadCount} unread` : ''}`}><Bell size={19} />{unreadCount > 0 && <span className="unread-count">{unreadCount > 99 ? '99+' : unreadCount}</span>}</button><div className="avatar">{(user?.name || 'A').charAt(0)}</div><div className="user-summary"><strong>{user?.name || 'Demo user'}</strong><span>{user?.role === 'industry' ? 'Product team' : user?.role === 'academia' ? 'Faculty workspace' : 'Computer science'}</span></div></div></header>
}
