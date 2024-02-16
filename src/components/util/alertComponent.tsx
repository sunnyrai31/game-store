import { Fragment, ReactNode } from "react"

interface alertProps {
    type: string
    text?: string,
    children?: ReactNode
}
interface MsgClassType {
    [key: string]: string;
}
const MsgClass: MsgClassType = {
    'primary': 'alert alert-primary',
    'secondary': 'alert alert-secondary',
    'success': 'alert alert-success',
    'danger': 'alert alert-danger',
    'warning': 'alert alert-warning',
    'info': 'alert alert-info',
    'light': 'alert alert-light',
    'dark': 'alert alert-dark'
}
export const AlertComponent = ({ text, type, children }: alertProps) => {
    return (
        <Fragment>
            <span className={MsgClass[type]} role="alert">
                {children ? children : text}
            </span>
        </Fragment>
    )
}
