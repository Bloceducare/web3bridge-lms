// declaration.d.ts

// ✅ For PNG images
declare module "*.png" {
  const value: string;
  export default value;
}

// ✅ For SVG used as React components
declare module "*.svg" {
  import * as React from "react";
  const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

// ✅ For SVG used as URLs (via ?url imports)
declare module '*.svg?url' {
  const content: string;
  export default content;
}