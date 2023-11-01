import { Container, scale } from '@greensight/gds';
import { MEDIA_QUERIES } from 'src/scripts/gds';

export default function FormTitle() {
    return (
        <Container
            css={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: scale(2),
                alignItems: 'center',
                justifyContent: 'start',
                width: '100%',
            }}
        >
            <h3
                css={
                    {
                        fontSize: '34px',
                        fontWeight: 500,
                        [MEDIA_QUERIES.sm]: {
                            fontSize: scale(7, true),
                        },
                    }
                }
            >
                Leave a request
            </h3>
            <p
                css={{
                    textAlign: 'center',
                    [MEDIA_QUERIES.sm]: {
                        fontSize: scale(2),
                    },
                }}
            >
                We will advise you and help you start a new project
            </p>
        </Container>
    );
}
