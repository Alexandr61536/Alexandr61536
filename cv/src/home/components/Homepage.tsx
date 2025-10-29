import { Group, Stack, Switch, useMantineColorScheme } from "@mantine/core"
import { IconMoon, IconSun } from "@tabler/icons-react"
import { useState, type CSSProperties } from "react"
import { COLORS } from "../../styles/vars"
import { Section, SectionTypeEnum } from "./Section"
import { SectionsContent } from "../content/Sections"
import { ScrollShower } from "./ScrollShower"
import { PageControler } from "./PageController"

export const Homepage: React.FC = () => {

	const { colorScheme, setColorScheme } = useMantineColorScheme({keepTransitions: true})

    const [pageIndex, setPageIndex] = useState(0)

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
            fontSize: "var(--mantine-font-size-md)",
        },
        leftHat: {
            animation: "leftHatEntering 1s ease 0s 1 normal forwards",
        },
        rightHat: {
            animation: "rightHatEntering 1s ease 0s 1 normal forwards",
        },
        hat: {
            width: "100%",
            alignItems: "flex-start",
            padding: "clamp(0.9rem, 2.9vw, 1.4rem) clamp(0.9rem, 2.9vw, 1.4rem) calc(1 * clamp(0.9rem, 2.9vw, 1.4rem)) clamp(0.9rem, 2.9vw, 1.4rem)"
        },
    }

    return(
        <Stack gap={30} style={{color: colorScheme === 'light' ? COLORS.prettyGrayBlue : "var(--mantine-color-gray-1)", width: "100%", height: "100%"}}>
           <Group grow style={styles["hat"]}>
                <Stack align="flex-start">
                    <Stack align="flex-start" gap={3} style={styles["leftHat"]}>
                        {leftHat.map((x, index)=>
                            <div key={index} style={styles["rowSlyles"]}>{x}</div>
                        )}
                    </Stack>
                </Stack>
                <Stack align="flex-end">
                    <Stack align="flex-end" gap={3} style={styles["rightHat"]}>
                        <Switch
                            size="md"
                            offLabel={<IconMoon size={18}/>}
                            onLabel={<IconSun size={18}/>}
                            checked={colorScheme === 'light'}
                            onChange={(e)=>setColorScheme(e.currentTarget.checked ? 'light' : 'dark')}
                            styles={{track: {
                                padding: "5px 0",
                                backgroundColor: colorScheme === 'light' ? `${COLORS.prettyGrayBlue} !important` : "var(--mantine-color-gray-1) !important",
                            }}}
                        />
                    </Stack>
                </Stack>
            </Group>
            <ScrollShower
                index={pageIndex}
            >
                <Section
                    title={SectionsContent["experience"].title}
                    contents={SectionsContent["experience"].cards}
                    type={SectionTypeEnum.horisontal}
                />
                <Section
                    title={SectionsContent["education"].title}
                    contents={SectionsContent["education"].cards}
                    type={SectionTypeEnum.vertical}
                />
                <Section
                    title={SectionsContent["hardSkills"].title}
                    contents={SectionsContent["hardSkills"].cards}
                    type={SectionTypeEnum.vertical}
                />
                <Section
                    title={SectionsContent["softSkills"].title}
                    contents={SectionsContent["softSkills"].cards}
                    type={SectionTypeEnum.vertical}
                />
            </ScrollShower>
            <PageControler
                max={Object.keys(SectionsContent).length - 1}
                index={pageIndex}
                setIndex={setPageIndex}
            />
        </Stack>
    )
}