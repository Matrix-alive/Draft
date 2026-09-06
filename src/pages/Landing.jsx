import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Handshake,
  Network,
  Search,
  Sparkles,
  UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const participants = [
  { icon: UserRound, label: 'Students', text: 'Understand your skills, find the right opportunity and build a confident path to placement.', tone: 'teal' },
  { icon: Building2, label: 'Industry', text: 'Reach emerging talent, shape practical projects and build a stronger future workforce.', tone: 'orange' },
  { icon: GraduationCap, label: 'Academicians', text: 'Turn student and industry signals into better learning outcomes and stronger partnerships.', tone: 'blue' },
]

const capabilities = [
  { icon: Network, title: 'Skill mapping', text: 'Make capability visible across curricula, portfolios and real-world demand.', tone: 'teal' },
  { icon: BriefcaseBusiness, title: 'Internships', text: 'Match students with internships that align to their strengths and ambitions.', tone: 'orange' },
  { icon: Sparkles, title: 'Projects', text: 'Turn live industry briefs into meaningful, outcome-focused learning.', tone: 'blue' },
  { icon: Handshake, title: 'Industry collaboration', text: 'Build a shared space for campus partnerships, mentorship and research.', tone: 'teal' },
  { icon: BarChart3, title: 'Placement insights', text: 'Use clear signals to improve readiness, hiring and long-term outcomes.', tone: 'orange' },
]

const workflows = [
  { role: 'Student', icon: UserRound, tone: 'teal', steps: ['Skill assessment', 'Skill gap', 'Opportunity', 'Application', 'Placement'] },
  { role: 'Industry', icon: Building2, tone: 'orange', steps: ['Post opportunity', 'Find talent', 'Collaboration'] },
  { role: 'Academia', icon: GraduationCap, tone: 'blue', steps: ['Monitor skills', 'Connect industry', 'Improve outcomes'] },
]

function WorkflowRow({ workflow }) {
  const RoleIcon = workflow.icon
  return <div className="workflow-row"><div className={`workflow-role ${workflow.tone}`}><RoleIcon size={18} /><strong>{workflow.role}</strong></div><div className="workflow-steps">{workflow.steps.map((step, index) => <div className="workflow-step" key={step}><span>{step}</span>{index < workflow.steps.length - 1 && <ChevronRight size={16} />}</div>)}</div></div>
}

export default function Landing() {
  return <div className="landing">
    <nav className="public-nav"><Link to="/" className="brand"><span className="brand-mark">B</span><span>bridgework</span></Link><div className="public-nav-links"><a href="#ecosystem">Ecosystem</a><a href="#capabilities">Capabilities</a><a href="#workflow">How it works</a><Link to="/sign-in">Sign in</Link><Link to="/get-started" className="nav-cta">Get started <ArrowRight size={16} /></Link></div></nav>
    <main>
      <section className="hero collaboration-hero"><div className="hero-copy"><span className="eyebrow accent-eyebrow">Academia + industry, connected</span><h1>Turn shared potential into <em>real progress.</em></h1><p>Bridgework brings students, industry and academicians together to map skills, create opportunities and improve outcomes.</p><div className="hero-actions"><Link to="/get-started" className="button button-primary">Get started <ArrowRight size={17} /></Link><Link to="/opportunities" className="button button-outline">Explore opportunities <Search size={17} /></Link></div><div className="hero-proof"><span><CheckCircle2 size={16} /> Skills-first collaboration</span><span><CheckCircle2 size={16} /> Built for better outcomes</span></div></div><div className="hero-visual"><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-card card-main"><span className="mini-label">COLLABORATION SIGNAL</span><strong>Better together.</strong><div className="connection-map"><span><UserRound size={15} /></span><i /><span><Building2 size={15} /></span><i /><span><GraduationCap size={15} /></span></div><small>3 perspectives, 1 shared direction</small></div><div className="visual-card card-float"><span className="avatar-stack"><b>S</b><b>I</b><b>A</b></span><strong>2,408</strong><small>active connections</small></div><div className="visual-tag">Skills meet opportunity <ArrowRight size={15} /></div></div></section>

      <section className="ecosystem-section" id="ecosystem"><div className="section-intro ecosystem-intro"><div><span className="eyebrow">One connected ecosystem</span><h2>Everyone sees the next step.</h2></div><p>Progress accelerates when the people creating opportunity and the people preparing for it work from the same picture.</p></div><div className="participant-grid">{participants.map(({ icon: ItemIcon, label, text, tone }) => <article className="participant-card" key={label}><div className={`participant-icon ${tone}`}><ItemIcon size={21} /></div><span className="eyebrow">{label}</span><h3>{label === 'Students' ? 'Find your direction.' : label === 'Industry' ? 'Shape future talent.' : 'Improve outcomes.'}</h3><p>{text}</p><Link to="/get-started" className="card-link">Explore workspace <ArrowRight size={15} /></Link></article>)}</div></section>

      <section className="capability-section" id="capabilities"><div className="section-intro"><div><span className="eyebrow">One platform, many ways forward</span><h2>From skills to outcomes.</h2></div><p>A practical foundation for the moments that matter across the education-to-employment journey.</p></div><div className="capability-grid">{capabilities.map(({ icon: ItemIcon, title, text, tone }) => <article className={`capability-item ${tone}`} key={title}><div className="capability-icon"><ItemIcon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="workflow-section" id="workflow"><div className="workflow-heading"><span className="eyebrow">A clear path from learning to impact</span><h2>Designed around the work people actually do.</h2><p>Each role has a focused journey, with shared signals connecting the steps.</p></div><div className="workflow-list">{workflows.map((workflow) => <WorkflowRow workflow={workflow} key={workflow.role} />)}</div></section>

      <section className="landing-cta"><div><span className="eyebrow">The next move is yours</span><h2>Make the connection count.</h2><p>Join a growing network turning capability into opportunity.</p></div><Link to="/get-started" className="button button-primary">Get started <ArrowRight size={17} /></Link></section>
    </main>
    <footer className="public-footer strong-footer"><div className="footer-brand"><Link to="/" className="brand"><span className="brand-mark">B</span><span>bridgework</span></Link><p>Connecting learning, skills and opportunity.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#ecosystem">Ecosystem</a><a href="#capabilities">Capabilities</a><a href="#workflow">How it works</a></div><div><strong>Get started</strong><Link to="/get-started">Choose your workspace</Link><Link to="/opportunities">Explore opportunities</Link><Link to="/sign-in">Sign in</Link></div></div><div className="footer-bottom"><span>© 2026 Bridgework</span><span>Built for the people moving learning forward.</span></div></footer>
  </div>
}
