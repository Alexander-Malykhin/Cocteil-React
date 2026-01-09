//images
import bonusImage from '../assets/bonus.png';
import gearImage from '../assets/gear.png';
import lessonsImage from '../assets/lessons.png';
import listImage from '../assets/list.png';

interface dataCooperationInterface {
    id: number,
    title: string,
    text: string
}

interface dataCooperationAdvantagesInterface {
    id: number,
    text: string,
    image: string
}

const dataCooperation: dataCooperationInterface[] = [
    {
        id: 1,
        title: "Становитесь партнёром",
        text: "Регистрируйтесь и переходите в свой кабинет"
    },
    {
        id: 2,
        title: "Рекламируйте товары",
        text: "Рекламируйте наши товары на форумах, сайтах, в социальных сетях"
    },
    {
        id: 3,
        title: "Приводите покупателей",
        text: "Приводите покупателей на наш сайт по уникальной ссылке"
    },
    {
        id: 4,
        title: "Получайте бонусы",
        text: "Копите бонусы от каждого оплаченного заказа"
    }
]

const dataCooperationAdvantages: dataCooperationAdvantagesInterface[] = [
    {
        id: 1,
        text: 'Автоматизация процессов',
        image: gearImage
    },
    {
        id: 2,
        text: 'Пополнение ассортимента',
        image: listImage
    },
    {
        id: 3,
        text: 'Поддержка и обучение',
        image: lessonsImage
    },
    {
        id: 4,
        text: 'Бонусы за новых клиентов',
        image: bonusImage
    }
]

export const dataCooperationResult = {
    cooperation: dataCooperation,
    advantages: dataCooperationAdvantages
}
