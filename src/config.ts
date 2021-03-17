// 是否是本地环境
export const isDev = process.env.NODE_ENV === 'development'

// 真实环境   dev  /  fat  / prod
export const envName = process.env.VUE_APP_ENV_NAME

// 系统名称
export const systemName = 'vue3 antd template'