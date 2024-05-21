import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { error } from 'console'


if(!process.contextIsolated){
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try{
  contextBridge.exposeInMainWorld('context', {
      
  })
} catch(err){
  console.error(err);
  
}