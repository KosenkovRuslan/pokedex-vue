import notifierJs from 'notifier-js'

import './notify.scss'

export const notify = {
  show: (name, message, type = '') => notifierJs.show(name, message, type, '', 0),
  success: (name, message) => notify.show(name, message, 'success'),
  warning: (name, message) => notify.show(name, message, 'warning'),
  error: (name, message) => notify.show(name, message, 'danger')
}
