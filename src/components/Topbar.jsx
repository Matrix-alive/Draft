import { Bell, Menu, Search } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Topbar({ onMenu }) {
  const { user } = useAuth()
  return <header className="topbar"><button className="icon-button menu-button" onClick={onMenu} aria-label="Open navigation"><Menu size={21} /></button><div className="search-box"><Search size={17} /><input placeholder="Search skills, people or opportunities" aria-label="Search" /></div><div className="topbar-actions"><button className="icon-button notification-button" aria-label="Notifications"><Bell size={19} /><span /></button><div className="avatar">{(user?.name || 'A').charAt(0)}</div><div className="user-summary"><strong>{user?.name || 'Demo user'}</strong><span>{user?.role === 'industry' ? 'Product team' : user?.role === 'academia' ? 'Faculty workspace' : 'Computer science'}</span></div></div></header>
}
