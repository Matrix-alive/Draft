import { ArrowRight, BarChart3, Bell, Building2, CalendarDays, ChevronRight, Clock3, Handshake, MoreHorizontal, Plus, Send, Sparkles, UsersRound } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { industryDashboardData as data } from '../data/industryDashboardData'
import { Button, Icon } from './ui'

function SectionHeader({ eyebrow, title, action, path }) {
  return <div className="industry-section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{action && <Link className="section-action" to={path}>{action}<ChevronRight size={15} /></Link>}</div>
}

function CompanyOverview() {
  return <section className="industry-company-card"><div className="company-hero"><div className="company-logo">{data.company.initials}</div><div><span className="eyebrow">Company overview</span><h2>{data.company.name}</h2><p>{data.company.tagline}</p></div><button className="more-button" aria-label="More company options"><MoreHorizontal size={18} /></button></div><div className="company-details"><span><Building2 size={14} />{data.company.industry}</span><span><UsersRound size={14} />{data.company.activePrograms} active programs</span></div><Link to="/industry/company" className="company-link">Manage company profile <ArrowRight size={15} /></Link></section>
}

function QuickActions() {
  return <section className="industry-actions"><span className="eyebrow">Quick actions</span><div className="industry-action-list"><Link to="/industry/post" className="industry-action orange"><span><Plus size={18} /></span><strong>Post internship</strong><ArrowRight size={15} /></Link><Link to="/industry/post" className="industry-action blue"><span><Sparkles size={18} /></span><strong>Post project</strong><ArrowRight size={15} /></Link><Link to="/industry/applications" className="industry-action teal"><span><Send size={18} /></span><strong>View applications</strong><ArrowRight size={15} /></Link><Link to="/collaboration" className="industry-action ink"><span><Handshake size={18} /></span><strong>Start collaboration</strong><ArrowRight size={15} /></Link></div></section>
}

function OverviewStats() {
  return <div className="industry-stat-grid">{data.overview.map((stat) => <div className={`industry-stat ${stat.tone}`} key={stat.label}><span className="industry-stat-icon"><Icon name={stat.tone === 'orange' ? 'BriefcaseBusiness' : stat.tone === 'blue' ? 'UsersRound' : 'Handshake'} size={17} /></span><span className="eyebrow">{stat.label}</span><strong>{stat.value}</strong><small>{stat.change}</small></div>)}</div>
}

function OpportunitiesCard() {
  return <section className="industry-card opportunities-panel"><SectionHeader eyebrow="Your pipeline" title="Active opportunities" action="Manage all" path="/industry/post" /><div className="industry-opportunity-table">{data.opportunities.map((item) => <div className="industry-opportunity-row" key={item.title}><div className={`industry-type-icon ${item.tone}`}>{item.type === 'Internship' ? <BriefcaseIcon /> : <Sparkles size={16} />}</div><div className="industry-opportunity-name"><strong>{item.title}</strong><span>{item.type} · Due {item.deadline}</span></div><div className="opportunity-skill-list">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div><span className={`industry-status ${item.status.toLowerCase()}`}>{item.status}</span><span className="applicant-count"><UsersRound size={13} />{item.applicants}</span></div>)}</div></section>
}

function BriefcaseIcon() { return <Icon name="BriefcaseBusiness" size={16} /> }

function SkillDistribution() {
  return <section className="industry-card skill-distribution"><SectionHeader eyebrow="Talent signals" title="Candidate skill distribution" action="View analytics" path="/industry/applications" /><div className="skill-chart-wrap"><div className="skill-chart"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={data.skillDistribution} dataKey="value" nameKey="name" innerRadius="59%" outerRadius="88%" paddingAngle={3} stroke="none">{data.skillDistribution.map((entry) => <Cell key={entry.name} fill={entry.color} />)}</Pie><Tooltip contentStyle={{ border: '1px solid #e4e9ee', borderRadius: 6, fontSize: 11 }} formatter={(value) => [`${value}%`, 'Applicants']} /></PieChart></ResponsiveContainer><div className="chart-total"><strong>146</strong><span>applicants</span></div></div><div className="skill-legend">{data.skillDistribution.map((item) => <div key={item.name}><span><i style={{ background: item.color }} />{item.name}</span><strong>{item.value}%</strong></div>)}</div></div></section>
}

function CollaborationCard() {
  return <section className="industry-card collaboration-panel"><SectionHeader eyebrow="Campus network" title="Upcoming collaboration programs" action="Open hub" path="/collaboration" /><div className="collaboration-list">{data.collaborations.map((item) => <div className="collaboration-row" key={item.title}><div className={`collaboration-date ${item.tone}`}><CalendarDays size={14} /><strong>{item.date}</strong></div><div><strong>{item.title}</strong><span>{item.partner}</span></div><span className={`industry-status ${item.status.toLowerCase()}`}>{item.status}</span></div>)}</div></section>
}

function ApplicantsCard() {
  return <section className="industry-card applicants-panel"><SectionHeader eyebrow="Talent pipeline" title="Recent applicants" action="View applications" path="/industry/applications" /><div className="applicant-list">{data.applicants.map((applicant) => <div className="applicant-row" key={applicant.name}><div className={`applicant-avatar ${applicant.tone}`}>{applicant.initials}</div><div className="applicant-info"><strong>{applicant.name}</strong><span>{applicant.role}</span><small>{applicant.skills}</small></div><div className="applicant-score"><strong>{applicant.score}</strong><span>match</span></div><button className="more-button" aria-label={`More options for ${applicant.name}`}><MoreHorizontal size={17} /></button></div>)}</div></section>
}

function NotificationsCard() {
  return <section className="industry-card industry-notifications"><SectionHeader eyebrow="Stay informed" title="Notifications" action="See all" path="/notifications" /><div className="industry-notification-list">{data.notifications.map((item) => <div className="industry-notification" key={item.title}><div className={`activity-icon ${item.tone}`}><Icon name={item.icon} size={15} /></div><div><strong>{item.title}</strong><span>{item.meta}</span></div><i /></div>)}</div></section>
}

export default function IndustryDashboard() {
  const navigate = useNavigate()
  return <div className="industry-dashboard"><header className="industry-welcome"><div><span className="eyebrow">Industry workspace · Tuesday, 16 September 2026</span><h1>Good morning, Jordan.</h1><p>Build the next cohort with a clearer view of your talent pipeline.</p></div><Button icon={Plus} onClick={() => navigate('/industry/post')}>Create opportunity</Button></header><OverviewStats /><div className="industry-top-grid"><CompanyOverview /><QuickActions /></div><div className="industry-main-grid"><OpportunitiesCard /><SkillDistribution /></div><div className="industry-lower-grid"><CollaborationCard /><ApplicantsCard /><NotificationsCard /></div></div>
}
