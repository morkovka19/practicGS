import { MEDIA_QUERIES } from "src/scripts/gds"

export default function Header() {

    return (
        <header>
            <h1 css={{
                fontSize: '48px',
                lineHeight: '58px',
                margin: 0,
                [MEDIA_QUERIES.sm]: {
                    fontSize: '34px',
                    fontWeight: '500',
                    lineHeight: '120%'
                }

            } as any}>List of vacancies</h1>
        </header>
    )
}
