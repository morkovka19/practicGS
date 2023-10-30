import Header from "@components/Header";
import { Container, scale} from "@greensight/gds";
import Main  from '../Main'
import { CardsProps } from "./types";
import { MEDIA_QUERIES } from "src/scripts/gds";

export default function Content({cards}: CardsProps) {
    return (
        <Container css={{
            padding: '0',
            maxWidth: `${scale(150)}px`,
            width: `83%`,
            marginTop: `${scale(8)}px`,
            marginBottom: `${scale(13)}px`,
            [MEDIA_QUERIES.sm]: {
                width: "90%",
                marginTop: `${scale(4)}px`,
                marginBottom: `${scale(4)}px`
            }
        }}>
            <Header />
            <Main cards={cards} />
        </Container>
    )
}
