function measureFileRenderTime(file) {
    return new Promise((resolve, reject) => {
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
    });
}

export { measureFileRenderTime };
//# sourceMappingURL=index.esm.js.map
