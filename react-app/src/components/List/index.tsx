import { CardType, CardsProps } from "src/types/types";
import Card from "@components/Card";
import { Layout, Section} from "@greensight/gds";


export default function List(cards: CardsProps) {
    return (
        <Section container={false}>
        <ul css={{ padding: 0 }}>
            <Layout type='grid' width="100%" cols={1}>
                <Layout.Item css={{ padding: 0 }}>
                    {cards.cards.map((card: CardType, i: number) => (
                            <Card key={i} cardInfo={card} number={i} />
                    ))}
                </Layout.Item>
            </Layout>
        </ul>
        </Section>
    )
}
