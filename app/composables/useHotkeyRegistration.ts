/**
 * ショートカットキーを登録するコンポーザブル。
 *
 * useDynamicHotkey によるホットキー登録と、
 * ホットキーストアへのメタ情報登録をまとめて行う。
 *
 * @param keys - キーの組み合わせ（例: 'ctrl+s', 'escape'）
 * @param callback - ショートカット実行時のコールバック
 * @param enabled - ホットキーの有効状態
 * @param description - UI 表示用の説明文
 * @param options - Vuetify 標準の HotkeyOptions
 */
export const useHotkeyRegistration = (
  keys: string,
  callback: HotkeyCallback,
  enabled: MaybeRefOrGetter<boolean>,
  description: string,
  options?: HotkeyOptions,
) => {
  useDynamicHotkey(keys, callback, enabled, options)

  const { register, unregister } = useHotkeyStore()

  const input: Hotkey = {
    keys,
    description,
  }

  let record: HotkeyRecord | undefined

  if (!import.meta.client) {
    return
  }

  watch(
    () => toValue(enabled),
    (isEnabled) => {
      if (isEnabled) {
        if (!record) {
          record = register(input)
        }
      }
      else {
        if (record) {
          unregister(record.id)
          record = undefined
        }
      }
    },
    { immediate: true },
  )

  onUnmounted(() => {
    if (record) {
      unregister(record.id)
      record = undefined
    }
  })
}
