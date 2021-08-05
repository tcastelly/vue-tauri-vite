import { Ref, SetupContext } from 'vue';

type Unwrap<T> = T extends Ref<infer U> ? U : T

type Slots = Partial<{
  default: (...args: unknown[]) => unknown,
  [id: string]: (...args: unknown[]) => unknown,
}>

export type Context<T, Z extends {
  vSlots?: Slots
} | unknown = Partial<{ vSlots?: Slots }>> = SetupContext & {
  [P in keyof T]: Unwrap<T[P]>
} & {
  listeners: { [id: string]: (args?: any) => any },
  $attrs: Record<string, unknown>,
  $slots: Z extends { vSlots?: Slots } ? Z['vSlots'] : undefined,
  $emit: SetupContext['emit'],
} & Omit<Z, 'vSlots'>;
