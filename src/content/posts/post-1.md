---
title: Como posicionar con Flexbox
date: 2024-10-22
tags: ["HTML", "CSS"]
---

Comencemos escribiendo esto dentro nuestra etiqueta `<body></body>`

```html
<div class="container">
  <div class="box">
    <p>Centrando un div</p>
  </div>
</div>
```
Eliminemos los elementos base que nos deja el navegador

```css
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
```
## Flexbox

Hay distintas formas de alinear nuestro contenido haciendo uso del eje <strong>X</strong> y <strong>Y</strong>

```css
.container {
    display: flex;
    height: 100vh;
}
```

<img src="/justify-content.webp" alt="justify-content-flexbox" >

La propiedad `justify-content` te permitirá posicionar los elementos dentro de `.container` en el eje <strong>X</strong>

<span>Este eje se invertirá al usar `flex-direction: column`</span>

```css
.container {
  display: flex;
  justify-content: center;
  /* 
  flex-start: Alinear items flex desde el comienzo
  flex-end: Alinear items desde el final
  center: Alinear items en el centro
  space-between: Distribuir items uniformemente (El primer item al inicio, el último al final)
  space-around: Distribuir items uniformemente (Los items tienen el mismo espacio a su alrededor)
  */
  height: 100vh;
}
```

La propiedad `align-items` te permitirá posicionar los elementos dentro de `.container` en el eje <strong>Y</strong>

<span>Este eje se invertirá al usar `flex-direction: column`</span>

```css
.container {
  display: flex;
  align-items: center;
  /* 
  center: Agrupa los elementos alrededor del centro
  start: Agrupa los elementos desde el inicio
  end: Agrupa los elementos desde el final
  */
  height: 100vh;
}
```