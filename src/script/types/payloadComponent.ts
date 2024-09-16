export interface Component {
    code: string
    codeJSX: string
    componentParent?: number | null
    componentParentLeft?: number | null
    componentParentRight?: number | null
    componentsChildren?: number | null
    created_at?: string
    id?: number
    main_component?: boolean | null
    name: string
    owner: string
    projectHostory?: string | null
    projectid?: number | null
    props?: string
    public?: boolean
    type: 'hooks' | 'function' | 'component'
}