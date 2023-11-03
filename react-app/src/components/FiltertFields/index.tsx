import { Button } from '@components/controls/Button';
import { FormField } from '@components/controls/Field';
import { Select } from '@components/controls/Select';
import { MEDIA_QUERIES, scale } from 'src/scripts/gds';
import ArrowGrey from '../../icons/chevronDownGrey.svg';
import CloseIcon from '../../icons/close.svg';
import { arrPosition, arrForm } from 'src/utils/constants';
import { useCallback, useState } from 'react';

export const FilterFields = ({
    errors,
    touched,
    handleClear,
    activeFilter,
    valueForm,
    valuePosition,
    handleClickFormOption,
    handleClickPositionOption
}: {
    errors: any;
    touched: any;
    handleClear: () => void;
    activeFilter: boolean;
    handleClickFormOption: (value: string) => void,
    handleClickPositionOption: (value: string) => void,
    valueForm: string,
    valuePosition: string

}) => {
    const [openForm, setOpenForm] = useState(false);
    const [openPosition, setOpenPosition] = useState(false);

    const handleClickForm = useCallback(() => {
        setOpenForm(() => !openForm);
    }, [openForm]);

    const handleClickPosition = useCallback(() => {
        setOpenPosition(() => !openPosition);
    }, [openPosition]);

    return (
        <div css={{
            display: 'flex',
            flexDirection: 'row',
            padding: 0,
            position: 'relative',
            maxWidth: scale(86),
            marginBottom: scale(5),
            alignItems: 'end',
            gap: scale(4),
            [MEDIA_QUERIES.sm]: {
                flexDirection: 'column',
                gap: scale(3),
                width: '100%',
            },
        }}>
            <div
                css={{
                    width: '80%',
                    display: 'flex',
                    gap: scale(2),
                    [MEDIA_QUERIES.sm]: {
                        flexDirection: 'column',
                        width: '100%',
                        gap: scale(2),
                    },
                }}
            >
                <FormField
                    handleClickSelected={handleClickForm}
                    handleClickOption={handleClickFormOption}
                    value={valueForm}
                    name="form"
                    label="Form"
                    optionsArr={arrForm}
                    Icon={ArrowGrey}
                    open={openForm}
                    css={{width: '100%'}}
                    disabled={!Boolean(valueForm)}
                >
                    <Select />
                </FormField>
                <FormField
                    label="Position"
                    value={valuePosition}
                    handleClickOption={handleClickPositionOption}
                    Icon={ArrowGrey}
                    optionsArr={arrPosition}
                    open={openPosition}
                    handleClickSelected={handleClickPosition}
                    name="position"
                    disabled={!Boolean(valuePosition)}
                    >
                    <Select />
                </FormField>
            </div>
            <Button variant="primary" type="submit" size="md">
                Search
            </Button>

            <Button variant="link" Icon={CloseIcon} block hidden={activeFilter} onClick={handleClear}>
                Clear filtres
            </Button>
        </div>
    );
};
