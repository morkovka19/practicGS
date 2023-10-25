import { Button, useTheme } from "@greensight/gds";


const MyButton =() =>{
    const { colors } = useTheme();
    return <Button>Click me</Button>
}

export {MyButton}
