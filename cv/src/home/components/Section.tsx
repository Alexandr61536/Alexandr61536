import { Stack, Title } from "@mantine/core"
import { Card } from "./Card"
import type { CardsContentType } from './Card'
import { Carousel } from "@mantine/carousel"

export enum SectionTypeEnum {
    vertical    = 0,
    horisontal  = 1,
}

type SectionProps = {
    title?: string,
    contents: CardsContentType[],
    type: SectionTypeEnum,
}

export const Section: React.FC<SectionProps> = ({title, contents, type}) => {
    const styles = {
        cardsListStyle: {
            width: "80%",
            margin: "auto",
        },
        root: {
            marginBottom: "calc(2 * clamp(0.9rem, 2.9vw, 1.4rem))",
            maxWidth: "100vw",
        },
        title: {
            marginBottom: "calc(2 * clamp(0.9rem, 2.9vw, 1.4rem))",
        }
    }

    if (type === SectionTypeEnum.horisontal)
        return(
            <div style={styles["root"]}>
                <Title style={styles["title"]} size={"xl"}>
                    {title}
                </Title>
                <Carousel
                    slideSize="50%"
                    controlsOffset="md"
                    controlSize={18}
                    withControls
                    withIndicators
                    emblaOptions={{
                        loop: true,
                        dragFree: false,
                        align: 'center'
                    }}
                    styles={{
                        viewport: {
                            overflow: "visible",
                        },
                        slide: {
                            padding: "calc(1 * clamp(0.9rem, 2.9vw, 1.4rem))",
                            // height: "100% !important",
                            overflow: "visible",
                        },
                        container: {
                            height: "fit-content",
                        },
                        root: {
                            margin: "auto",
                        },
                        indicators: {
                            position: 'absolute',
                            bottom: -10,
                        },
                        control: {
                            userSelect: "none",
                            outline: "none",
                        }
                    }}
                >
                    {contents.map((x, i) =>
                        <Carousel.Slide key={`Section_${title}_${i}`}>
                            <Card
                                key={`Section_${title}_${i}`}
                                content={x}
                                style={{
                                    root: {
                                        height: "100%",
                                    },
                                }}
                                onlyHead={(!x.list) && (!x.text) && (!x.title)}
                            />
                        </Carousel.Slide>
                    )}
                </Carousel>
            </div>
        )

    else
        return(
            <div style={styles["root"]}>
                <Title style={styles["title"]} size={"xl"}>
                    {title}
                </Title>
                <Stack style={styles["cardsListStyle"]} gap={40}>
                    {contents.map((x, index)=>
                        <Card
                            key={`Section_${title}_${index}`}
                            content={x}
                        />
                    )}
                </Stack>
            </div>
        )
}