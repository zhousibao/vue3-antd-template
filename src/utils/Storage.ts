// 默认缓存期限为7天
const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7

/**
 * 创建本地缓存对象
 */
const createStorage = ({ prefixKey = '', storage = localStorage } = {}) => {
  const Storage = class {
    private storage = storage
    private prefixKey?: string = prefixKey

    private getKey(key: string) {
      return `${this.prefixKey}${key}`.toUpperCase()
    }

    /**
     * @description 设置缓存
     * @param {string} key 缓存键
     * @param {*} value 缓存值
     * @param expire
     */
    set(key: string, value: any, expire: number | undefined = DEFAULT_CACHE_TIME) {
        const stringData = JSON.stringify({
            value,
            expire: expire ? Date.now() + expire * 1000 : undefined,
        })
        this.storage.setItem(this.getKey(key), stringData)
    }

    /**
     * 读取缓存
     * @param {string} key 缓存键
     * @param {*=} default 默认值
     */
    get(key: string, def: any = null) {
        const item = this.storage.getItem(this.getKey(key))
        if (item) {
            try {
                const data = JSON.parse(item)
                const { value, expire } = data
                // 在有效期内直接返回
                if (expire === null || expire >= Date.now()) {
                    return value
                }
                this.remove(this.getKey(key))
            } catch (e) {
                return def
            }
        }
        return def
    }

    /**
     * 从缓存删除某项
     * @param {string} key
     */
    remove(key: string) {
        this.storage.removeItem(this.getKey(key))
    }

    /**
     * 清空所有缓存
     * @memberOf Cache
     */
    clear(): void {
        this.storage.clear()
    }
  }
  return new Storage()
}
export const storage = createStorage()
export default Storage
