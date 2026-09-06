import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import DashboardLayout from './layouts/DashboardLayout'
import PublicLayout from './layouts/PublicLayout'
import DashboardHome from './components/DashboardHome'
import StudentDashboard from './components/StudentDashboard'
import IndustryDashboard from './components/IndustryDashboard'
import AcademiaDashboard from './components/AcademiaDashboard'
import Landing from './pages/Landing'
import RoleSelection from './pages/RoleSelection'
import Login from './pages/Login'
import PlaceholderPage from './pages/PlaceholderPage'
import OpportunityDiscovery from './pages/OpportunityDiscovery'
import OpportunityDetail from './pages/OpportunityDetail'
import StudentProfile from './pages/StudentProfile'
import StudentApplications from './pages/StudentApplications'
import CollaborationHub from './pages/CollaborationHub'
import CollaborationDetail from './pages/CollaborationDetail'

function ProtectedRoute({ children, roles }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/get-started" replace />
  if (roles && !roles.includes(user.role)) return <Navigate to={`/${user.role}`} replace />
  return children
}

function RoleDashboard({ role }) { return <ProtectedRoute roles={[role]}>{role === 'student' ? <StudentDashboard /> : role === 'industry' ? <IndustryDashboard /> : <AcademiaDashboard />}</ProtectedRoute> }
function SharedPage({ title, description }) { return <ProtectedRoute><PlaceholderPage title={title} description={description} /></ProtectedRoute> }

export default function App() {
  return <Routes><Route element={<PublicLayout />}><Route path="/" element={<Landing />} /><Route path="/get-started" element={<RoleSelection />} /><Route path="/sign-in" element={<Login />} /></Route><Route element={<DashboardLayout />}><Route path="/student" element={<RoleDashboard role="student" />} /><Route path="/industry" element={<RoleDashboard role="industry" />} /><Route path="/academia" element={<RoleDashboard role="academia" />} /><Route path="/student/profile" element={<ProtectedRoute roles={["student"]}><StudentProfile /></ProtectedRoute>} /><Route path="/student/applications" element={<ProtectedRoute roles={["student"]}><StudentApplications /></ProtectedRoute>} /><Route path="/student/*" element={<SharedPage title="Student profile" description="Your profile, skills and applications will live here." />} /><Route path="/industry/*" element={<SharedPage title="Industry workspace" description="Manage your company profile, opportunities and candidate pipeline here." />} /><Route path="/academia/*" element={<SharedPage title="Academic insights" description="Bring student signals and placement outcomes together here." />} /><Route path="/opportunities" element={<ProtectedRoute><OpportunityDiscovery /></ProtectedRoute>} /><Route path="/opportunities/:opportunityId" element={<ProtectedRoute><OpportunityDetail /></ProtectedRoute>} /><Route path="/collaboration" element={<ProtectedRoute><CollaborationHub /></ProtectedRoute>} /><Route path="/collaboration/:projectId" element={<ProtectedRoute><CollaborationDetail /></ProtectedRoute>} /><Route path="/notifications" element={<SharedPage title="Notifications" description="Updates from your workspace will appear here." />} /></Route><Route path="*" element={<Navigate to="/" replace />} /></Routes>
}
