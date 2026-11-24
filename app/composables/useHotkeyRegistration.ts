/**
 * ショートカットキーのUI用データをストアに登録する。
 * unmounted 時に自動的にストアから削除する。
 *
 * @param keys - キーの組み合わせ（例: 'ctrl+s', 'escape'）
 * @param description - UI 表示用の説明文
 */
export const useHotkeyRegistration = (
  keys: string,
  description?: string,
) => {
  if (!import.meta.client) {
    return
  }

  const record = hotkeyStore.register(keys, description)

  onUnmounted(() => {
    hotkeyStore.unregister(record.id)
  })
}
