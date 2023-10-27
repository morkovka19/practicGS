import { MAJOR_STEP } from 'src/utils/constants'
import tokens from '../../../public/tokens.json'
import { Container, Layout } from '@greensight/gds'

export default function Footer() {
    return (
        <footer css={{ backgroundColor: tokens.colors.grey900, marginTop: `${MAJOR_STEP * 11}px`, padding: `${MAJOR_STEP * 5}px ${MAJOR_STEP * 15}px` }}>
            <Layout type="flex" direction="row" justify="space-between">
                <Layout.Item>
                    <Container css={{ fontSize: '18px', color: tokens.colors.white, fontWeight: '500' }}>
                        <p>+7 499 391-66-69</p>
                        <p>mail@greensight.ru</p>
                    </Container>
                </Layout.Item>
                <Layout.Item>
                    <Container css={{ fontSize: '16px', color: tokens.colors.white, fontWeight: '400' }}>
                        <p>322A, 2nd Floor, Zelenograd, Moscow, Russia</p>
                        <p>Directions</p>
                    </Container>
                </Layout.Item>
            </Layout>
        </footer>
    )
}
