
import wasmUrl from './main.wasm?url'
// https://github.com/torch2424/wasm-by-example/blob/master/demo-util/
export const wasmBrowserInstantiate = async (wasmModuleUrl, importObject) => {
    let response = undefined;

    // Check if the browser supports streaming instantiation
    if (WebAssembly.instantiateStreaming) {
        // Fetch the module, and instantiate it as it is downloading
        response = await WebAssembly.instantiateStreaming(
            fetch(wasmModuleUrl),
            importObject
        );
    } else {
        // Fallback to using fetch to download the entire module
        // And then instantiate the module
        const fetchAndInstantiateTask = async () => {
            const wasmArrayBuffer = await fetch(wasmModuleUrl).then(response =>
                response.arrayBuffer()
            );
            return WebAssembly.instantiate(wasmArrayBuffer, importObject);
        };

        response = await fetchAndInstantiateTask();
    }

    return response;
};

const go = new Go(); // Defined in wasm_exec.js. Don't forget to add this in your index.html.

const importObject = go.importObject;
let wasmModule;

export const InitWasm = async () => {
    wasmModule = await wasmBrowserInstantiate(wasmUrl, importObject);
    go.run(wasmModule.instance);
}

export const ExpressionIt = (s) => {
    let result
    try {
        result = window.expression(s)
    } catch (e) {
        console.log(e)
        result = 'ERROR'
    }
    return result
};



