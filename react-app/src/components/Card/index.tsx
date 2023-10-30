import { Layout, scale } from "@greensight/gds";
import { useState } from "react";
import { Button } from '../controls/Button'
import OpenIcon from '../../icons/chevronDown.svg'
import {MEDIA_QUERIES, colors, shadows} from '../../scripts/gds';
import { CardProps } from "./types";


export default function Card({ cardInfo, number }: CardProps) {

    const [open, setOpen] = useState(false)

    const handleClick = () =>{
        setOpen(() => !open)
    }

    return (
        <li css={{
            width: '100%',
            padding: `${scale(5)}px`,
            boxShadow: `${shadows.big}`,
            boxSizing: 'border-box',
            borderRadius: `${scale(2)}px`,
            marginTop: `${number !== 0 ? scale(4) : '0'}px`,
            overflow: 'hidden',
            position: 'relative',
            height: `${open ? "auto": `${scale(45)}px`}`,
            [MEDIA_QUERIES.sm]: {
                marginTop: `${number !== 0 ? scale(5, true) : '0'}px`,
                padding: `${scale(5, true)}px`,
                height: `${open ? 'auto': `${scale(65)}px`}`,
            },
            [MEDIA_QUERIES.xs]: {
                height: `${open ? 'auto': `${scale(65)}px`}`,
            },
            [MEDIA_QUERIES.xxs]: {
                height: `${open ? 'auto': `${scale(74)}px`}`,
            }
        }}>
            <Layout cols={1} gap={`${scale(3)}px`}>
                <Layout.Item css={{
                    display: 'flex',
                    alignItems: "center",
                    height: `${scale(6)}px`,
                    [MEDIA_QUERIES.sm]: {
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'space-between',
                    }}}>
                    <h3 css={{
                        maxWidth: "60%",
                        fontWeight: "500",
                        fontSize: '24px',
                        [MEDIA_QUERIES.sm]: {
                            maxWidth: '100%',
                            fontSize: '20px'
                        }} as any}>{cardInfo.title}</h3>
                    <img src={cardInfo.img} alt={cardInfo.title} css={{
                        display: `${cardInfo.img === 'Не найдено' && 'none'}`,
                        marginLeft: `${scale(1)}px`,
                        height: '100%',
                        [MEDIA_QUERIES.sm]: {
                            height: `${scale(7)}px`,
                            marginTop: `${scale(3)}px`,
                            order: '-1'
                        },
                        [MEDIA_QUERIES.xs]: {
                            height: `${scale(5)}px`,
                            width: 'auto'
                        }
                    } as any} />
                    <Button size="md" variant="secondary">Respond</Button>
                </Layout.Item>
                <Layout.Item cols={3} css={{
                        display: "flex",
                        columnGap: `${scale(6)}px`,
                        [MEDIA_QUERIES.sm]: {
                            flexDirection: 'column',
                            gap: `${scale(1)}px`
                        }}}>
                    <p css={{ color: `${colors.grey700}` }}>Form <span css={{ color: `${colors.black}` }}>{cardInfo.work_form}</span></p>
                    <p css={{ color: `${colors.grey700}` }}>Company <span css={{ color: `${colors.black}` }}>{cardInfo.companyName}</span></p>
                    <p css={{ color: `${colors.grey700}` }}>Address <span css={{ color: `${colors.black}` }}>{cardInfo.adress}</span></p>
                </Layout.Item>
                <Layout.Item css={{ margin: '0' }}>
                    <p>Описание: {cardInfo.description}</p>
                </Layout.Item>
                <Layout.Item cols={1}>
                    <dl>
                        <dt css={{ marginBottom: `${scale(1)}px` }}>Дополнительная информация: </dt>
                        <dd>
                            <ul css={{
                                paddingLeft: `${scale(2)}px`,
                                gap: `${scale(1)}px`,
                                display: "grid",
                                overflow: 'hidden',
                                maxHeight: `${!open ? `${scale(5)}px`: 'auto'}`,
                                [MEDIA_QUERIES.sm]: {
                                    maxHeight: `${!open ? `${scale(9)}px`: 'auto'}`
                                }
                                }}>
                                <li key={1}>Требования: {cardInfo.requirement}</li>
                                <li key={2}>Обязанности: {cardInfo.responsibility ? cardInfo.responsibility : "Не найдено"}</li>
                                <li key={3}>График работы: {cardInfo.working_time_modes}</li>
                                <div css={{
                                    position: 'absolute',
                                    bottom: '0',
                                    right: '0',
                                    width: '100%',
                                    height: `${scale(19)}px`,
                                    opacity: '1',
                                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, .7), rgba(255, 255, 255, 1))',
                                    display: `${!open ? 'block' : 'none'}`,
                                    [MEDIA_QUERIES.sm]: {
                                        height: `10%`
                                    }
                                    }} />
                            </ul>
                        </dd>
                    </dl>
                </Layout.Item>
                <Button variant="link" size="sm" css={{zIndex: 1, justifySelf: 'end'}} Icon={OpenIcon} iconAfter onClick={handleClick} rounded={open}>{!open ? 'More details' : 'Less details'}</Button>
            </Layout>
        </li>
    )
}
