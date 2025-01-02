export async function measureFileRenderTime(input: File | string): Promise<number> {
  // Helper function to fetch a file from a given path
  const fetchFileFromPath = async (path: string): Promise<File> => {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to fetch file from path: ${path}`);
      }
      const blob = await response.blob();
      return new File([blob], path.split('/').pop() || 'file', { type: blob.type });
    } catch (error:any) {
      throw new Error(`Error fetching file: ${error.message}`);
    }
  };

  return new Promise(async (resolve, reject) => {
    let file: File;

    // If input is a string, fetch the file from the path
    if (typeof input === 'string') {
      try {
        file = await fetchFileFromPath(input);
      } catch (error) {
        return reject(error);
      }
    } else if (input instanceof File) {
      // If input is already a File object, use it directly
      file = input;
    } else {
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
  });
}
