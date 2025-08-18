import { Stack, Title } from "@mantine/core"
import { Card } from "./Card"
import type { CardsContentListElement } from './Card'
import { Carousel } from "@mantine/carousel"

export enum SectionTypeEnum {
    vertical    = 0,
    horisontal  = 1,
}

type SectionProps = {
    title?: string,
    contents: CardsContentListElement[],
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
                            padding: "calc(0.5 * clamp(0.9rem, 2.9vw, 1.4rem))",
                            height: "fit-content",
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
                        }
                    }}
                >
                    {contents.map((x, i) =>
                        <Carousel.Slide key={`Section_${title}_${i}`}>
                            <Card
                                key={`Section_${title}_${i}`}
                                content={x}
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