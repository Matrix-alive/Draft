export const studentDashboardData = {
  profile: {
    name: 'Aisha Khan',
    course: 'B.Tech Computer Science, Year 3',
    completion: 72,
    initials: 'AK',
  },
  readiness: {
    score: 78,
    label: 'Good foundation',
    trend: '+12% since last assessment',
    skills: [
      { name: 'Technical skills', score: 82, tone: 'teal' },
      { name: 'Communication', score: 74, tone: 'blue' },
      { name: 'Work readiness', score: 68, tone: 'orange' },
    ],
  },
  skillGaps: [
    { name: 'Cloud fundamentals', level: 'High priority', progress: 34, tone: 'orange' },
    { name: 'Product thinking', level: 'Build next', progress: 52, tone: 'blue' },
    { name: 'Data storytelling', level: 'In progress', progress: 68, tone: 'teal' },
  ],
  internships: [
    { company: 'Northstar Labs', role: 'Product Data Intern', location: 'Bengaluru · Hybrid', match: 94, posted: '2 days ago', tone: 'teal', initials: 'N' },
    { company: 'Mosaic Finance', role: 'Software Engineering Intern', location: 'Remote · India', match: 88, posted: '4 days ago', tone: 'blue', initials: 'M' },
  ],
  projects: [
    { company: 'Civic Signals', title: 'Build a public transport dashboard', type: 'Industry project', duration: '6 weeks', applicants: 18, tone: 'orange', initials: 'CS' },
    { company: 'GreenGrid Energy', title: 'Forecast energy demand with ML', type: 'Research collaboration', duration: '8 weeks', applicants: 11, tone: 'teal', initials: 'GE' },
  ],
  deadlines: [
    { title: 'Northstar Labs application', meta: 'Portfolio submission', date: 'Today', tone: 'orange' },
    { title: 'Cloud fundamentals assessment', meta: 'Skill assessment', date: '18 Sep', tone: 'teal' },
    { title: 'Civic Signals project briefing', meta: 'Live session', date: '22 Sep', tone: 'blue' },
  ],
  applications: [
    { company: 'Northstar Labs', role: 'Product Data Intern', status: 'Interview', date: 'Updated yesterday', tone: 'teal' },
    { company: 'Mosaic Finance', role: 'Software Engineering Intern', status: 'Under review', date: 'Submitted 5 days ago', tone: 'blue' },
    { company: 'Atlan Systems', role: 'Data Analyst Intern', status: 'Shortlisted', date: 'Updated 1 week ago', tone: 'orange' },
  ],
  notifications: [
    { title: 'Northstar Labs viewed your profile', meta: '2 hours ago', icon: 'Eye', tone: 'teal' },
    { title: 'Your Python assessment is ready', meta: 'Yesterday', icon: 'CheckCircle2', tone: 'blue' },
    { title: 'New opportunity matches your skills', meta: '2 days ago', icon: 'Sparkles', tone: 'orange' },
  ],
  placement: [
    { label: 'Technical readiness', value: 82 },
    { label: 'Profile visibility', value: 72 },
    { label: 'Industry exposure', value: 61 },
  ],
}
