// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";

// Base enumerator definition
/** See the [Rust documentation for `LineBreakStrictness`](https://docs.rs/icu/latest/icu/segmenter/enum.LineBreakStrictness.html) for more information.
*/
export class LineBreakStrictness {
    #value = undefined;

    static #values = new Map([
        ["Loose", 0],
        ["Normal", 1],
        ["Strict", 2],
        ["Anywhere", 3]
    ]);

    static getAllEntries() {
        return LineBreakStrictness.#values.entries();
    }

    constructor(value) {
        if (arguments.length > 1 && arguments[0] === diplomatRuntime.internalConstructor) {
            // We pass in two internalConstructor arguments to create *new*
            // instances of this type, otherwise the enums are treated as singletons.
            if (arguments[1] === diplomatRuntime.internalConstructor ) {
                this.#value = arguments[2];
                return;
            }
            return LineBreakStrictness.#objectValues[arguments[1]];
        }

        if (value instanceof LineBreakStrictness) {
            return value;
        }

        let intVal = LineBreakStrictness.#values.get(value);

        // Nullish check, checks for null or undefined
        if (intVal == null) {
            return LineBreakStrictness.#objectValues[intVal];
        }

        throw TypeError(value + " is not a LineBreakStrictness and does not correspond to any of its enumerator values.");
    }

    get value() {
        return [...LineBreakStrictness.#values.keys()][this.#value];
    }

    get ffiValue() {
        return this.#value;
    }
    static #objectValues = [
        new LineBreakStrictness(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 0),
        new LineBreakStrictness(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 1),
        new LineBreakStrictness(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 2),
        new LineBreakStrictness(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 3),
    ];

    static Loose = LineBreakStrictness.#objectValues[0];
    static Normal = LineBreakStrictness.#objectValues[1];
    static Strict = LineBreakStrictness.#objectValues[2];
    static Anywhere = LineBreakStrictness.#objectValues[3];
}