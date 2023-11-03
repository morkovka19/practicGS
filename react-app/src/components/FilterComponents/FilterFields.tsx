import { Button } from '@components/controls/Button';
import { FormField } from '@components/controls/Field';
import { Select } from '@components/controls/Select';
import { MEDIA_QUERIES, scale } from 'src/scripts/gds';
import ArrowGrey from '../../icons/chevronDownGrey.svg';
import CloseIcon from '../../icons/close.svg';
import { arrPosition, arrForm } from 'src/utils/constants';
import { useCallback, useState } from 'react';
import { useField } from 'formik';

export const FilterFields = ({ handleClear, activeFilter }: { handleClear: () => void; activeFilter: boolean }) => {
    const [openForm, setOpenForm] = useState(false);
    const [openPosition, setOpenPosition] = useState(false);
    const metaFormField = useField('form');
    const metaPositionField = useField('position');

    const handleClickForm = useCallback(() => {
        setOpenForm(() => !openForm);
    }, [openForm]);

    const handleClickPosition = useCallback(() => {
        setOpenPosition(() => !openPosition);
    }, [openPosition]);

    const handleClearClick = () => {
        metaFormField[2].setValue('');
        metaPositionField[2].setValue('');
        handleClear();
    };

    return (
        <div
            css={{
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
            }}
        >
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
                    name="form"
                    label="Form"
                    optionsArr={arrForm}
                    Icon={ArrowGrey}
                    open={openForm}
                >
                    <Select />
                </FormField>
                <FormField
                    label="Position"
                    Icon={ArrowGrey}
                    optionsArr={arrPosition}
                    open={openPosition}
                    handleClickSelected={handleClickPosition}
                    name="position"
                >
                    <Select />
                </FormField>
            </div>
            <Button variant="primary" type="submit" size="md">
                Search
            </Button>

            <Button variant="link" Icon={CloseIcon} block hidden={activeFilter} onClick={handleClearClick}>
                Clear filtres
            </Button>
        </div>
    );
};
