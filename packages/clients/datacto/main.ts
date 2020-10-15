import { app } from 'electron';
import serve from 'electron-serve';

import isDevelopment from 'electron-is-dev'

import { registerModules } from '~/core/modules'
import { registerWindows } from '~/windows'

if (isDevelopment) {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
} else {
  serve({ directory: 'app' });
}

app.on('window-all-closed', () => {
  app.quit();
});

registerModules()
registerWindows()

console.log('o/')