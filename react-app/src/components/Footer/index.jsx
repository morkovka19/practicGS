import { MEDIA_QUERIES, colors } from 'src/scripts/gds';
import { Container, Layout, scale } from '@greensight/gds';
import { typography } from 'src/scripts/gds';

export default function Footer() {
    return (
        <footer
            css={{
                backgroundColor: colors.grey900,
                marginTop: scale(11),
                padding: `${scale(5)}px ${scale(15)}px`,
                minWidth: '100%',
                [MEDIA_QUERIES.sm]: {
                    marginTop: scale(4),
                    padding: `${scale(2)}px ${scale(4)}px`,
                },
            }}
        >
            <Container>
                <Layout type="flex" direction="row" justify="space-between" css={{color: colors.white}}>
                    <Layout.Item css={...(typography('bodyLbold'))}>
                        <p>+7 499 391-66-69</p>
                        <p>mail@greensight.ru</p>
                    </Layout.Item>
                    <Layout.Item  css={...(typography('bodyMbold'))}>
                        <p>322A, 2nd Floor, Zelenograd, Moscow, Russia</p>
                        <p css={{ textAlign: 'end', [MEDIA_QUERIES.sm]: { textAlign: 'start' } }}>Directions</p>
                    </Layout.Item>
                </Layout>
            </Container>
        </footer>
    );
}
