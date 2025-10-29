import { type ReactNode } from "react"

type ScrollShowerProps = {
    children: ReactNode[],
    index: number,
}

export const ScrollShower: React.FC<ScrollShowerProps> = ({children, index}) => {
    
    return ( 
        <div 
            style={{
                width: "100%", 
                height: "100%"
            }}
        >
            {children.map((elem, i) => 
                <div key={i} style={{display: i !== index ? 'none' : undefined}}>
                    {elem}
                </div>
            )}
        </div>
    )
}