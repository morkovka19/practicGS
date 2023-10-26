import tokens from '../../../public/tokens.json'
import Filters from '@components/Filtres'
import { MAJOR_STEP } from 'src/utils/constants'

export default function Header() {
    return (
        <header css={{}}>
            <h1 css={{
                fontSize: '48px',
                lineHeight: '58px',
                margin: 0
            }}>List of vacancies</h1>
            <Filters />
        </header>
    )
}