/** シングルトンのホットキーストア */
const store = ref<HotkeyRecord[]>([])

/**
 * ホットキーストアの操作コンポーザブル
 *
 * 画面内で利用するホットキー情報を一元管理する。
 *
 * @returns
 * - store: 登録済みホットキー一覧 (読み取り専用)
 * - register: ホットキーをストアへ登録する関数
 * - unregister: ホットキーをストアから削除する関数
 */
export const useHotkeyStore = () => {
  const register = (input: Hotkey): HotkeyRecord => {
    const record: HotkeyRecord = {
      id: crypto.randomUUID(),
      ...input,
    }
    store.value = [...store.value, record]
    return record
  }

  const unregister = (id: string): void => {
    store.value = store.value.filter(item => item.id !== id)
  }

  return {
    store: computed(() => store.value),
    register,
    unregister,
  }
}
