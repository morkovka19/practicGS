import { Container, Layout } from "@greensight/gds";
import { CardType, CardsProps } from "src/types/types";
import { MAJOR_STEP } from "src/utils/constants";
import tokens from '../../../public/tokens.json';
import { Button } from "../Button";

interface CardProps {
    cardInfo: CardType,
    key: number,
    number: number
}

export default function Card({ key, cardInfo, number }: CardProps) {
    return (
        <li key={key} css={{
            width: '100%',
            padding: `${MAJOR_STEP * 5}px`,
            boxShadow: `${tokens.shadows.big}`,
            boxSizing: 'border-box',
            borderRadius: `${MAJOR_STEP * 2}px`,
            marginTop: `${number !== 0 ? MAJOR_STEP * 4 : '0'}px`
        }}>
            <Layout cols={1} gap={`${MAJOR_STEP * 3}px`}>
                <Layout.Item css={{display: 'flex', alignItems: "center"}}>
                    <h3>{cardInfo.title}</h3>
                    <img src={cardInfo.img} alt={cardInfo.title} css={{
                        display: `${cardInfo.img === 'Не найдено' && 'none'}`,
                        maxHeight: `${MAJOR_STEP * 5}px`,
                        marginLeft: `${MAJOR_STEP}px`
                    }} />
                    <Button size="md" variant="secondary">Respond</Button>
                </Layout.Item>
                <Layout.Item cols={3} css={{display: "flex", columnGap: `${MAJOR_STEP * 6}px`}}>
                    <p css={{ color: `${tokens.colors.grey700}` }}>Form <span css={{ color: `${tokens.colors.black}` }}>{cardInfo.work_form}</span></p>
                    <p css={{ color: `${tokens.colors.grey700}` }}>Company <span css={{ color: `${tokens.colors.black}` }}>{cardInfo.companyName}</span></p>
                    <p css={{ color: `${tokens.colors.grey700}` }}>Address <span css={{ color: `${tokens.colors.black}` }}>{cardInfo.adress}</span></p>
                </Layout.Item>
                <Layout.Item css={{ margin: '0' }}>
                    <p>Описание: {cardInfo.description}</p>
                </Layout.Item>
                <Layout.Item cols={1}>
                    <dl>
                        <dt css={{marginBottom: `${MAJOR_STEP}px`}}>Дополнительная информация: </dt>
                        <dd>
                            <ul css={{paddingLeft: `${MAJOR_STEP * 2}px`, gap: `${MAJOR_STEP}px`, display: "grid"}}>
                                <li>Требования: {cardInfo.requirement}</li>
                                <li>Обязанности: {cardInfo.responsibility ? cardInfo.responsibility : "Не найдено"}</li>
                                <li>График работы: {cardInfo.working_time_modes}</li>
                            </ul>
                        </dd>
                    </dl>
                </Layout.Item>
            </Layout>
            {/* {JSON.stringify(cardInfo)} */}
        </li>
    )
}