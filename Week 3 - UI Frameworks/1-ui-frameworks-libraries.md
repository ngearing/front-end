# Libraries

Libraries are dependencies that your project uses.

A common library for UI development in Bootstrap.

You can install Bootstrap with a package manager, which will manage your dependencies and version.

A bundler is a tool that automatically combines your dependencies so that you don't have to add them all to your document manually.

# Responsive design

Mean a webpage can adapt to the screen size.

1. Flexible grids
2. Fluid images
3. Media Queries

Fixed grid - Fixed columns with flexible margins.
Fluid grid - Flexible columns with fixed margins.
Hybrid grid - Combines both has fixed & fluid width columns.

# Bootstrap

Bootstrap is mobile-first, meaning it's designed from smallest screens upwards. It uses both CSS and Javascript.
First you need to load its css and javascript.
Grid:
`Container <div class="container">
Row      <div class="row">
Col      <div class="col"></div>
Img      <img src="" class="image-fluid" />`

Responsive Breakpoints:
`Extra small devices (portrait phones and down) <576px
Small devices (landscape phones and up) sm ≥576px
Medium devices (tablets and up) md ≥768px
Large devices (desktops and up) lg ≥992px
Extra large devices (large desktops and up) xl ≥1200px
Extra extra large xxl >1400px`

Modifiers:

- Primary
- Secondary
- Success
- Info
- Warning
- Danger
- Light
- Dark

Grid Columns:
`.col-{breakpoint}-{size}` - 1 to 12 - sm,md,lg,xl,xxl

## Components

Card
`<div class="card">
img.card-img-top
.card-title
.card-text

</div>`
