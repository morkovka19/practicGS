import { Button } from '@components/controls/Button';
import { scale } from '@greensight/gds';
import { useState } from 'react';
import { Select } from '@components/controls/Select';
import { arrForm, arrPosition } from 'src/utils/constants';
import ArrowGrey from '../../icons/chevronDownGrey.svg';
import CloseIcon from '../../icons/close.svg';
import { MEDIA_QUERIES } from 'src/scripts/gds';
import FormikTemplate from '@components/FormikTemplate';
import * as yup from 'yup';
import { Form } from 'formik';

const schema = {
    valueForm: yup.string(),
    valuePosition: yup.string(),
};

export default function Filters({
    handleFilterCards,
    handleClearFilter,
}: {
    handleFilterCards: ({ valueForm, valuePosition }: { valueForm: string; valuePosition: string }) => void;
    handleClearFilter: () => void;
}) {
    const [openForm, setOpenForm] = useState(false);
    const [openPosition, setOpenPosition] = useState(false);
    const [valueForm, setValueForm] = useState('');
    const [valuePosition, setValuePosition] = useState('');
    const [activeFilter, setActiveFilter] = useState(true);

    const handleFilter = () => {
        if (valueForm !== '' || valuePosition !== '') {
            handleFilterCards({ valueForm, valuePosition });
            setActiveFilter(false);
        }
    };

    const handleClickSelectedForm = () => {
        setOpenForm(() => !openForm);
    };

    const handleClickSelectedPosition = () => {
        setOpenPosition(() => !openPosition);
    };

    const handleClickOptionForm = (value: string) => {
        setValueForm(value);
    };

    const handleClickOptionPosition = (value: string) => {
        setValuePosition(value);
    };

    const handleClickClear = () => {
        setValueForm('');
        setValuePosition('');
        setActiveFilter(true);
        handleClearFilter();
    };

    return (
        <FormikTemplate
            values={{ valueForm: '', valuePosition: '' }}
            handleSubmit={handleFilter}
            schema={schema}
            baseForm={({ errors, touched }) => (
                <Form
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
                        <Select
                            label="Form"
                            Icon={ArrowGrey}
                            optionsArr={arrForm}
                            open={openForm}
                            handleClickSelected={handleClickSelectedForm}
                            handleClickOption={handleClickOptionForm}
                            value={valueForm}
                            disabled={!Boolean(valueForm)}
                        />
                        <Select
                            label="Position"
                            Icon={ArrowGrey}
                            optionsArr={arrPosition}
                            open={openPosition}
                            handleClickSelected={handleClickSelectedPosition}
                            handleClickOption={handleClickOptionPosition}
                            value={valuePosition}
                            disabled={!Boolean(valuePosition)}
                        />
                    </div>
                    <Button variant="primary" type="submit" size="md" onClick={handleFilter}>
                        Search
                    </Button>

                    <Button variant="link" Icon={CloseIcon} block hidden={activeFilter} onClick={handleClickClear}>
                        Clear filtres
                    </Button>
                </Form>
            )}
        />
    );
}
