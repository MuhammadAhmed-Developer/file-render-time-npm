# File Render Time

A simple and optimized JavaScript and TypeScript library to measure file upload render time (in milliseconds).

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
import { measureFileRenderTime } from 'file-render-time';
```

```
measureFileRenderTime(file)
  .then(time => console.log(`File render time: ${time} ms`))
  .catch(error => console.error(error));

```
