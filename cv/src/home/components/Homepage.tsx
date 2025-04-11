import { Center, Group, Stack } from "@mantine/core"
import { IconBooks, IconLocation, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react"
import { CSSProperties } from "react"
import { Card } from "./Card"
import { cardsContent } from "../content/cards"

export const Homepage: React.FC = () => {

    const leftHat = [
        "Мокичев Александр Ильич",
        "Frontend-разработчик",
    ]

    const styles: {[key: string]: CSSProperties} = {
        rowSlyles: {
            width: "fit-content", 
            display: "flex", 
            flexDirection: "row", 
            alignItems: "center",
            justifyContent: "center",
            fontSize: "var(--mantine-font-size-sm)",
        },
        cardsListStyle: {
            width: "80%",
            margin: "auto",
        },
    }

    return(
        <Stack gap={30}>
           <Group grow style={{alignItems: "flex-start"}}>
                <Stack align="flex-start">
                    <Stack align="flex-start" gap={3}>
                        {leftHat.map(x=>
                            <div style={styles["rowSlyles"]}>{x}</div>
                        )}
                    </Stack>
                </Stack>
            </Group>
            <Stack style={styles["cardsListStyle"]} gap={40}>
                {cardsContent.map(x=>
                    <Card
                        content={x}
                    />
                )}
            </Stack>
        </Stack>
    )
}