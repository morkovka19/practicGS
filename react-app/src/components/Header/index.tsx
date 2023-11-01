import { MEDIA_QUERIES, scale, typography } from 'src/scripts/gds';
export default function Header() {
    return (
        <header
            css={{
                width: '83%',
                margin: '0 auto',
                marginTop: scale(8),
                maxWidth: scale(150),
                [MEDIA_QUERIES.sm]: {
                    marginTop: scale(4),
                },
            }}
        >
            <h1
                css={{
                    margin: 0,
                    ...typography('desktop/h1'),
                    [MEDIA_QUERIES.sm]: {
                        ...typography('mobile/h1'),
                    },
                }}
            >
                List of vacancies
            </h1>
        </header>
    );
}
