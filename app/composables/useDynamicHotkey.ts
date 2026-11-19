/**
 * 有効・無効を動的に切り替えられる Vuetify useHotkey のラッパー関数
 *
 * @param keys - キーの組み合わせ（例: 'ctrl+s', 'escape'）
 * @param callback - コールバック関数
 * @param enabled - ショートカットを有効にするかどうか
 * @param options - Vuetify 標準の HotkeyOptions
 */
export const useDynamicHotkey = (
  keys: string,
  callback: HotkeyCallback,
  enabled: Ref<boolean>,
  options?: HotkeyOptions,
) => {
  // 解除関数を保持する
  let cleanup: (() => void) | null = null

  // 有効／無効の切り替え
  watch(enabled,
    (isEnabled) => {
      if (isEnabled) {
        // 有効化
        cleanup = useHotkey(keys, callback, options)
      }
      else if (cleanup) {
        // 無効化
        cleanup()
        cleanup = null
      }
    },
    { immediate: true },
  )
}
