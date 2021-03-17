import { ref, onMounted, nextTick } from 'vue'

/**
 * @description 用户网络是否可用
 * */
export function useFocus() {
  const focusRef = ref<HTMLInputElement| HTMLSelectElement>()

  onMounted(async () => {
    await nextTick(() => {
      focusRef.value?.focus()
    })
  })

  return { focusRef }
}
