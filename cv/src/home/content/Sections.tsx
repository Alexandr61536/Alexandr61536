import type { CardsContentType } from "../components/Card";

export type SectionsContentType = {
    [SectionName: string]: {
        title: string,
        cards: CardsContentType[],
    }
}


function getTimePassed(year: number, month: number): string {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 2;
    
    let totalMonths = (currentYear - year) * 12 + (currentMonth - month);
    if (totalMonths < 0) totalMonths = 0;
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    if (totalMonths === 0) return "меньше месяца";
    
    const yearsText = getDeclension(years, ['год', 'года', 'лет']);
    const monthsText = getDeclension(months, ['месяц', 'месяца', 'месяцев']);
    
    return [yearsText, monthsText].filter(Boolean).join(', ');
}

function getDeclension(number: number, forms: [string, string, string]): string {
    if (number === 0) return '';
    
    const n = Math.abs(number) % 100;
    const n1 = n % 10;
    
    if (n > 10 && n < 20) return `${number} ${forms[2]}`;
    if (n1 > 1 && n1 < 5) return `${number} ${forms[1]}`;
    if (n1 === 1) return `${number} ${forms[0]}`;
    
    return `${number} ${forms[2]}`;
}

export const SectionsContent: SectionsContentType = {
    "experience": {
        title: "ОПЫТ РАБОТЫ",
        cards: [
            {
                head: "ОПЫТНЫЙ ЗАВОД",
                title: "3 МЕСЯЦА",
                text: <div 
                    css={{
                        textAlign: "justify",
                        "& ul": {
                            marginTop: 0,
                            paddingLeft: "clamp(0.5rem, 2.5vw, 1rem)",
                        }
                    }}
                >
                    Разработка внутренней платформы для опытного завода, позволяющей оптимизировать процесс формирования коммерческих предложений (КП). 
                    В ходе создания занимался:
                    <ul>
                        <li>
                            Разработкой frontend
                        </li>
                        <li>
                            Разработкой части backend
                        </li>
                        <li>
                            Развёрткой на хостинге
                        </li>
                    </ul>
                    Продукт позволяет формировать коммерческие предложения путём заполнения форм, 
                    генерируемых на основе сформированных ранее JSON-документов, получаемых с сервера, 
                    а затем получать их в виде автоматически сгенерированных PDF-документов.<br/>
                    Разработка велась с использованием следующих технологий:
                    <ul>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Mantine
                        </li>
                        <li>
                            Express
                        </li>
                    </ul> 
                </div>
            },
            {
                head: "ОПЫТНЫЙ ЗАВОД",
                title: "3 МЕСЯЦА",
                text: <div 
                    css={{
                        textAlign: "justify",
                        "& ul": {
                            marginTop: 0,
                            paddingLeft: "clamp(0.5rem, 2.5vw, 1rem)",
                        }
                    }}
                >
                    Разработка frontend для умных спортивных табло.
                    Табло представляет собой решение, состоящее из LED-панели и неттопа. 
                    В ходе работы было разработано 3 клиентских приложения:
                    <ul>
                        <li>
                            Приложение для администраторов
                            <ul>
                                <li>
                                    Управление учётными записями пользователей
                                    <ul>
                                        <li>
                                            Просмотр
                                        </li>
                                        <li>
                                            CRUD-операции
                                        </li>   
                                    </ul>
                                </li>
                                <li>
                                    Управление пресетами табло
                                    <ul>
                                        <li>
                                            Просмотр
                                        </li>
                                        <li>
                                            CRUD-операции
                                        </li>   
                                        <li>
                                            Гибкий конструктор для создания и редактирования пресетов, основанный на предоставляемом наборе виджетов с возможностью глубокой их стилизации
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Приложение для судей
                            <ul>
                                <li>
                                    Управление табло
                                    <ul>
                                        <li>
                                            Выбор матча для табло
                                        </li>
                                        <li>
                                            Выбор пресета для табло
                                        </li>
                                        <li>
                                            Задание значений для виджетов
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Сохранение служебной информации о матче
                                </li>
                                <li>
                                    Загрузка медиа-файлов на сервер для дальнейшего использования
                                </li>
                                <li>
                                    Управление командами
                                    <ul>
                                        <li>
                                            Просмотр
                                        </li>
                                        <li>
                                            CRUD-операции
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Управление игроками
                                    <ul>
                                        <li>
                                            Просмотр
                                        </li>
                                        <li>
                                            CRUD-операции
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Управление матчами
                                    <ul>
                                        <li>
                                            Просмотр
                                        </li>
                                        <li>
                                            CRUD-операции
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Приложение для самого табло (запускаемое автоматически на встроенных неттопах)
                            <ul>
                                <li>
                                    Инициализация (получение id и прочей служебной информации)
                                </li>
                                <li>
                                    Показ и автообновление задаваемой информации
                                </li>
                            </ul>
                        </li>
                    </ul>
                    Разработка велась с использованием следующих технологий:
                    <ul>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Mantine
                        </li>
                    </ul> 
                </div>,
            },
            {
                head: "SERVICE ENERGY",
                title: getTimePassed(2024, 6).toUpperCase(),
                text: <div 
                    css={{
                        textAlign: "justify",
                        "& ul": {
                            marginTop: 0,
                            paddingLeft: "clamp(0.5rem, 2.5vw, 1rem)",
                        }
                    }}
                >
                    Разработка frontend для системы контроля и управления воздушными линиями электропередач. 
                    Работа ведётся с имеющимся Web-приложением для управления устройствами дистанционной диагностики, 
                    предоставляемым клиентам по модели SaaS. 
                    В начале работы разрабатывал глобальное обновление, затем, по его внедрении, был был совершён переход к feature drop обновлениям. 
                    Производятся работы следующих категорий: 
                    <ul>
                        <li>
                            Разработка дизайна и, как следствие, макетов компонентов, изменяемых при обновлении
                        </li>
                        <li>
                            Реализация новых страниц, опирающихся на вводимые абстракции
                        </li>
                        <li>
                            Обновление имеющихся компонентов, (изменение/добавление функционала, изменение дизайна, рефакторинг кода)
                        </li>
                        <li>
                            Обновление библиотек, используемых в проекте, необходимое для введения нового функционала и повышения стабильности работы
                        </li>
                        <li>
                            Составление пользовательской документации для обновляемых частей Web-приложения
                        </li>
                    </ul> 
                    Разработка ведётся с использованием следующих технологий:
                    <ul>
                        <li>
                            TypeScript
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Mantine
                        </li>
                        <li>
                            React Router DOM
                        </li>
                        <li>
                            Zustand
                        </li>
                        <li>
                            Axios
                        </li>
                        <li>
                            Emotion
                        </li>
                        <li>
                            React Query
                        </li>
                        <li>
                            ApexCharts
                        </li>
                        <li>
                            Yandex Maps JavaScript API
                        </li>
                    </ul> 
                </div>,
            },
            {
                head: "ДАЛЬШЕ - БОЛЬШЕ",
            }
        ],
    },
    "education": {
        title: "ОБРАЗОВАНИЕ",
        cards: [
            {
                title: "БАКАЛАВРИАТ",
                text: "МЭИ ИВТИ (БЫВ. АВТИ, АВТФ) ГРУППА ЭТАЛОН"
            },
        ],
    },
    "hardSkills": {
        title: "РАБОЧИЕ НАВЫКИ",
        cards: [
            {
                title: "ОСНОВНЫЕ РАБОЧИЕ НАВЫКИ",
                chips: [
                    { 
                        text: "HTML",
                    },
                    { 
                        text: "CSS",
                    },
                    { 
                        text: "JavaScript",
                    },
                    { 
                        text: "TypeScript",
                    },
                    { 
                        text: "React",
                    },
                    { 
                        text: "Mantine",
                    },
                    { 
                        text: "React Router DOM",
                    },
                    { 
                        text: "Zustand",
                    },
                    { 
                        text: "Axios",
                    },
                    { 
                        text: "Emotion",
                    },
                    { 
                        text: "TanStack",
                    },
                    { 
                        text: "ApexCharts",
                    },
                    { 
                        text: "Yandex Maps JavaScript API",
                    },
                    { 
                        text: "GIT",
                    },
                    { 
                        text: "REST",
                    },
                    { 
                        text: "Tailwind",
                    },
                    { 
                        text: "Figma",
                    },
                    { 
                        text: "Webpack",
                    },
                    { 
                        text: "Vite",
                    },
                    { 
                        text: "Yarn",
                    },
                    { 
                        text: "NPM",
                    },
                ]
            },
            {
                title: "ВТОРИЧНЫЕ РАБОЧИЕ НАВЫКИ",
                list: [
                    {
                        text: "Express"
                    },
                    {
                        text: "PostgreSQL, SQLite (с использованием ORM и без)",
                    },
                    {
                        text: "Linux"
                    },
                ]
            },
        ]
    },
    "softSkills": {
        title: "ЛИЧНЫЕ КАЧЕСТВА",
        cards: [
            {
                list: [
                    {
                        text: "За время учебы благодаря активному участию в деятельности студенческих организаций развил коммуникативность и коммуникабельность, позволяющие быстро вливаться в коллектив, а также эффективно в нём работать. Кроме того, приобрёл опыт организации рабочего процесса и досуга коллективов."
                    }
                ]
            },
        ]
    }
}