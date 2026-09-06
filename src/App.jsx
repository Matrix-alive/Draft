import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import DashboardLayout from './layouts/DashboardLayout'
import PublicLayout from './layouts/PublicLayout'
import DashboardHome from './components/DashboardHome'
import Landing from './pages/Landing'
import RoleSelection from './pages/RoleSelection'
import Login from './pages/Login'
import PlaceholderPage from './pages/PlaceholderPage'

function ProtectedRoute({ children, roles }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/get-started" replace />
  if (roles && !roles.includes(user.role)) return <Navigate to={`/${user.role}`} replace />
  return children
}

function RoleDashboard({ role }) { return <ProtectedRoute roles={[role]}><DashboardHome role={role} /></ProtectedRoute> }
function SharedPage({ title, description }) { return <ProtectedRoute><PlaceholderPage title={title} description={description} /></ProtectedRoute> }

export default function App() {
  return <Routes><Route element={<PublicLayout />}><Route path="/" element={<Landing />} /><Route path="/get-started" element={<RoleSelection />} /><Route path="/sign-in" element={<Login />} /></Route><Route element={<DashboardLayout />}><Route path="/student" element={<RoleDashboard role="student" />} /><Route path="/industry" element={<RoleDashboard role="industry" />} /><Route path="/academia" element={<RoleDashboard role="academia" />} /><Route path="/student/*" element={<SharedPage title="Student profile" description="Your profile, skills and applications will live here." />} /><Route path="/industry/*" element={<SharedPage title="Industry workspace" description="Manage your company profile, opportunities and candidate pipeline here." />} /><Route path="/academia/*" element={<SharedPage title="Academic insights" description="Bring student signals and placement outcomes together here." />} /><Route path="/opportunities" element={<SharedPage title="Discover opportunities" description="Explore internships, projects and early-career roles matched to your skills." />} /><Route path="/collaboration" element={<SharedPage title="Collaboration hub" description="A shared space for campus and industry projects." />} /><Route path="/notifications" element={<SharedPage title="Notifications" description="Updates from your workspace will appear here." />} /></Route><Route path="*" element={<Navigate to="/" replace />} /></Routes>
}
