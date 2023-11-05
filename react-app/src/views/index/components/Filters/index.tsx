import * as yup from 'yup';
import { FilterFields } from '@views/index/components/Filters/FilterFields';
import { scale } from '@greensight/gds';
import Form from '@components/controls/Form';

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
    const handleFilter = ({ form, position }: { form: string; position: string }) => {
        if (form || position) {
            handleFilterCards({ form, position });
        }
    };

    return (
        <div css={{ width: '83%', maxWidth: scale(150), marginTop: scale(5) }}>
            <Form
                values={{ form: '', position: '' }}
                handleSubmit={handleFilter}
                schema={yup.object().shape(schema)}
            >
                <FilterFields handleClear={() => handleClearFilter()} />
            </Form>
        </div>
    );
}
