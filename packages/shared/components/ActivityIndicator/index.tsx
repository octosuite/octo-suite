import React from 'react'

import { ActivityIndicatorProps } from './types'

const ActivityIndicator: React.VFC<ActivityIndicatorProps> = ({
  size,
  width,
  height,
  ...rest
}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      {...rest}
      height={size || height || 32}
      width={size || width || 32}
    >
      <path
        opacity={0.25}
        d="M16 0a16 16 0 000 32 16 16 0 000-32m0 4a12 12 0 010 24 12 12 0 010-24"
      />
      <path d="M16 0a16 16 0 0116 16h-4A12 12 0 0016 4z">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 16 16"
          to="360 16 16"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

export { ActivityIndicator }
