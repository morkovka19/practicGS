import { MEDIA_QUERIES, scale } from "src/scripts/gds"

export default function Header() {

    return (
        <header css={{
            width: '83%',
            margin: '0 auto',
            marginTop: `${scale(8)}px`,
            [MEDIA_QUERIES.sm] : {
                marginTop: `${scale(4)}px`
            }
        }}>
            <h1 css={{
                fontSize: '48px',
                lineHeight: '58px',
                fontWeight: '500',
                margin: 0,
                [MEDIA_QUERIES.sm]: {
                    fontSize: '34px',
                    lineHeight: '120%'
                }

            } as any}>List of vacancies</h1>
        </header>
    )
}
