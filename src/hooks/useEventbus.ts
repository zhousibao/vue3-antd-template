import mitt, { Emitter } from 'mitt';
const emitter: Emitter = mitt();

/**
 * @eventBus
 */
export const useEventBus = () => {
  // 自定义触发器
  const customEmit = (eventName: string, ...data: any[]) => {
    emitter.emit(eventName, ...data)
  }

  // 自定义接收器
  const customOn = (eventName: any, callback) => {
    emitter.on(eventName, () => callback())
    return () => emitter.off(eventName, callback)
  } 

  return { customEmit, customOn }
}
