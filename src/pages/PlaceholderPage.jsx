import { ArrowLeft, Construction } from 'lucide-react'
import { Link } from 'react-router-dom'
import { EmptyState } from '../components/ui'
import { useAuth } from '../context/AuthContext'

export default function PlaceholderPage({ title, description }) { const { user } = useAuth(); return <div className="placeholder-page"><Link to={`/${user.role}`} className="back-link"><ArrowLeft size={16} /> Back to overview</Link><span className="eyebrow">Workspace module</span><h1>{title}</h1><p className="placeholder-description">{description}</p><EmptyState icon="Construction" title="This module is taking shape" text="The architecture is ready for the next feature slice. Mock data and API calls will plug in here." /></div> }
