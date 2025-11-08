import { MetaType } from './meta'

export type NewsType = {
  contents: NewsContentsType[]
} & MetaType

export type NewsContentsType = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  category: {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    name: string
  }
  open: string
}
