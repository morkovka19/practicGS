import { useState } from 'react';
import FormikTemplate from '@components/FormikTemplate';
import * as yup from 'yup';
import { FilterFields } from '@components/FiltertFields';

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
    const [valueForm, setValueForm] = useState('');
    const [valuePosition, setValuePosition] = useState('');
    const [activeFilter, setActiveFilter] = useState(true);

    const handleFilter = () => {
        if (valueForm !== '' || valuePosition !== '') {
            handleFilterCards({ valueForm, valuePosition });
            setActiveFilter(false);
        }
    };
    const handleClickFormOption = (value: string) => {
        console.log(value)
        setValueForm(value);
    };

    const handleClickPositionOption = (value: string) => {
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
            values={{ valueForm: valueForm, valuePosition: valuePosition }}
            handleSubmit={handleFilter}
            schema={yup.object().shape(schema)}
        >
            <FilterFields
                errors={undefined}
                touched={undefined}
                handleClear={handleClickClear}
                activeFilter={activeFilter}
                handleClickPositionOption={handleClickPositionOption}
                handleClickFormOption={handleClickFormOption}
                valueForm={valueForm}
                valuePosition={valuePosition}
            />
        </FormikTemplate>
    );
}
