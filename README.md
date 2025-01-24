# Integration of Tailwind CSS 4 into GrapesJS
This guide shows how to implement Tailwind CSS version 4 into the GrapesJS iframe editor, allowing you to take full advantage of its features and flexibility directly within the editor. Tailwind CSS is a popular utility-first framework for building modern, responsive web designs. When combined with GrapesJS, an open-source framework for creating drag-and-drop web editors, it provides a powerful toolset for developers and designers.

## Installation
```bash
npm i grapesjs-tailwind-4
```

## Usage
```html
import grapesjs_tailwind_plugin from 'grapesjs-tailwind-4';

grapesjs.init({
  plugins: [grapesjs_tailwind_plugin],
});
```