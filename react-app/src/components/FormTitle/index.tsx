import { scale } from "@greensight/gds";

export default function FormTitle() {
    return (
        <div css={{ display: 'flex', flexDirection: 'column',rowGap: `${scale(2)}px`, alignItems: 'center', justifyContent: "start", width: '100%'}}>
            <h2 css={{fontSize: '34px', fontWeight: 500}}>Leave a request</h2>
            <p>We will advise you and help you start  a new project</p>
        </div>
    )
}
