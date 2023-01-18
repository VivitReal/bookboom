import backendApi from './backendApi'
import mockApi from './mockApi'

// VUE_APP_MODE = 'backend' || 'mock'
const mode = process.env.VUE_APP_MODE

export default mode === 'backend' ? backendApi : mockApi
