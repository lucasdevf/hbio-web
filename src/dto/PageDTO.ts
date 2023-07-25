export interface PageDTO {
  id: string
  name: string
  link: string
  status: 'online' | 'offline'
  archived: boolean
}
