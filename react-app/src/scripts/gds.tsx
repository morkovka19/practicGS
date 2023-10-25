import tokens from '../../public/tokens.json';
import { createTheme, scale } from "@greensight/gds";
import { global } from './themes/global';
import { Button } from './themes/button';



const theme = createTheme({
    tokens,
    settings: {
        global: global,
    components: {
        Button
    }
    },
}
)

export { theme };
