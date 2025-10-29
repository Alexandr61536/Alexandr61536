import { Stack, Title } from "@mantine/core"
import { Card } from "./Card"
import type { CardsContentType } from './Card'
import { Carousel } from "./Carousel"
import { useState } from "react"
import { Carousel as MantineCarousel } from "@mantine/carousel"

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
            width: "fit-content",
            margin: "auto",
            paddingBottom: "calc(1 * clamp(0.9rem, 2.9vw, 1.4rem))",
            backgroundImage: "linear-gradient(to right bottom, #424242ff 0%, #888888ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "outOfDim 1s ease 0s 1 normal forwards",
        }
    }

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const getOffset = (i: number, length: number): number => {
        const normalisedDiff = (i - currentSlide + length) % length
        if (normalisedDiff === 0)
            return 0
        if (normalisedDiff < length/2)
            return 1
        return -1
    }

    if (type === SectionTypeEnum.horisontal)
        return(
            <div style={styles["root"]}>
                <Title style={styles["title"]} size={"xl"}>
                    {title}
                </Title>
                <Carousel setCurrentSlide={setCurrentSlide} beforeUmount={()=>setCurrentSlide(0)}>
                    {contents.map((x, i) =>
                        <MantineCarousel.Slide key={`Section_${title}_${i}`}>
                            <Card
                                key={`Section_${title}_${i}`}
                                content={x}
                                style={{
                                    root: {
                                        height: "100%",
                                    },
                                }}
                                onlyHead={(!x.list) && (!x.text) && (!x.title)}
                                offset={getOffset(i, contents.length || 0)}
                            />
                        </MantineCarousel.Slide>
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