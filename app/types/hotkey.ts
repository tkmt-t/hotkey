/** ホットキーのコールバック関数型 */
export type HotkeyCallback = (e: KeyboardEvent) => void

/** https://vuetifyjs.com/en/api/use-hotkey/#options */
export interface HotkeyOptions {
  event?: MaybeRef<'keydown' | 'keyup'>
  inputs?: MaybeRef<boolean>
  preventDefault?: MaybeRef<boolean>
  sequenceTimeout?: MaybeRef<number>
}
