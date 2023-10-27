import { CardType, CardsProps } from "src/types/types";
import Card from "@components/Card";
import { Layout } from "@greensight/gds";
import { MAJOR_STEP } from "src/utils/constants";


export default function List(cards: CardsProps) {
    return (
        <ul css={{ padding: 0 }}>
            <Layout type='grid' gap={32} width={"100%"} cols={1}>
                <Layout.Item css={{ padding: 0 }}>
                    {cards.cards.map((card: CardType, i: number) => {
                        if (i < 5)
                            return <Card key={i} cardInfo={card} number={i} />
                    })}
                </Layout.Item>
            </Layout>
        </ul>
    )
}
