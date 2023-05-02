interface IfProsp {
    teste: boolean
    children: any
}

export default function If(props: IfProsp) {
    if (props.teste) {
        return props.children
    } else {
        return null
    }
}