import { Select } from '@components/controls/Select';
import { MEDIA_QUERIES, scale } from 'src/scripts/gds';
import ArrowGrey from '../../../../icons/chevronDownGrey.svg';
import CloseIcon from '../../../../icons/close.svg';
import { arrPosition, arrForm } from 'src/utils/constants';
import { useCallback, useState } from 'react';
import Form from '@components/controls/Form';
import { useField, useFormikContext } from 'formik';

export const FilterFields = ({ handleClear }: { handleClear: () => void }) => {
    const [openForm, setOpenForm] = useState(false);
    const [openPosition, setOpenPosition] = useState(false);
    const metaFormField = useField('form');
    const metaPositionField = useField('position');
    const context = useFormikContext();

    const handleClickForm = useCallback(() => {
        setOpenForm(() => !openForm);
    }, [openForm]);

    const handleClickPosition = useCallback(() => {
        setOpenPosition(() => !openPosition);
    }, [openPosition]);

    const handleClearClick = () => {
        metaFormField[2].setValue('');
        metaPositionField[2].setValue('');
        context.setSubmitting(false);
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
                <Form.Field
                    handleClickSelected={handleClickForm}
                    name="form"
                    label="Form"
                    Icon={ArrowGrey}
                    open={openForm}
                >
                    <Select optionsArr={arrForm} />
                </Form.Field>
                <Form.Field
                    label="Position"
                    Icon={ArrowGrey}
                    open={openPosition}
                    handleClickSelected={handleClickPosition}
                    name="position"
                >
                    <Select optionsArr={arrPosition} />
                </Form.Field>
            </div>
            <Form.Button variant="primary" type="submit" size="md">
                Search
            </Form.Button>

            <Form.Button variant="link" Icon={CloseIcon} block hidden={!context.isSubmitting} onClick={handleClearClick}>
                Clear filtres
            </Form.Button>
        </div>
    );
};
