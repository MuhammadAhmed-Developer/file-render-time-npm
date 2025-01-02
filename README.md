# File Render Time

A simple and optimized JavaScript and TypeScript library to measure file upload render time (in milliseconds). This package allows you to measure the time it takes for a file to be read and processed using the FileReader API.

## Features

- Measure file render time in **JavaScript** and **TypeScript**.
- Returns render time in **milliseconds**.
- Optimized for both **CommonJS** and **ES module** environments.

## Installation

You can install the package via **npm** or **yarn**:

### npm

```bash
npm install file-render-time
```

## Example

```
import { measureRenderTime } from 'file-render-time';
```

```
measureRenderTime('path/to/your/file')
  .then(time => console.log(`File render time: ${time} ms`))
  .catch(error => console.error(error));

```
