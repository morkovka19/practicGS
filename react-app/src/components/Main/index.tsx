import { Container, Section } from "@greensight/gds"
import { AppProps } from "next/app"
import { CardType } from "src/types/types"
import List from "@components/List"
import {CardsProps} from "../../types/types"
import { MAJOR_STEP } from "src/utils/constants"

export default function Main (cards: CardsProps){
    return (
        <main>
            <Section css={{marginTop: `${MAJOR_STEP * 8}px`, padding: '0'}} container={false}>
                    <List cards={cards.cards} />
            </Section>
        </main>
    )
}
