import { useState } from 'react';
import FormikTemplate from '@components/FormikTemplate';
import * as yup from 'yup';
import { FilterFields } from '@components/FilterComponents/FilterFields';

const schema = {
    form: yup.string(),
    position: yup.string(),
};

export default function Filters({
    handleFilterCards,
    handleClearFilter,
}: {
    handleFilterCards: ({ form, position }: { form: string; position: string }) => void;
    handleClearFilter: () => void;
}) {
    
    const handleFilter = ({form, position}: {form: string, position: string}) => {
        if (form || position) {
            handleFilterCards({ form, position });
        }
    };
    
    return (
        <FormikTemplate
            values={{ form: '', position: '' }}
            handleSubmit={handleFilter}
            schema={yup.object().shape(schema)}
        >
            <FilterFields
                handleClear={() => handleClearFilter()}
            />
        </FormikTemplate>
    );
}
