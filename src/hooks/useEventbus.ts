import { onUnmounted } from 'vue'
import mitt from 'mitt';

const emitter: mitt.Emitter = mitt();

// 自定义触发器
const customEmit = (eventName) => {
  emitter.emit(eventName)
}

// 自定义接收器
const customOn = (eventName, callback) => {
  emitter.on(eventName, () => callback())
}
    

/**
 * @eventBus
 */
export const useEventBus = () => {
  onUnmounted(() => {
    emitter.all.clear()
  })

  return { customEmit, customOn }
}
