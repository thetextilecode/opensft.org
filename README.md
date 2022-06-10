# opensft.org

[![Netlify Status](https://api.netlify.com/api/v1/badges/69bdacdf-1cd3-4858-94d7-723716dff0b5/deploy-status)](https://app.netlify.com/sites/opensft/deploys)

## Installation

`yarn`

## Build & Run

`yarn build`
`yarn start`

## Development

`yarn dev`

Please do not modify the `next-env.d.ts` file. It ensures Next.js types are picked up by the TypeScript compiler. If you need to add an interface please add it to `types.d.ts`.

## Other Commands

Lint:
`yarn lint`

Sass:
`yarn sass`

## Components

### Tooltippy

Pass a tooltip from within your MDX file using React Bootstrap's [Tooltip](https://react-bootstrap.netlify.app/components/overlays/#tooltips), 
and a custom wrapper for it:

```mdxjs
import Tooltippy from "./Tooltippy";

## Hello
An <Tooltippy tooltipText={`Free as in free speech, not free beer.`} triggerText={`inline`}/> tooltip.
```

