import { ArrowRight, Clock3, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { api } from '../services/api'
import { Button, EmptyState, Icon, StatCard } from './ui'

export default function DashboardHome({ role }) {
  const { user } = useAuth()
  const [dashboard, setDashboard] = useState(null)
  const [recentActivity, setRecentActivity] = useState([])
  useEffect(() => { api.getDashboard(role).then(setDashboard); api.getActivity().then(setRecentActivity) }, [role])
  if (!dashboard) return <div className="loading-state"><span className="loader" />Loading your workspace...</div>
  return <div className="dashboard-page"><div className="page-heading"><div><span className="eyebrow">{dashboard.eyebrow}</span><h1>{dashboard.title.replace('Aisha', user?.name || 'there')}</h1><p>{dashboard.subtitle}</p></div><Button icon={Plus}>Create new</Button></div><div className="stats-grid">{dashboard.stats.map((stat) => <StatCard key={stat.label} {...stat} />)}</div><div className="dashboard-grid"><section className="content-panel focus-panel"><div className="panel-heading"><div><span className="eyebrow">Recommended next step</span><h2>{dashboard.action}</h2></div><span className="panel-number">01</span></div><p>{dashboard.actionText}</p><Button variant="secondary" icon={ArrowRight}>Open workspace</Button><div className="panel-rail"><span /><span /><span /></div></section><section className="content-panel"><div className="panel-heading"><div><span className="eyebrow">Latest activity</span><h2>Keep an eye on it</h2></div><Clock3 size={19} className="muted-icon" /></div><div className="activity-list">{recentActivity.map((item) => <div className="activity-row" key={item.title}><div className={`activity-icon ${item.tone}`}><Icon name={item.icon} size={16} /></div><div><strong>{item.title}</strong><span>{item.meta}</span></div></div>)}</div></section></div><section className="content-panel empty-panel"><EmptyState icon={role === 'student' ? 'Compass' : role === 'industry' ? 'Handshake' : 'BarChart3'} title={role === 'student' ? 'Your opportunity feed is ready to explore' : role === 'industry' ? 'Your pipeline will appear here' : 'Your insight centre is ready'} text="This area will populate as your workspace gets more active." action={<Button variant="ghost" icon={ArrowRight}>Explore workspace</Button>} /></section></div>
}
