function measureFileRenderTime(file) {
    return new Promise((resolve, reject) => {
        const startTime = performance.now();
        const reader = new FileReader();
        reader.onloadend = () => {
            const endTime = performance.now();
            const timeTaken = parseFloat((endTime - startTime).toFixed(2)); // Format the number to two decimal places
            resolve(timeTaken); // Resolve with the formatted number
        };
        reader.onerror = () => reject(new Error('Error reading file'));
        reader.readAsDataURL(file);
    });
}

export { measureFileRenderTime };
//# sourceMappingURL=index.esm.js.map
