import { computed, Signal, signal } from "@angular/core";

export class BaseStore<T> {
    readonly state = signal({} as T);

    public select<K extends keyof T>(key: K): Signal<T[K]> {
        return computed(() => this.state()[key]);
    }

    public set<K extends keyof T>(key: K, data: T[K]): void {
        this.state.update((state) => ({ ...state, [key]: data }));
    }

    public setState(partialState: Partial<T>): void {
        this.state.update((state) => ({ ...state, ...partialState }));
    }
}