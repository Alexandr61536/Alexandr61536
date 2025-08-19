import { Stack, Title, useMantineColorScheme } from "@mantine/core"
import type { CSSProperties } from "react"

export type CardsContentListElement = {
    hat?: React.ReactNode,
    text?: React.ReactNode,
}

export type CardsContentType = {
    head?: React.ReactNode,
    title?: React.ReactNode,
    text?: React.ReactNode,
    list?: CardsContentListElement[]
}

export type CardProps = {
    content: CardsContentType,
    style?: {[key: string]: CSSProperties},
    onlyHead?: boolean,
}

export const Card: React.FC<CardProps> = ({content, style, onlyHead}) => {

    const { colorScheme } = useMantineColorScheme()

    const styles: {[key: string]: CSSProperties} = {
        root: {
            minWidth: 250,
            width: "100%",
            borderRadius: "8px",
            boxShadow: colorScheme === 'light' ? `8px 8px 16px rgba(50, 60, 70, 0.56),
             -8px -8px 16px #ffffff`
             : `20px 20px 60px #101010,
             -20px -20px 60px #40403e`,
            padding: "2% 3%",
            animation: "cardEntering 1.5s ease 0s 1 normal forwards",
            maxHeight: "50vh",
            overflowY: "scroll",
            ...style?.root
        },
        title: {
            fontWeight: "700",
            fontSize: "var(--mantine-font-size-lg)",
            ...style?.title
        },
        list: {
            margin: 0,
            listStyleType: "none",
            paddingLeft: 0,
            ...style?.list
        },
        li: {
            textAlign: "left",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            ...style?.li
        },
        hat: {
            fontWeight: "500",
            fontSize: "var(--mantine-font-size-lg)",
            ...style?.hat
        },
        text: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "var(--mantine-font-size-md)",
            ...style?.hat
        },
        head: {
            fontWeight: !onlyHead ? "700" : undefined,
            fontSize: !onlyHead ? "var(--mantine-font-size-lg)" : undefined,
            ...style?.head
        },
    }

    return(
        <Stack gap={0} style={styles["root"]}>
            {onlyHead ? 
                <Stack
                    justify="center"
                    style={{
                        height: "100%",
                    }}
                >
                    <Title size={"xl"} style={styles["head"]}>
                        {content.head}
                    </Title>
                </Stack>
            :
                <span style={styles["head"]}>
                    {content.head}
                </span>
            }
            <span style={styles["title"]}>
                {content.title}
            </span>
            <div style={styles["text"]}>
                {content.text}
            </div>
            <ul style={styles["list"]}>
                {content.list?.map((x, index) =>
                    <li style={styles["li"]}>
                        <Stack gap={3} key={index}>
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