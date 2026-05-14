import { motion } from 'framer-motion'
import { Bell, Lock, Palette, User } from 'lucide-react'
import { useState } from 'react'

const Settings = () => {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const settingsList = [
    {
      icon: User,
      label: 'Profile Settings',
      description: 'Manage your account information',
    },
    {
      icon: Bell,
      label: 'Notifications',
      description: 'Control alert preferences',
      toggle: true,
      value: notifications,
      onChange: setNotifications,
    },
    {
      icon: Lock,
      label: 'Security',
      description: 'Password and authentication settings',
    },
    {
      icon: Palette,
      label: 'Theme',
      description: 'Appearance and display options',
      toggle: true,
      value: darkMode,
      onChange: setDarkMode,
    },
  ]

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold text-text-primary mb-2">Settings</h1>
        <p className="text-text-secondary">Manage your account preferences and settings</p>
      </motion.div>

      <motion.div className="space-y-3" variants={containerVariants}>
        {settingsList.map((setting, index) => {
          const IconComponent = setting.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <IconComponent className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">{setting.label}</h3>
                  <p className="text-sm text-text-secondary">{setting.description}</p>
                </div>
              </div>
              {setting.toggle ? (
                <button
                  onClick={() => setting.onChange?.(!setting.value)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    setting.value ? 'bg-primary' : 'bg-surface'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      setting.value ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              ) : (
                <button className="px-4 py-2 text-primary hover:text-blue-400 transition-colors">
                  Edit
                </button>
              )}
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div variants={itemVariants} className="glass-card p-6">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Account Actions</h2>
        <div className="space-y-2">
          <button className="w-full px-4 py-2 text-left text-red-400 hover:bg-surface rounded-lg transition-colors">
            Export Data
          </button>
          <button className="w-full px-4 py-2 text-left text-red-500 hover:bg-surface rounded-lg transition-colors">
            Delete Account
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Settings
