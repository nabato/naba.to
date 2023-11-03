import NextImage from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
  Image: props => <NextImage {...props} />
}

export function Mdx({ code }) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
