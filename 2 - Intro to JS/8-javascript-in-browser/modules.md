# Javascript Modules

Modules are standalone pieces of code.

All javascript added to the window variable are global.

CommonJS
Works on the server... Not understood by browsers.

Modules ES6

<script type="module">
    import { foo } from './foo.js'; // Import a single export
    console.log(foo);               // Output: "bar"
</script>
