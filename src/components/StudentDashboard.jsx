import { ArrowRight, Bell, BriefcaseBusiness, CalendarDays, CheckCircle2, ChevronRight, CircleAlert, Clock3, Code2, FileText, GraduationCap, MoreHorizontal, Search, Sparkles, Target, TrendingUp, UserRound, UsersRound } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { studentDashboardData as data } from '../data/studentDashboardData'
import { Button, Icon } from './ui'

function SectionHeader({ eyebrow, title, action, actionPath }) {
  return <div className="student-section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{action && (actionPath ? <Link className="section-action" to={actionPath}>{action}<ChevronRight size={15} /></Link> : <button className="section-action">{action}<ChevronRight size={15} /></button>)}</div>
}

function ProgressBar({ value, tone = 'teal' }) { return <div className="progress-track"><span className={`progress-fill ${tone}`} style={{ width: `${value}%` }} /></div> }

function ProfileCard() {
  return <section className="student-card profile-completion"><div className="profile-card-top"><div className="student-avatar">{data.profile.initials}</div><div><span className="eyebrow">Profile completion</span><h3>{data.profile.completion}% complete</h3><p>Add your projects and preferred location to improve recruiter matches.</p></div></div><ProgressBar value={data.profile.completion} /><div className="profile-card-bottom"><span>Last updated today</span><Link className="inline-action" to="/student/profile">Complete profile <ArrowRight size={14} /></Link></div></section>
}

function ReadinessCard() {
  return <section className="student-card readiness-card"><div className="readiness-header"><div><span className="eyebrow">Skill readiness</span><h3>{data.readiness.label}</h3></div><div className="readiness-score"><strong>{data.readiness.score}</strong><span>/100</span></div></div><div className="readiness-ring" style={{ '--score': `${data.readiness.score * 3.6}deg` }}><div><strong>{data.readiness.score}</strong><span>readiness score</span></div></div><div className="readiness-trend"><TrendingUp size={15} />{data.readiness.trend}</div></section>
}

function SkillGapCard() {
  return <section className="student-card skill-gap-card"><SectionHeader eyebrow="Skill development" title="Your skill gaps" action="View assessment" actionPath="/student/skills" /><div className="skill-gap-list">{data.skillGaps.map((skill) => <div className="skill-gap-row" key={skill.name}><div className="skill-gap-label"><strong>{skill.name}</strong><span className={`tone-text ${skill.tone}`}>{skill.level}</span></div><div className="skill-gap-progress"><ProgressBar value={skill.progress} tone={skill.tone} /><span>{skill.progress}%</span></div></div>)}</div></section>
}

function OpportunityCard({ opportunity, project = false }) {
  return <article className="opportunity-card"><div className={`opportunity-logo ${opportunity.tone}`}>{opportunity.initials}</div><div className="opportunity-details"><div className="opportunity-card-header"><span className="eyebrow">{project ? opportunity.type : opportunity.company}</span><button className="more-button" aria-label={`More options for ${opportunity.title || opportunity.role}`}><MoreHorizontal size={17} /></button></div><h3>{project ? opportunity.title : opportunity.role}</h3><p>{project ? opportunity.company : opportunity.location}</p><div className="opportunity-meta"><span>{project ? opportunity.duration : `${opportunity.match}% match`}</span><span>{project ? `${opportunity.applicants} applicants` : opportunity.posted}</span></div></div></article>
}

function OpportunitySection({ project = false }) {
  const items = project ? data.projects : data.internships
  return <section className="student-section opportunities-section"><SectionHeader eyebrow={project ? 'Learn by doing' : 'Curated for you'} title={project ? 'Recommended projects' : 'Recommended internships'} action="View all" actionPath="/opportunities" /><div className="opportunity-grid">{items.map((item) => <OpportunityCard key={item.title || item.role} opportunity={item} project={project} />)}</div></section>
}

function DeadlinesCard() {
  return <section className="student-card deadlines-card"><SectionHeader eyebrow="Stay on track" title="Upcoming deadlines" action="Calendar" /><div className="deadline-list">{data.deadlines.map((item) => <div className="deadline-row" key={item.title}><div className={`deadline-date ${item.tone}`}><CalendarDays size={14} /><strong>{item.date}</strong></div><div><strong>{item.title}</strong><span>{item.meta}</span></div><ChevronRight size={15} /></div>)}</div></section>
}

function ApplicationsCard() {
  return <section className="student-card applications-card"><SectionHeader eyebrow="Your activity" title="Recent applications" action="View applications" actionPath="/student/applications" /><div className="applications-table">{data.applications.map((item) => <div className="application-row" key={item.company}><div className={`company-mark ${item.tone}`}>{item.company.charAt(0)}</div><div className="application-name"><strong>{item.role}</strong><span>{item.company} · {item.date}</span></div><span className={`status-badge ${item.tone}`}>{item.status}</span></div>)}</div></section>
}

function NotificationsCard() {
  return <section className="student-card notifications-card"><SectionHeader eyebrow="Stay informed" title="Notifications" action="See all" actionPath="/notifications" /><div className="notification-list">{data.notifications.map((item) => <div className="student-notification" key={item.title}><div className={`activity-icon ${item.tone}`}><Icon name={item.icon} size={15} /></div><div><strong>{item.title}</strong><span>{item.meta}</span></div><span className="unread-dot" /></div>)}</div></section>
}

function PlacementCard() {
  return <section className="student-card placement-card"><div className="placement-copy"><span className="eyebrow">Placement readiness</span><h2>You are making<br /><em>real progress.</em></h2><p>Keep building evidence of your skills. Students with a complete profile and two industry projects get 2.4x more recruiter views.</p><Link className="button button-secondary" to="/student/placements">View insights <ArrowRight size={17} /></Link></div><div className="placement-bars">{data.placement.map((item) => <div className="placement-bar" key={item.label}><div><span>{item.label}</span><strong>{item.value}%</strong></div><ProgressBar value={item.value} tone={item.value > 75 ? 'teal' : item.value > 65 ? 'orange' : 'blue'} /></div>)}</div></section>
}

export default function StudentDashboard() {
  const navigate = useNavigate()
  return <div className="student-dashboard"><header className="student-welcome"><div><span className="eyebrow accent-eyebrow">Student workspace · Tuesday, 16 September 2026</span><h1>Good morning, {data.profile.name.split(' ')[0]}.</h1><p>Here is your path from learning to opportunity, in one clear view.</p></div><Button variant="secondary" icon={Search} onClick={() => navigate('/opportunities')}>Explore opportunities</Button></header><div className="student-top-grid"><ProfileCard /><ReadinessCard /><SkillGapCard /></div><div className="student-section-grid"><OpportunitySection /><DeadlinesCard /></div><div className="student-section-grid second"><OpportunitySection project /><ApplicationsCard /></div><div className="student-section-grid third"><NotificationsCard /><PlacementCard /></div></div>
}
