import { Item } from '../../types/Item';
import * as C from './style';
import { LabelInput } from '../LabelInput/index';
import { useState } from 'react';
import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';

type Props = {
    onAdd: (item: Item) => void;
}

export const InsertArea = ({ onAdd }: Props) => {

    let categoryKeys: string[] = Object.keys(categories);

    const [date, setDate] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [value, setValue] = useState<number>(0);

    const handleAddEvent = (date: string, category: string, title: string, value: number) => {
        let errors: string[] = [];

        if (isNaN(new Date(date).getTime())) {
            errors.push('Data inválida!');
        }
        if (!categoryKeys.includes(category)) {
            errors.push('Categoria inválida!');
        }
        if (title === '') {
            errors.push('Título vazio!');
        }
        if (value <= 0) {
            errors.push('Valor inválido!');
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            onAdd({
                date: newDateAdjusted(date),
                category: category,
                title: title,
                value: value
            });
            clearStates();
        }
    };


    const clearStates = () => {
        setDate('');
        setCategory('');
        setTitle('');
        setValue(0);
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleAddEvent(date, category, title, value);
    };

    return (
        <C.Div>
            <C.Form onSubmit={handleSubmit}>
                <LabelInput
                    label='Data:'
                    inputType='date'
                    onChange={e => setDate(e.target.value)}
                />

                <C.DivP>
                    <C.Label>
                        Categoria:
                    </C.Label>
                    <C.Select onChange={e => setCategory(e.target.value)}>
                        <option></option>
                        {categoryKeys.map((key, index) => (
                            <option key={index} value={key}>{categories[key].title}</option>
                        ))}
                    </C.Select>
                </C.DivP>

                <LabelInput
                    label='Título:'
                    inputType='text'
                    onChange={e => setTitle(e.target.value)}
                />
                <LabelInput
                    label='Valor:'
                    inputType='number'
                    onChange={e => setValue(parseInt(e.target.value))}
                />

                <C.Button type='submit'>Adicionar</C.Button>
            </C.Form>
        </C.Div>
    );
}

