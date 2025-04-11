import { Stack } from "@mantine/core"
import { IconCircle } from "@tabler/icons-react"
import { CSSProperties } from "react"

type CardProps = {
    content:{
        title?: React.ReactNode,
        text?: React.ReactNode,
        list?: {
            hat?: React.ReactNode,
            text?: React.ReactNode,
        }[]
    }
}

export const Card: React.FC<CardProps> = ({content}) => {

    const styles: {[key: string]: CSSProperties} = {
        root: {
            width: "100%",
            borderRadius: "8px",
            boxShadow: `  8px 8px 16px rgba(50, 60, 70, 0.56),
             -8px -8px 16px #ffffff`,
            padding: "2% 3%",
        },
        title: {
            fontWeight: "700",
            fontSize: "var(--mantine-font-size-lg)",
        },
        list: {
            margin: 0,
            listStyleType: "none",
            paddingLeft: 0,
        },
        li: {
            textAlign: "left",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        hat: {
            
            fontWeight: "500",
            fontSize: "var(--mantine-font-size-lg)",
        },
        text: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "var(--mantine-font-size-md)",
        }
    }

    return(
        <Stack gap={0} style={styles["root"]}>
            <span style={styles["title"]}>
                {content.title}
            </span>
            <div style={styles["text"]}>
                {content.text}
            </div>
            <ul style={styles["list"]}>
                {content.list?.map(x =>
                    <li style={styles["li"]}>
                        <Stack gap={3}>
                            <span style={styles["hat"]}>
                                {x.hat}
                            </span>
                            <div style={styles["text"]}>
                                {x.text}
                            </div>
                        </Stack>
                    </li>
                )}
            </ul>
        </Stack>
    )
}