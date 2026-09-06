import { activity, dashboardData } from '../data/mockData'

// The UI consumes this boundary so mock responses can become REST calls later.
const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 180))

export const api = {
  getDashboard: (role) => wait(dashboardData[role]),
  getActivity: () => wait(activity),
  signIn: ({ role, name }) => wait({ id: 'dev-user-01', role, name: name || 'Demo user' }),
  signOut: () => wait(true),
}
