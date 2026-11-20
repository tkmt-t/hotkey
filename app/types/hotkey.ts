/** ホットキーのコールバック関数型 */
export type HotkeyCallback = (e: KeyboardEvent) => void

/** https://vuetifyjs.com/en/api/use-hotkey/#options */
export interface HotkeyOptions {
  event?: MaybeRef<'keydown' | 'keyup'>
  inputs?: MaybeRef<boolean>
  preventDefault?: MaybeRef<boolean>
  sequenceTimeout?: MaybeRef<number>
}

/** ホットキーの設定情報 */
export interface Hotkey {
  keys: string
  description?: string
}

/** ストアに登録されたホットキーの設定情報 */
export interface HotkeyRecord extends Hotkey {
  id: string
}
