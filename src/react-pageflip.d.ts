declare module 'react-pageflip' {
  import { Component, ReactNode } from 'react'
  interface FlipBookProps {
    width: number
    height: number
    size?: string
    minWidth?: number
    maxWidth?: number
    minHeight?: number
    maxHeight?: number
    showCover?: boolean
    mobileScrollSupport?: boolean
    drawShadow?: boolean
    flippingTime?: number
    usePortrait?: boolean
    startZIndex?: number
    autoSize?: boolean
    maxShadowOpacity?: number
    showPageCorners?: boolean
    disableFlipByClick?: boolean
    style?: object
    startPage?: number
    className?: string
    children?: ReactNode
  }
  export default class HTMLFlipBook extends Component<FlipBookProps> {}
}