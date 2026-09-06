import { BriefcaseBusiness, ChevronDown, Clock3, Filter, MapPin, Search, SlidersHorizontal, Sparkles, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { opportunityData, opportunityFilters } from '../data/opportunityData'
import { Button } from '../components/ui'

const sortOptions = [
  { value: 'recent', label: 'Most recent' },
  { value: 'match', label: 'Best match' },
  { value: 'title', label: 'Title A-Z' },
]

function OpportunityCard({ opportunity }) {
  return <article className="opportunity-result-card"><div className="opportunity-result-top"><div className={`result-logo ${opportunity.tone}`}>{opportunity.initials}</div><div className="result-identity"><span className="eyebrow">{opportunity.organizationType}</span><h2>{opportunity.title}</h2><p>{opportunity.organization}</p></div>{opportunity.featured && <span className="featured-badge"><Sparkles size={12} /> Featured</span>}</div><div className="result-tag-row"><span className={`result-type ${opportunity.type.toLowerCase()}`}><BriefcaseBusiness size={13} />{opportunity.type}</span>{opportunity.skills.map((skill) => <span className="result-skill" key={skill}>{skill}</span>)}</div><div className="result-details"><span><MapPin size={14} />{opportunity.location}</span><span><SlidersHorizontal size={14} />{opportunity.workMode}</span><span><Clock3 size={14} />{opportunity.duration}</span></div><div className="result-footer"><div><strong>{opportunity.stipend}</strong><small>{opportunity.postedLabel}</small></div><Link className="button button-secondary result-button" to={`/opportunities/${opportunity.id}`}>View opportunity <ChevronDown size={15} className="rotate-arrow" /></Link></div></article>
}

function FilterSelect({ label, value, options, onChange }) {
  return <label className="opportunity-filter"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}><option value="">All {label.toLowerCase()}s</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select><ChevronDown size={15} /></label>
}

export default function OpportunityDiscovery() {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({ type: '', skill: '', location: '', workMode: '', duration: '' })
  const [sort, setSort] = useState('recent')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const updateFilter = (key, value) => setFilters((current) => ({ ...current, [key]: value }))
  const clearFilters = () => { setQuery(''); setFilters({ type: '', skill: '', location: '', workMode: '', duration: '' }) }
  const activeFilterCount = Object.values(filters).filter(Boolean).length
  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const filtered = opportunityData.filter((opportunity) => {
      const searchable = [opportunity.title, opportunity.organization, opportunity.organizationType, ...opportunity.skills].join(' ').toLowerCase()
      return (!normalizedQuery || searchable.includes(normalizedQuery)) && (!filters.type || opportunity.type === filters.type) && (!filters.skill || opportunity.skills.includes(filters.skill)) && (!filters.location || opportunity.location === filters.location) && (!filters.workMode || opportunity.workMode === filters.workMode) && (!filters.duration || opportunity.duration === filters.duration)
    })
    return [...filtered].sort((a, b) => sort === 'title' ? a.title.localeCompare(b.title) : sort === 'match' ? Number(b.featured) - Number(a.featured) : a.postedDaysAgo - b.postedDaysAgo)
  }, [filters, query, sort])
  return <div className="opportunity-discovery"><header className="opportunity-page-heading"><div><span className="eyebrow accent-eyebrow">Opportunity marketplace</span><h1>Find work that moves you forward.</h1><p>Explore internships and projects from teams building the future of work.</p></div><div className="opportunity-count"><strong>{results.length}</strong><span>open opportunities</span></div></header><div className="opportunity-search"><Search size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by role, organization or skill" aria-label="Search opportunities" />{query && <button className="clear-search" onClick={() => setQuery('')} aria-label="Clear search"><X size={16} /></button>}</div><div className="opportunity-toolbar"><button className="mobile-filter-toggle" onClick={() => setMobileFiltersOpen((open) => !open)}><Filter size={16} />Filters{activeFilterCount > 0 && <b>{activeFilterCount}</b>}</button><div className={`opportunity-filter-row ${mobileFiltersOpen ? 'open' : ''}`}><FilterSelect label="Type" value={filters.type} options={opportunityFilters.types} onChange={(value) => updateFilter('type', value)} /><FilterSelect label="Skill" value={filters.skill} options={opportunityFilters.skills} onChange={(value) => updateFilter('skill', value)} /><FilterSelect label="Location" value={filters.location} options={opportunityFilters.locations} onChange={(value) => updateFilter('location', value)} /><FilterSelect label="Work mode" value={filters.workMode} options={opportunityFilters.workModes} onChange={(value) => updateFilter('workMode', value)} /><FilterSelect label="Duration" value={filters.duration} options={opportunityFilters.durations} onChange={(value) => updateFilter('duration', value)} />{activeFilterCount > 0 && <button className="clear-filters" onClick={clearFilters}>Clear filters</button>}</div><label className="sort-select"><span>Sort</span><select value={sort} onChange={(event) => setSort(event.target.value)}>{sortOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}</select><ChevronDown size={15} /></label></div><div className="opportunity-results-heading"><span>Showing {results.length} of {opportunityData.length} opportunities</span><span className="results-note"><Sparkles size={13} /> Curated for your workspace</span></div>{results.length > 0 ? <div className="opportunity-results-grid">{results.map((opportunity) => <OpportunityCard key={opportunity.id} opportunity={opportunity} />)}</div> : <div className="opportunity-empty"><div><Search size={24} /></div><h2>No opportunities match that search.</h2><p>Try a different keyword or clear some filters to see more roles.</p><Button variant="secondary" onClick={clearFilters}>Clear search and filters</Button></div>}</div>
}
