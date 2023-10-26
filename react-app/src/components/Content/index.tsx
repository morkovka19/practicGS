import Header from "@components/Header";
import { Container } from "@greensight/gds";
import Main  from '../Main' 
import { MAJOR_STEP } from "src/utils/constants";
import tokens from '../../../public/tokens.json'
import { CardType } from "src/types/types";
import { CardsProps } from "./types";

export default function Content(cards: CardsProps) {
    return (
        <Container css={{
            margin: `${MAJOR_STEP * 8}px ${tokens.layout.padding.xl}px ${MAJOR_STEP * 13}px ${tokens.layout.padding.xl}px `,
            padding: '0',
            maxWidth: `${tokens.typography.breakpoints[0]}px`
        }}>
            <Header />
            <Main cards={cards.cards} />
        </Container>
    )
}