/** ストアに登録されるホットキーの設定情報 */
interface HotkeyRecord {
  id: string
  keys: string
  description?: string
}

/** シングルトンのホットキーストア */
const store = ref<HotkeyRecord[]>([])

/** ホットキーストア操作オブジェクト */
export const hotkeyStore = {
  /** 読み取り専用のホットキーストア */
  store: computed(() => store.value),

  /** ホットキーストア登録関数 */
  register(keys: string, description?: string): HotkeyRecord {
    const record: HotkeyRecord = {
      id: crypto.randomUUID(),
      keys,
      description,
    }

    store.value = [...store.value, record]

    return record
  },

  /** ホットキーストア解除関数 */
  unregister(id: string): void {
    store.value = store.value.filter(item => item.id !== id)
  },
}
