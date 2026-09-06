export const roles = {
  student: { label: 'Student', description: 'Build your path from classroom to career.', color: 'teal' },
  industry: { label: 'Industry professional', description: 'Find the skills and people that move work forward.', color: 'orange' },
  academia: { label: 'Academic', description: 'Turn learning signals into better outcomes.', color: 'blue' },
}

export const navItems = {
  student: [
    { label: 'Overview', path: '/student', icon: 'LayoutDashboard' },
    { label: 'My profile', path: '/student/profile', icon: 'UserRound' },
    { label: 'Discover opportunities', path: '/opportunities', icon: 'Compass' },
    { label: 'Applications', path: '/student/applications', icon: 'Send' },
    { label: 'Skill assessment', path: '/student/skills', icon: 'Sparkles' },
  ],
  industry: [
    { label: 'Overview', path: '/industry', icon: 'LayoutDashboard' },
    { label: 'Company profile', path: '/industry/company', icon: 'Building2' },
    { label: 'Post an opportunity', path: '/industry/post', icon: 'PlusSquare' },
    { label: 'Applications', path: '/industry/applications', icon: 'UsersRound' },
    { label: 'Collaboration hub', path: '/collaboration', icon: 'Handshake' },
  ],
  academia: [
    { label: 'Overview', path: '/academia', icon: 'LayoutDashboard' },
    { label: 'Student insights', path: '/academia/students', icon: 'UsersRound' },
    { label: 'Skill analytics', path: '/academia/skills', icon: 'BarChart3' },
    { label: 'Placement analytics', path: '/academia/placements', icon: 'TrendingUp' },
    { label: 'Collaboration hub', path: '/collaboration', icon: 'Handshake' },
  ],
}

export const dashboardData = {
  student: {
    eyebrow: 'Student workspace', title: 'Good morning, Aisha.', subtitle: 'Here is a clear view of your momentum this week.', stats: [
      { label: 'Profile strength', value: '72%', change: '+8% this month', tone: 'teal' },
      { label: 'Skills mapped', value: '12', change: '3 in demand', tone: 'blue' },
      { label: 'Active applications', value: '04', change: '1 new update', tone: 'orange' },
    ],
    action: 'Complete your profile', actionText: 'Add two projects and a preferred work location to stand out to recruiters.',
  },
  industry: {
    eyebrow: 'Industry workspace', title: 'Build the next cohort.', subtitle: 'Track your talent pipeline and active campus partnerships.', stats: [
      { label: 'Open opportunities', value: '08', change: '+2 this month', tone: 'orange' },
      { label: 'New candidates', value: '146', change: '+18% this week', tone: 'blue' },
      { label: 'Campus partners', value: '12', change: '3 active projects', tone: 'teal' },
    ],
    action: 'Start a collaboration', actionText: 'Create a brief for a capstone, research project or internship and reach the right campus.',
  },
  academia: {
    eyebrow: 'Academic workspace', title: 'Make learning count.', subtitle: 'Translate student capability into better opportunities and outcomes.', stats: [
      { label: 'Students tracked', value: '1,284', change: '+64 this term', tone: 'blue' },
      { label: 'Skills in demand', value: '24', change: 'Across 8 domains', tone: 'teal' },
      { label: 'Placement rate', value: '86%', change: '+6.4% this year', tone: 'orange' },
    ],
    action: 'Review skill signals', actionText: 'Explore the latest industry demand report and identify curriculum opportunities.',
  },
}

export const activity = [
  { title: 'Profile viewed by Northstar Labs', meta: '2 hours ago', icon: 'Eye', tone: 'teal' },
  { title: 'New project brief: Climate data sprint', meta: 'Yesterday', icon: 'FileText', tone: 'orange' },
  { title: 'Your Python assessment is ready', meta: '2 days ago', icon: 'CheckCircle2', tone: 'blue' },
]
