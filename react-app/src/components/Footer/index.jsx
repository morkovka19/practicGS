import { MEDIA_QUERIES, colors } from 'src/scripts/gds'
import { Container, Layout, scale } from '@greensight/gds'

export default function Footer() {
    return (
        <footer css={{ backgroundColor: colors.grey900,
        marginTop: `${scale(11)}px`,
        padding: `${scale(5)}px ${scale(15)}px`,
        minWidth: '100%',
        [MEDIA_QUERIES.sm]: {
            marginTop: `${scale(4)}px`,
            padding: `${scale(2)}px ${scale(4)}px`,
        }}}>
            <Layout type="flex" direction="row" justify="space-between">
                <Layout.Item>
                    <Container css={{ fontSize: '18px',
                        color: colors.white,
                        fontWeight: '500',
                        [MEDIA_QUERIES.sm]: {
                            fontSize: '16px'
                        } }}>
                        <p>+7 499 391-66-69</p>
                        <p>mail@greensight.ru</p>
                    </Container>
                </Layout.Item>
                <Layout.Item>
                    <Container css={{ fontSize: '16px',
                    color: colors.white,
                     fontWeight: '400',
                     [MEDIA_QUERIES.sm]: {
                        fontSize: '14px'
                     } }}>
                        <p>322A, 2nd Floor, Zelenograd, Moscow, Russia</p>
                        <p css={{textAlign: "end", [MEDIA_QUERIES.sm]: {textAlign: 'start'}}}>Directions</p>
                    </Container>
                </Layout.Item>
            </Layout>
        </footer>
    )
}
