import { CardType } from 'src/api/vacancies/types';
import Card from '@components/Card';
import { Section } from '@greensight/gds';

export default function List({ cards }: { cards: CardType[] }) {
    return (
        <Section container={false}>
            <ul css={{ padding: 0 }}>
                {cards?.map((card, i) => <Card key={card.id} cardInfo={card} number={i} />)}
            </ul>
        </Section>
    );
}
