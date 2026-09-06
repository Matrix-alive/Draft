export const academiaDashboardData = {
  institution: {
    name: 'Eastbridge Institute of Technology',
    faculty: 'School of Computing & Design',
    location: 'Pune · Maharashtra',
    initials: 'EI',
    accredited: 'NAAC A+ accredited',
  },
  overview: [
    { label: 'Students', value: '1,284', change: '+64 this term', tone: 'blue' },
    { label: 'Skill readiness', value: '74%', change: '+8.2% this year', tone: 'teal' },
    { label: 'Placement rate', value: '86%', change: '+6.4% this year', tone: 'orange' },
    { label: 'Industry partners', value: '32', change: '8 active programs', tone: 'blue' },
  ],
  skillGaps: [
    { skill: 'Cloud & DevOps', students: 68, target: 82, color: '#d97a42' },
    { skill: 'Data storytelling', students: 61, target: 78, color: '#3868a9' },
    { skill: 'Product thinking', students: 54, target: 72, color: '#147d78' },
    { skill: 'Professional communication', students: 47, target: 68, color: '#9fb6c1' },
  ],
  placementTrend: [
    { term: '2023', placed: 68, readiness: 61 },
    { term: '2024', placed: 74, readiness: 66 },
    { term: '2025', placed: 80, readiness: 71 },
    { term: '2026', placed: 86, readiness: 74 },
  ],
  partnerships: [
    { name: 'Northstar Labs', focus: 'Product data & internships', students: 46, status: 'Active', tone: 'teal', initials: 'NL' },
    { name: 'Mosaic Finance', focus: 'Fintech studio program', students: 28, status: 'Active', tone: 'blue', initials: 'MF' },
    { name: 'GreenGrid Energy', focus: 'Climate data research', students: 19, status: 'Renewing', tone: 'orange', initials: 'GE' },
  ],
  projects: [
    { title: 'Climate data sprint', partner: 'Civic Signals · Computer Science', students: 18, date: '01 Oct', status: 'In progress', tone: 'teal' },
    { title: 'Design systems studio', partner: 'Northstar Labs · Visual Design', students: 14, date: '14 Oct', status: 'Planning', tone: 'blue' },
    { title: 'Future of Work Lab', partner: 'IIT Bombay · Management', students: 32, date: '24 Sep', status: 'Confirmed', tone: 'orange' },
  ],
  notifications: [
    { title: 'Northstar Labs added 12 mentor slots', meta: 'Today, 10:08 AM', icon: 'UsersRound', tone: 'teal' },
    { title: 'Placement report is ready for review', meta: 'Yesterday', icon: 'FileBarChart', tone: 'blue' },
    { title: 'Cloud skills gap rose 4% this term', meta: '2 days ago', icon: 'TrendingUp', tone: 'orange' },
  ],
}
