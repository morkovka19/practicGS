import { Container, scale, typography } from '@greensight/gds';
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
                css={{
                    ...(typography('desktop/h2') as any),
                    [MEDIA_QUERIES.sm]: {
                        ...(typography('mobile/h2') as any),
                    },
                }}
            >
                Leave a request
            </h3>
            <p
                css={{
                    textAlign: 'center',
                    ...(typography('desktop/bodyL') as any),
                    [MEDIA_QUERIES.sm]: {
                        ...typography('desktop/bodyM'),
                    },
                }}
            >
                We will advise you and help you start a new project
            </p>
        </Container>
    );
}
