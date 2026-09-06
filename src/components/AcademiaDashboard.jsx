import { ArrowRight, BarChart3, CalendarDays, ChevronRight, FileBarChart, GraduationCap, Handshake, MoreHorizontal, Plus, TrendingUp, UsersRound } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { academiaDashboardData as data } from '../data/academiaDashboardData'
import { Button, Icon } from './ui'

function SectionHeader({ eyebrow, title, action, path }) {
  return <div className="academia-section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{action && <Link className="section-action" to={path}>{action}<ChevronRight size={15} /></Link>}</div>
}

function OverviewStats() {
  return <div className="academia-stat-grid">{data.overview.map((stat) => <div className={`academia-stat ${stat.tone}`} key={stat.label}><span className="academia-stat-icon"><Icon name={stat.label === 'Students' ? 'UsersRound' : stat.label === 'Placement rate' ? 'TrendingUp' : stat.label === 'Industry partners' ? 'Handshake' : 'Sparkles'} size={17} /></span><span className="eyebrow">{stat.label}</span><strong>{stat.value}</strong><small>{stat.change}</small></div>)}</div>
}

function InstitutionOverview() {
  return <section className="academia-institution-card"><div className="institution-hero"><div className="institution-logo">{data.institution.initials}</div><div><span className="eyebrow">Institution overview</span><h2>{data.institution.name}</h2><p>{data.institution.faculty}</p></div><button className="more-button" aria-label="More institution options"><MoreHorizontal size={18} /></button></div><div className="institution-details"><span><GraduationCap size={14} />{data.institution.location}</span><span><BarChart3 size={14} />{data.institution.accredited}</span></div><Link to="/academia/students" className="institution-link">Open student insights <ArrowRight size={15} /></Link></section>
}

function QuickActions() {
  return <section className="academia-actions"><span className="eyebrow">Academic toolkit</span><div className="academia-action-list"><Link to="/academia/students" className="academia-action blue"><span><UsersRound size={17} /></span><strong>Review students</strong><ArrowRight size={15} /></Link><Link to="/academia/skills" className="academia-action teal"><span><BarChart3 size={17} /></span><strong>Explore skill gaps</strong><ArrowRight size={15} /></Link><Link to="/academia/placements" className="academia-action orange"><span><TrendingUp size={17} /></span><strong>Placement report</strong><ArrowRight size={15} /></Link><Link to="/collaboration" className="academia-action ink"><span><Handshake size={17} /></span><strong>Connect industry</strong><ArrowRight size={15} /></Link></div></section>
}

function SkillGapsChart() {
  return <section className="academia-card skill-gaps-panel"><SectionHeader eyebrow="Curriculum signals" title="Top skill gaps" action="View skill analytics" path="/academia/skills" /><div className="gap-chart"><ResponsiveContainer width="100%" height="100%"><BarChart data={data.skillGaps} layout="vertical" margin={{ top: 4, right: 8, bottom: 4, left: 5 }}><CartesianGrid horizontal={false} stroke="#e4e9ee" /><XAxis type="number" domain={[0, 100]} hide /><YAxis dataKey="skill" type="category" width={118} axisLine={false} tickLine={false} tick={{ fill: '#71808f', fontSize: 9 }} /><Tooltip contentStyle={{ border: '1px solid #e4e9ee', borderRadius: 6, fontSize: 11 }} formatter={(value) => [`${value}%`, 'Readiness']} /><Bar dataKey="students" barSize={10} radius={[0, 4, 4, 0]}>{data.skillGaps.map((gap) => <Cell key={gap.skill} fill={gap.color} />)}</Bar></BarChart></ResponsiveContainer></div><div className="gap-summary"><span><i className="gap-dot orange" />Current readiness</span><span><i className="gap-dot target" />Target benchmark</span></div></section>
}

function PlacementTrendChart() {
  return <section className="academia-card trend-panel"><SectionHeader eyebrow="Outcome tracking" title="Student placement trends" action="Full report" path="/academia/placements" /><div className="trend-chart"><ResponsiveContainer width="100%" height="100%"><LineChart data={data.placementTrend} margin={{ top: 15, right: 5, bottom: 0, left: -18 }}><CartesianGrid vertical={false} stroke="#e4e9ee" /><XAxis dataKey="term" axisLine={false} tickLine={false} tick={{ fill: '#71808f', fontSize: 9 }} /><YAxis domain={[50, 100]} axisLine={false} tickLine={false} tick={{ fill: '#71808f', fontSize: 9 }} /><Tooltip contentStyle={{ border: '1px solid #e4e9ee', borderRadius: 6, fontSize: 11 }} formatter={(value) => [`${value}%`]} /><Line type="monotone" dataKey="placed" name="Placed" stroke="#147d78" strokeWidth={2.5} dot={{ fill: '#147d78', r: 3, strokeWidth: 0 }} /><Line type="monotone" dataKey="readiness" name="Readiness" stroke="#d97a42" strokeWidth={2} dot={{ fill: '#d97a42', r: 3, strokeWidth: 0 }} /></LineChart></ResponsiveContainer></div><div className="trend-legend"><span><i className="gap-dot teal" />Placement rate</span><span><i className="gap-dot orange" />Skill readiness</span></div></section>
}

function PartnershipCard() {
  return <section className="academia-card partnership-panel"><SectionHeader eyebrow="Industry network" title="Industry partnerships" action="Open partners" path="/collaboration" /><div className="partnership-list">{data.partnerships.map((partner) => <div className="partnership-row" key={partner.name}><div className={`partner-logo ${partner.tone}`}>{partner.initials}</div><div><strong>{partner.name}</strong><span>{partner.focus}</span></div><div className="partner-students"><strong>{partner.students}</strong><span>students</span></div><span className={`academia-status ${partner.status.toLowerCase()}`}>{partner.status}</span></div>)}</div></section>
}

function ProjectsCard() {
  return <section className="academia-card projects-panel"><SectionHeader eyebrow="Applied learning" title="Active collaborative projects" action="View all" path="/collaboration" /><div className="academia-project-list">{data.projects.map((project) => <div className="academia-project-row" key={project.title}><div className={`project-date ${project.tone}`}><CalendarDays size={14} /><strong>{project.date}</strong></div><div><strong>{project.title}</strong><span>{project.partner}</span></div><span className="project-count"><UsersRound size={13} />{project.students}</span><span className={`academia-status ${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</span></div>)}</div></section>
}

function NotificationsCard() {
  return <section className="academia-card academia-notifications"><SectionHeader eyebrow="Stay informed" title="Notifications" action="See all" path="/notifications" /><div className="academia-notification-list">{data.notifications.map((item) => <div className="academia-notification" key={item.title}><div className={`activity-icon ${item.tone}`}><Icon name={item.icon} size={15} /></div><div><strong>{item.title}</strong><span>{item.meta}</span></div><i /></div>)}</div></section>
}

export default function AcademiaDashboard() {
  const navigate = useNavigate()
  return <div className="academia-dashboard"><header className="academia-welcome"><div><span className="eyebrow">Academic workspace · Tuesday, 16 September 2026</span><h1>Good morning, Dr. Patel.</h1><p>Turn student signals into better learning and placement outcomes.</p></div><Button icon={Plus} onClick={() => navigate('/collaboration')}>Start collaboration</Button></header><OverviewStats /><div className="academia-top-grid"><InstitutionOverview /><QuickActions /></div><div className="academia-chart-grid"><SkillGapsChart /><PlacementTrendChart /></div><div className="academia-lower-grid"><PartnershipCard /><ProjectsCard /><NotificationsCard /></div></div>
}
