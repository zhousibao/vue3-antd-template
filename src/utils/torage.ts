const ls = window.localStorage
const prefixKey = 'vue3_antd_template:'


const getKey = (key: string) => `${prefixKey}${key}`

/**
 * @设置
 * @param {*} key 键名
 * @param {*} val 值
 * @param {*} expire (可选) 有效时间长度 单位毫秒
 */
export const setItem = (key: string, value: any, expire?: number) => {
  try {
    const stringData = JSON.stringify({
      value,
      expire: expire ? Date.now() + expire * 1000 : undefined,
    })
    ls.setItem(getKey(key), stringData)
  } catch (e) {
    console.log('setItem error', e)
  }
}

/**
 * @获取
 * @param {*} key 键名
 */
export const getItem = (key: string, defaultVal?: any) => {
  try {
    const stringData = ls.getItem(getKey(key))
    if(stringData){
      const data = JSON.parse(stringData)
      const { value, expire } = data
      // 在有效期内直接返回
      if (expire === undefined || expire >= Date.now()) {
        return value
      }
      ls.remove(getKey(key))
    }
    return defaultVal
  } catch (e) {
    console.log('getItem error', e)
  }
}

/**
 * @删除
 * @param {*} key 键名
 */
export const removeItem = (key: string) => {
  ls.removeItem(getKey(key))
}

/**
 * @清空
 */
export const clear = () => {
  ls.clear()
}
