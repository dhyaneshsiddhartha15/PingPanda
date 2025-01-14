import { cn } from "@/utils"
import { HTMLAttributes, ReactNode } from "react"

interface HeadingProps extends HTMLAttributes <HTMLHeadElement>{
    children?:ReactNode
}
export const Heading=({children,className,...props}:HeadingProps)=>{
return (
    <h1 className={cn(
        "text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tighter text-zinc-800",className
    )}>

 {children}
 </h1>
)

}