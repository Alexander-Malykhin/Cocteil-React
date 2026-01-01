type CircleType = 'small' | 'big'

interface DataWhyUsInterface {
    id: number,
    text: string,
    typeCircle?: CircleType;
}

export const DataWhyUs: DataWhyUsInterface[] = [
    {
        id: 1,
        text: 'Скидки постоянным клиентам от 5%',
        typeCircle: 'small'
    },
    {
        id: 2,
        text: 'Предлагаем самые выгодные цены',
    },
    {
        id: 3,
        text: 'Наши покупатели всегда остаются довольны',
        typeCircle: 'big'
    },
    {
        id: 4,
        text: 'Широкий ассортимент товаров для всей семьи',
    },
    {
        id: 5,
        text: 'Возможность доставки в любой город Беларуси',
        typeCircle: 'big'
    },
    {
        id: 6,
        text: 'Пункты выдачи заказов рядом с домом',
        typeCircle: 'small'
    },
];