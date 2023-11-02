import { scale, Layout } from '@greensight/gds';
import { useCallback, useState } from 'react';
import { shadows, MEDIA_QUERIES, colors, typography } from 'src/scripts/gds';
import { CardType } from './types';
import OpenIcon from '../../icons/chevronDown.svg';
import { Button } from '@components/controls/Button';

export default function Card({ cardInfo, number }: { cardInfo: CardType; number: number }) {
    const [open, setOpen] = useState(false);
    const handleClick = useCallback(() => {
        setOpen(() => !open);
    }, [open]);
    return (
        <li
            css={{
                width: '100%',
                padding: scale(5),
                boxShadow: shadows.big,
                boxSizing: 'border-box',
                borderRadius: scale(2),
                marginTop: number !== 0 ? scale(4) : 0,
                overflow: 'hidden',
                position: 'relative',
                height: open ? 'auto' : scale(45),
                [MEDIA_QUERIES.sm]: {
                    height: open ? 'auto' : scale(75),
                    padding: scale(5, true),
                },
            }}
        >
            <Layout
                cols={1}
                gap={scale(3)}
                css={{
                    [MEDIA_QUERIES.sm]: {
                        height: '100%',
                        overflow: 'hidden',
                    },
                }}
            >
                <Layout.Item
                    css={{
                        display: 'flex',
                        alignItems: 'center',
                        height: scale(6),
                        [MEDIA_QUERIES.sm]: {
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                        },
                    }}
                >
                    <h2
                        css={{
                            maxWidth: '60%',
                            ...typography('desktop/h4'),
                            [MEDIA_QUERIES.sm]: {
                                maxWidth: '100%',
                                ...(typography('mobile/h4') as any),
                            },
                        }}
                    >
                        {cardInfo.title}
                    </h2>
                    <img
                        src={cardInfo.img}
                        alt={cardInfo.title}
                        css={{
                            display: `${cardInfo.img === 'Не найдено' && 'none'}`,
                            marginLeft: scale(1),
                            height: '100%',
                            [MEDIA_QUERIES.sm]: {
                                height: scale(7),
                                marginTop: scale(3),
                                order: -1,
                            },
                            [MEDIA_QUERIES.xs]: {
                                height: scale(5),
                                width: 'auto',
                            },
                        }}
                    />
                    <Button size="md" variant="secondary">
                        Respond
                    </Button>
                </Layout.Item>

                <Layout.Item
                    cols={3}
                    css={{
                        display: 'flex',
                        columnGap: scale(6),
                        ...typography('desktop/bodyM'),
                        [MEDIA_QUERIES.sm]: {
                            flexDirection: 'column',
                            gap: scale(1),
                            ...typography('desktop/bodyS'),
                        },
                    }}
                >
                    <p css={{ color: `${colors.grey700}` }}>
                        Form <span css={{ color: colors.black }}>{cardInfo.work_form}</span>
                    </p>
                    <p css={{ color: colors.grey700 }}>
                        Company <span css={{ color: colors.black }}>{cardInfo.company_name}</span>
                    </p>
                    <p css={{ color: colors.grey700 }}>
                        Address <span css={{ color: colors.black }}>{cardInfo.adress}</span>
                    </p>
                </Layout.Item>

                <Layout.Item
                    css={{
                        margin: 0,
                        ...typography('desktop/bodyM'),
                        [MEDIA_QUERIES.sm]: {
                            ...typography('desktop/bodyS'),
                        },
                    }}
                >
                    <p>Описание: {cardInfo.description}</p>
                </Layout.Item>

                <Layout.Item cols={1}>
                    <dl>
                        <dt css={{ marginBottom: scale(1) }}>Дополнительная информация: </dt>
                        <dd>
                            <ul
                                css={{
                                    paddingLeft: scale(2),
                                    gap: scale(1),
                                    display: 'grid',
                                    overflow: 'hidden',
                                    maxHeight: !open ? scale(5) : 'auto',
                                    ...typography('desktop/bodyM'),
                                    [MEDIA_QUERIES.sm]: {
                                        maxHeight: 'auto',
                                        height: 'auto',
                                        ...typography('desktop/bodyS'),
                                    },
                                }}
                            >
                                <li key={1}>Требования: {cardInfo.requirement}</li>
                                <li key={2}>Обязанности: {cardInfo?.responsibility || 'Не найдено'}</li>
                                <li key={3}>График работы: {cardInfo.working_time_modes}</li>
                            </ul>
                            <div
                                css={{
                                    position: 'absolute',
                                    bottom: '0',
                                    right: '0',
                                    width: '100%',
                                    height: scale(19),
                                    opacity: 1,
                                    background:
                                        'linear-gradient(to bottom, rgba(255, 255, 255, .7), rgba(255, 255, 255, 1))',
                                    display: `${!open ? 'block' : 'none'}`,
                                    [MEDIA_QUERIES.sm]: {
                                        height: `30%`,
                                    },
                                }}
                            />
                        </dd>
                    </dl>
                </Layout.Item>
                <Button
                    variant="link"
                    size="sm"
                    css={{ zIndex: 1, justifySelf: 'end' }}
                    Icon={OpenIcon}
                    iconAfter
                    onClick={handleClick}
                    rounded={open}
                >
                    {!open ? 'More details' : 'Less details'}
                </Button>
            </Layout>
        </li>
    );
}
