import Header from "@components/Header";
import { Container, scale} from "@greensight/gds";
import Main  from '../Main' 
import { CardsProps } from "./types";

export default function Content({cards}: CardsProps) {
    return (
        <Container css={{
            padding: '0',
            maxWidth: `${scale(15)}px`,
            width: `83%`,
            marginTop: `${scale(8)}px`,
            marginBottom: `${scale(13)}px`
        }}>
            <Header />
            <Main cards={cards} />
        </Container>
    )
}