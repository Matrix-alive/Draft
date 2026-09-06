import { NavLink, useNavigate } from 'react-router-dom'
import { ArrowUpRight, LogOut, X } from 'lucide-react'
import { navItems, roles } from '../data/mockData'
import { useAuth } from '../context/AuthContext'
import { Icon } from './ui'
import { useNotifications } from '../context/NotificationContext'

export default function Sidebar({ open, onClose }) {
  const { user, signOut } = useAuth()
  const { unreadCount } = useNotifications()
  const navigate = useNavigate()
  const role = user?.role || 'student'
  const handleSignOut = async () => { await signOut(); navigate('/') }
  return <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
    <div className="sidebar-top"><NavLink to="/" className="brand"><span className="brand-mark">B</span><span>bridgework</span></NavLink><button className="icon-button close-sidebar" onClick={onClose} aria-label="Close navigation"><X size={19} /></button></div>
    <div className="workspace-label">Workspace <span className={`role-dot ${roles[role].color}`} /> <b>{roles[role].label}</b></div>
    <nav className="side-nav">{navItems[role].map((item) => <NavLink key={item.path} to={item.path} onClick={onClose} className={({ isActive }) => isActive ? 'side-link active' : 'side-link'}><Icon name={item.icon} size={18} /><span>{item.label}</span></NavLink>)}</nav>
    <div className="sidebar-footer"><NavLink to="/notifications" className="side-link"><Icon name="Bell" size={18} /><span>Notifications</span>{unreadCount > 0 && <span className="sidebar-unread-count">{unreadCount}</span>}</NavLink><div className="sidebar-help"><span>Need a hand?</span><ArrowUpRight size={16} /><small>Visit the resource centre</small></div><button className="side-link logout-button" onClick={handleSignOut}><LogOut size={18} /><span>Sign out</span></button></div>
  </aside>
}
