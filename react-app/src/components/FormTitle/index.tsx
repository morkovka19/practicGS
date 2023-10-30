import { scale } from "@greensight/gds";
import { MEDIA_QUERIES } from "src/scripts/gds";

export default function FormTitle() {
    return (
        <div css={{ display: 'flex',
        flexDirection: 'column',
        rowGap: `${scale(2)}px`,
        alignItems: 'center',
        justifyContent: "start",
        width: '100%'}}>
            <h2 css={{fontSize: '34px',
             fontWeight: 500,
             [MEDIA_QUERIES.sm]: {
                fontSize: '28px',
                fontWeight: '500',
             }} as any}>Leave a request</h2>
            <p css={{textAlign: 'center', [MEDIA_QUERIES.sm]: {
                fontSize: '16px'
            }}}>We will advise you and help you start  a new project</p>
        </div>
    )
}
