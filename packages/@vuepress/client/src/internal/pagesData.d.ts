import type { PageData } from '@vuepress/shared'

declare module '@internal/pagesData' {
  export type { PageData }
  export const pagesData: Record<string, PageData>
}