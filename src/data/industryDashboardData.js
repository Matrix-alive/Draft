export const industryDashboardData = {
  company: {
    name: 'Northstar Labs',
    tagline: 'Building calm, intelligent tools for complex work.',
    industry: 'Product & Data · Bengaluru',
    initials: 'NL',
    activePrograms: 3,
  },
  overview: [
    { label: 'Active opportunities', value: '08', change: '+2 this month', tone: 'orange' },
    { label: 'Applications received', value: '146', change: '+18% this week', tone: 'blue' },
    { label: 'Campus partners', value: '12', change: '3 active projects', tone: 'teal' },
    { label: 'Time to shortlist', value: '4.2d', change: '1.1d faster', tone: 'orange' },
  ],
  opportunities: [
    { title: 'Product Data Intern', type: 'Internship', applicants: 42, status: 'Accepting', deadline: '26 Sep 2026', skills: ['SQL', 'Python'], tone: 'orange' },
    { title: 'Frontend Engineer Intern', type: 'Internship', applicants: 31, status: 'Accepting', deadline: '02 Oct 2026', skills: ['React', 'UX'], tone: 'blue' },
    { title: 'Climate data sprint', type: 'Project', applicants: 18, status: 'Reviewing', deadline: '18 Sep 2026', skills: ['Analytics', 'Research'], tone: 'teal' },
    { title: 'Design systems study', type: 'Project', applicants: 12, status: 'Draft', deadline: '10 Oct 2026', skills: ['Figma', 'Systems'], tone: 'orange' },
  ],
  skillDistribution: [
    { name: 'Data & analytics', value: 34, color: '#147d78' },
    { name: 'Software engineering', value: 27, color: '#3868a9' },
    { name: 'Product & design', value: 21, color: '#d97a42' },
    { name: 'Communication', value: 18, color: '#9fb6c1' },
  ],
  collaborations: [
    { title: 'Future of Work Lab', partner: 'IIT Bombay · Faculty of Management', date: '24 Sep', status: 'Planning', tone: 'blue' },
    { title: 'Climate data sprint', partner: 'Civic Signals · Computer Science', date: '01 Oct', status: 'Confirmed', tone: 'teal' },
    { title: 'Design systems studio', partner: 'Srishti Institute of Art', date: '14 Oct', status: 'Planning', tone: 'orange' },
  ],
  applicants: [
    { name: 'Aisha Khan', role: 'Product Data Intern', skills: 'Python · SQL · Tableau', score: '94%', initials: 'AK', tone: 'teal' },
    { name: 'Rohan Mehta', role: 'Frontend Engineer Intern', skills: 'React · TypeScript · UX', score: '91%', initials: 'RM', tone: 'blue' },
    { name: 'Meera Iyer', role: 'Climate data sprint', skills: 'Python · Research · GIS', score: '88%', initials: 'MI', tone: 'orange' },
  ],
  notifications: [
    { title: '18 new applications for Product Data Intern', meta: 'Today, 9:42 AM', icon: 'UsersRound', tone: 'orange' },
    { title: 'IIT Bombay accepted your collaboration invite', meta: 'Yesterday', icon: 'Handshake', tone: 'teal' },
    { title: 'Shortlist deadline is in 3 days', meta: 'Yesterday', icon: 'Clock3', tone: 'blue' },
  ],
}
