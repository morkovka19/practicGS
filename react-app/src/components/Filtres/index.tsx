import { Button } from "@components/controls/Button";
import { Section, scale } from "@greensight/gds";
import {  useState } from "react";
import { Select } from "@components/controls/Select";
import { arrForm, arrPosition } from "src/utils/constants";
import ArrowGrey from '../../icons/chevronDownGrey.svg';
import CloseIcon from '../../icons/close.svg';
import { MEDIA_QUERIES } from "src/scripts/gds";


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
        <Section css={{
            marginBottom: `${scale(5)}px`,
            width: '70%',
            maxWidth: scale(80),
            padding: '0',
            position: 'relative',
            [MEDIA_QUERIES.xl]: {
                width: '100%',
                marginBottom: `${scale(4)}px`,
            }
            }} container={false}>
            <div css={{ display: 'flex',
                flexDirection: 'row',
                padding: '0',
                justifyContent: "space-between",
                alignItems: "end",
                [MEDIA_QUERIES.sm] : {
                    flexDirection: 'column',
                    gap: `${scale(3)}px`,
                    width: '100%',
                } }}>
                <div css={{ width: '80%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    [MEDIA_QUERIES.xl] : {
                        width: '70%'
                    },
                    [MEDIA_QUERIES.sm]: {
                        flexDirection: 'column',
                        width:'100%',
                        gap: `${scale(2)}px`
                    }}}>
                    <Select label="Form" Icon={ArrowGrey} optionsArr={arrForm} open={openForm} handleClickSelected={handleClickSelectedForm} handleClickOption={handleClickOptionForm} value={valueForm} disabled={!Boolean(valueForm)} />
                    <Select label="Position" Icon={ArrowGrey} optionsArr={arrPosition} open={openPosition} handleClickSelected={handleClickSelectedPosition} handleClickOption={handleClickOptionPosition} value={valuePosition} disabled={!Boolean(valuePosition)} />
                </div>
                <Button variant="primary" size="md" onClick={handleFilter}>Search</Button>
            </div>
            <Button variant="link" Icon={CloseIcon} block hidden={activeFilter} onClick={handleClickClear}>Clear filtres</Button>
        </Section>
    )
}
