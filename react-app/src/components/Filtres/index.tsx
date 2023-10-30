import { Button } from "@components/controls/Button";
import { Section, scale } from "@greensight/gds";
import {  useState } from "react";
import { Select } from "@components/controls/Select";
import ArrowGrey from '../../icons/chevronDownGrey.svg';
import { arrForm, arrPosition } from "src/utils/constants";
import CloseIcon from '../../icons/close.svg'

export default function Filters(handleFilterCards: any) {


    const [openForm, setOpenForm] = useState(false);
    const [openPosition, setOpenPosition] = useState(false);
    const [valueForm, setValueForm] = useState('');
    const [valuePosition, setValuePosition] = useState('');
    const [activeFilter, setActiveFilter] = useState(true)

    const handleFilter = () => {
        if (valueForm !== '' || valuePosition !== '') {
            handleFilterCards.handleFilterCards({ valueForm, valuePosition });
            setActiveFilter(false)
        }
    }

    const handleClickSelectedForm = () => {
        setOpenForm(() => !openForm)
    }

    const handleClickSelectedPosition = () => {
        setOpenPosition(() => !openPosition)
    }

    const handleClickOptionForm = (value: string) => {
        setValueForm(value)
    }

    const handleClickOptionPosition = (value: string) => {
        setValuePosition(value)
    }

    const handleClickClear = () => {
        setValueForm('');
        setValuePosition('');
        setActiveFilter(true);
        handleFilterCards.handleClearFilter();
    }

    return (
        <Section css={{ marginBottom: `${scale(5)}px`, width: '68%', padding: 0, position: 'relative' }} container={false}>
            <div css={{ display: 'flex', flexDirection: 'row', padding: '0', justifyContent: "space-between", alignItems: "end" }}>
                <div css={{ width: '70%', display: 'flex', justifyContent: 'space-between'}}>
                    <Select label="Form" Icon={ArrowGrey} optionsArr={arrForm} open={openForm} handleClickSelected={handleClickSelectedForm} handleClickOption={handleClickOptionForm} value={valueForm} disabled={valueForm === '' ? true : false} />
                    <Select label="Position" Icon={ArrowGrey} optionsArr={arrPosition} open={openPosition} handleClickSelected={handleClickSelectedPosition} handleClickOption={handleClickOptionPosition} value={valuePosition} disabled={valuePosition === '' ? true : false} />
                </div>
                <Button variant="primary" size="md" onClick={handleFilter}>Search</Button>
            </div>
            <Button variant="link" Icon={CloseIcon} children={"Clear filtres"} block hidden={activeFilter} onClick={handleClickClear} />
        </Section>
    )
}
