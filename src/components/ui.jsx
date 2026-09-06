import * as Icons from 'lucide-react'

export function Button({ children, variant = 'primary', icon: Icon, ...props }) {
  return <button className={`button button-${variant}`} {...props}>{Icon && <Icon size={17} strokeWidth={2.1} />}{children}</button>
}

export function Badge({ children, tone = 'neutral' }) { return <span className={`badge badge-${tone}`}>{children}</span> }

export function Icon({ name, size = 18 }) {
  const Component = Icons[name] || Icons.Circle
  return <Component size={size} strokeWidth={2} />
}

export function StatCard({ label, value, change, tone = 'teal' }) {
  return <div className={`stat-card stat-${tone}`}><div className="stat-icon"><Icon name={tone === 'orange' ? 'BriefcaseBusiness' : tone === 'blue' ? 'BarChart3' : 'Sparkles'} size={18} /></div><p>{label}</p><strong>{value}</strong><span>{change}</span></div>
}

export function EmptyState({ icon = 'Inbox', title, text, action }) {
  return <div className="empty-state"><div className="empty-icon"><Icon name={icon} size={23} /></div><h3>{title}</h3><p>{text}</p>{action}</div>
}
