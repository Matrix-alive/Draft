import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { notificationData } from '../data/notificationData'
import { useAuth } from './AuthContext'

const NotificationContext = createContext(null)
const STORAGE_KEY = 'bridgework-notifications'

function notificationsForRole(role) {
  return notificationData.filter((notification) => notification.roles.includes(role))
}

export function NotificationProvider({ children }) {
  const { user } = useAuth()
  const role = user?.role || 'student'
  const [notifications, setNotifications] = useState(() => notificationsForRole(role))

  useEffect(() => {
    const saved = localStorage.getItem(`${STORAGE_KEY}-${role}`)
    setNotifications(saved ? JSON.parse(saved) : notificationsForRole(role))
  }, [role])

  useEffect(() => {
    if (user) localStorage.setItem(`${STORAGE_KEY}-${role}`, JSON.stringify(notifications))
  }, [notifications, role, user])

  const unreadCount = useMemo(() => notifications.filter((notification) => notification.unread).length, [notifications])
  const markAsRead = (id) => setNotifications((current) => current.map((notification) => notification.id === id ? { ...notification, unread: false } : notification))
  const markAllAsRead = () => setNotifications((current) => current.map((notification) => ({ ...notification, unread: false })))

  return <NotificationContext.Provider value={{ notifications, unreadCount, markAsRead, markAllAsRead }}>{children}</NotificationContext.Provider>
}

export function useNotifications() {
  return useContext(NotificationContext)
}
