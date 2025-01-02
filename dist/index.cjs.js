'use strict';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function measureFileRenderTime(input) {
    return __awaiter(this, void 0, void 0, function* () {
        // Helper function to fetch a file from a given path
        const fetchFileFromPath = (path) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(path);
                if (!response.ok) {
                    throw new Error(`Failed to fetch file from path: ${path}`);
                }
                const blob = yield response.blob();
                return new File([blob], path.split('/').pop() || 'file', { type: blob.type });
            }
            catch (error) {
                throw new Error(`Error fetching file: ${error.message}`);
            }
        });
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let file;
            // If input is a string, fetch the file from the path
            if (typeof input === 'string') {
                try {
                    file = yield fetchFileFromPath(input);
                }
                catch (error) {
                    return reject(error);
                }
            }
            else if (input instanceof File) {
                // If input is already a File object, use it directly
                file = input;
            }
            else {
                return reject(new Error('Invalid input. Must be a File object or file path.'));
            }
            const startTime = performance.now(); // Start measuring time
            const reader = new FileReader();
            // Triggered when the file is successfully read
            reader.onloadend = () => {
                const endTime = performance.now(); // End measuring time
                const timeTaken = endTime - startTime; // Calculate the time taken
                resolve(timeTaken); // Resolve the promise with the render time
            };
            // Triggered if there's an error in reading the file
            reader.onerror = () => reject(new Error('Error reading file'));
            reader.readAsDataURL(file); // Read the file as a data URL
        }));
    });
}

exports.measureFileRenderTime = measureFileRenderTime;
//# sourceMappingURL=index.cjs.js.map
