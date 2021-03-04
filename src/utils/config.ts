const defaultSettings = require('../settings')


// 是否是本地环境
export const isDev = process.env.NODE_ENV === 'development'

// 系统名称
export const systemName = defaultSettings.title