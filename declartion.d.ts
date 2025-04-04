declare module "*.png" {
  const value: string;
  export default value;
}

// declare module "*.svg" {
//   const value: string;
//   export default value;
// }

declare module '*.svg' {
  import { FC, SVGProps } from 'react'
  const content: FC<SVGProps<SVGElement>>
  export default content
}

declare module '*.svg?url' {
  const content: any
  export default content
}