import { app } from 'electron'
import isDevelopment from 'electron-is-dev'
import serve from 'electron-serve'

import { registerModules } from '~/core/modules'
import { registerWindows } from '~/windows'

if (isDevelopment) {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
} else {
  serve({ directory: 'app' })
}

app.on('window-all-closed', () => {
  app.quit()
})

registerModules()
registerWindows()
