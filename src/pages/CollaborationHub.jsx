import { ArrowRight, BriefcaseBusiness, CalendarDays, CheckCircle2, ChevronDown, Clock3, Filter, Handshake, MapPin, Search, SlidersHorizontal, Sparkles, UsersRound, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { collaborationData, collaborationFilters } from '../data/collaborationData'
import { Button } from '../components/ui'

function StatusBadge({ status, tone }) { return <span className={`collaboration-status ${tone}`}><span />{status}</span> }

function ProjectCard({ project }) {
  return <article className="collaboration-project-card"><div className="collaboration-card-top"><div className={`collaboration-logo ${project.tone}`}>{project.initials}</div><div className="collaboration-card-heading"><span className="eyebrow">{project.partnerType}</span><h2>{project.title}</h2><p>{project.organization}</p></div><StatusBadge status={project.status} tone={project.statusTone} /></div><div className="collaboration-partners"><span><Handshake size={14} />{project.institution}</span><span><MapPin size={14} />{project.location}</span></div><p className="collaboration-description">{project.description}</p><div className="collaboration-skill-row">{project.skills.map((skill) => <span key={skill}>{skill}</span>)}</div><div className="collaboration-card-details"><span><UsersRound size={14} />{project.teamSize}</span><span><Clock3 size={14} />{project.duration}</span><span><CalendarDays size={14} />{project.nextMilestone}</span></div><div className="collaboration-card-actions"><Link className="button button-secondary" to={`/collaboration/${project.id}`}>View project <ArrowRight size={15} /></Link><Link className="collaboration-interest" to={`/collaboration/${project.id}?interest=true`}>Express interest</Link></div></article>
}

function FilterSelect({ label, value, options, onChange }) {
  return <label className="collaboration-filter"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}><option value="">All {label.toLowerCase()}s</option>{options.map((option) => <option value={option} key={option}>{option}</option>)}</select><ChevronDown size={14} /></label>
}

export default function CollaborationHub() {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({ status: '', skill: '', duration: '', workMode: '' })
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const updateFilter = (key, value) => setFilters((current) => ({ ...current, [key]: value }))
  const clearFilters = () => { setQuery(''); setFilters({ status: '', skill: '', duration: '', workMode: '' }) }
  const activeFilterCount = Object.values(filters).filter(Boolean).length
  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return collaborationData.filter((project) => {
      const searchable = [project.title, project.organization, project.institution, project.partnerType, ...project.skills].join(' ').toLowerCase()
      return (!normalizedQuery || searchable.includes(normalizedQuery)) && (!filters.status || project.status === filters.status) && (!filters.skill || project.skills.includes(filters.skill)) && (!filters.duration || project.duration === filters.duration) && (!filters.workMode || project.location.includes(filters.workMode))
    })
  }, [filters, query])
  return <div className="collaboration-hub"><header className="collaboration-page-heading"><div><span className="eyebrow accent-eyebrow">Academia · industry network</span><h1>Build something together.</h1><p>Discover projects where students, faculty and industry teams solve meaningful problems side by side.</p></div><div className="collaboration-count"><strong>{results.length}</strong><span>active collaborations</span></div></header><section className="collaboration-intro-strip"><div><Handshake size={20} /><div><strong>Shared work creates stronger outcomes.</strong><span>Find a project that matches your skills, interests and capacity.</span></div></div><Link to="/collaboration" className="collaboration-intro-link">Explore the network <ArrowRight size={15} /></Link></section><div className="collaboration-search"><Search size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, partners, institutions or skills" aria-label="Search collaborations" />{query && <button onClick={() => setQuery('')} aria-label="Clear search"><X size={16} /></button>}</div><div className="collaboration-toolbar"><button className="collaboration-mobile-filter" onClick={() => setMobileFiltersOpen((open) => !open)}><Filter size={15} />Filters{activeFilterCount > 0 && <b>{activeFilterCount}</b>}</button><div className={`collaboration-filter-row ${mobileFiltersOpen ? 'open' : ''}`}><FilterSelect label="Status" value={filters.status} options={collaborationFilters.statuses} onChange={(value) => updateFilter('status', value)} /><FilterSelect label="Skill" value={filters.skill} options={collaborationFilters.skills} onChange={(value) => updateFilter('skill', value)} /><FilterSelect label="Duration" value={filters.duration} options={collaborationFilters.durations} onChange={(value) => updateFilter('duration', value)} /><FilterSelect label="Work mode" value={filters.workMode} options={collaborationFilters.workModes} onChange={(value) => updateFilter('workMode', value)} />{activeFilterCount > 0 && <button className="collaboration-clear" onClick={clearFilters}>Clear filters</button>}</div></div><div className="collaboration-results-heading"><span>Showing {results.length} of {collaborationData.length} projects</span><span><Sparkles size={13} /> Curated collaboration opportunities</span></div>{results.length > 0 ? <div className="collaboration-project-grid">{results.map((project) => <ProjectCard project={project} key={project.id} />)}</div> : <div className="collaboration-empty"><div><Search size={23} /></div><h2>No projects match your search.</h2><p>Try a different partner, skill or project duration.</p><Button variant="secondary" onClick={clearFilters}>Clear search and filters</Button></div>}</div>
}
