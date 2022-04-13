import type { Ref, SetupContext } from 'vue';

type Unwrap<T> = T extends Ref<infer U> ? U : T

type Slots = Partial<{
  default: (...args: unknown[]) => unknown,
  [id: string]: (...args: unknown[]) => unknown,
}>

type RemoveReadonly<T> = {
  -readonly [P in keyof T]: T[P];
};

type EmitsAsObj<T extends {
  [id: string]: any
}> = {
  [K in Extract<keyof T, string>]: (...args: Parameters<T[K]>) => any
}

type EmitsAsArr<T extends ReadonlyArray<any>> = RemoveReadonly<T>;

export type Emits<T extends (ReadonlyArray<any> | object)> = T extends ReadonlyArray<any>
  ? EmitsAsArr<T>
  : EmitsAsObj<T>;

export type Context<T extends (...args: any[]) => any, Z extends {
  vSlots?: Slots
} | unknown = Partial<{ vSlots?: Slots }>> = SetupContext & {
  [P in keyof ReturnType<T>]: Unwrap<ReturnType<T>[P]>
} & {
  listeners: { [id: string]: (args?: any) => any },
  $attrs: Record<string, unknown>,
  $slots: Z extends { vSlots ?: Slots } ? Z['vSlots'] : never,
  $emit: SetupContext['emit'],
} & Omit<Z, 'vSlots'>;
