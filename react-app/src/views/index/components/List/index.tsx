import { CardType } from 'src/api/vacancies/types';
import Card from '@components/Card';
import { Section, scale } from '@greensight/gds';

export default function List({ cards }: { cards: CardType[] }) {
    return (
        <Section container={false} css={{width: '83%', maxWidth: scale(150)}}>
            <ul css={{ padding: 0 }}>
                {cards?.map((card, i) => <Card key={card.id} cardInfo={card} number={i} />)}
            </ul>
        </Section>
    );
}
