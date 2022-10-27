export interface ResourceItem {
  url: string
  is: 'script' | 'style'
  cache?: boolean
  attributes?: Record<string, string>
}

export declare function loadResource (item: ResourceItem): Promise<void>

export declare function loadResource (...items: ResourceItem[]): Promise<void>
