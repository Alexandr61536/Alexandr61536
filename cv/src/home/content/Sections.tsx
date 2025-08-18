import type { CardsContentType } from "../components/Card";

export type SectionsContentType = {
    [SectionName: string]: {
        title: string,
        cards: CardsContentType[],
    }
}

export const SectionsContent: SectionsContentType = {
    "experience": {
        title: "ОПЫТ РАБОТЫ",
        cards: [
            {
                head: "ОПЫТНЫЙ ЗАВОД",
                title: "3 МЕСЯЦА",
                text: "РАЗРАБОТКА ВНУТРЕННЕГО ИНСТРУМЕНТА ДЛЯ ОПЫТНОГО ЗАВОДА (FRONTEND, ЧАСТЬ BACKEND И РАЗВЁРТКА НА ХОСТИНГЕ)"
            },
            {
                head: "ОПЫТНЫЙ ЗАВОД",
                title: "3 МЕСЯЦА",
                text: "РАЗРАБОТКА FRONTEND ДЛЯ УМНЫХ СПОРТИВНЫХ ТАБЛО",
            },
            {
                head: "SERVICE ENERGY",
                title: "1 ГОД",
                text: <div style={{textAlign: "justify"}}>
                    Разработка frontend для системы контроля и управления воздушными линиями электропередач. 
                    Работа ведётся с имеющимся Web-приложением для управления устройствами дистанционной диагностики, 
                    предоставляемым клиентам по модели SaaS. 
                    В начале работы разрабатывал глобальное обновление, затем, по его внедрении, был был совершён переход к feature drop обновлениям. 
                    Производятся работы следующих категорий: 
                    <ul>
                        <li style={{textAlign: "left"}}>
                            Разработка дизайна и, как следствие, макетов компонентов, изменяемых при обновлении
                        </li>
                        <li style={{textAlign: "left"}}>
                            Реализация новых страниц, опирающихся на вводимые абстракции
                        </li>
                        <li style={{textAlign: "left"}}>
                            Обновление имеющихся компонентов, (изменение/добавление функционала, изменение дизайна, рефакторинг кода)
                        </li>
                        <li style={{textAlign: "left"}}>
                            Обновление библиотек, используемых в проекте, необходимое для введения нового функционала и повышения стабильности работы
                        </li>
                        <li style={{textAlign: "left"}}>
                            Составление пользовательской документации для обновляемых частей Web-приложения
                        </li>
                    </ul> 
                    Разработка ведётся с использованием следующих технологий:
                    <ul>
                        <li style={{textAlign: "left"}}>
                            TypeScript
                        </li>
                        <li style={{textAlign: "left"}}>
                            React
                        </li>
                        <li style={{textAlign: "left"}}>
                            Mantine
                        </li>
                        <li style={{textAlign: "left"}}>
                            React Router DOM
                        </li>
                        <li style={{textAlign: "left"}}>
                            Zustand
                        </li>
                        <li style={{textAlign: "left"}}>
                            Axios
                        </li>
                        <li style={{textAlign: "left"}}>
                            Emotion
                        </li>
                        <li style={{textAlign: "left"}}>
                            React Query
                        </li>
                        <li style={{textAlign: "left"}}>
                            ApexCharts
                        </li>
                        <li style={{textAlign: "left"}}>
                            Yandex Maps JavaScript API
                        </li>
                    </ul> 
                </div>,
            },
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
                list: [
                    {
                        text: "REACT (TS, MANTINE, REACT-ROUTER-DOM, REACT-QUERY, ZUSTAND, TAILWIND, YMAPS) "
                    },
                    {
                        text: "GIT",
                    },
                ]
            },
            {
                title: "ВТОРИЧНЫЕ РАБОЧИЕ НАВЫКИ",
                list: [
                    {
                        text: "EXPRESS"
                    },
                    {
                        text: "POSTGRESQL, SQLITE (С ИСПОЛЬЗОВАНИЕМ ORM И БЕЗ)",
                    },
                    {
                        text: "LINUX"
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
                        text: "НАПРАВЛЕННО ВЫРАБОТАННАЯ И ОТТОЧЕННАЯ ГОДАМИ КОММУНИКАТИВНОСТЬ, СПОСОБНОСТЬ БЫСТРО ВЛИВАТЬСЯ В КОЛЛЕКТИВ, А ТАКЖЕ ЭФФЕКТИВНО В НЁМ РАБОТАТЬ. ИМЕЕТСЯ НЕОДНОКРАТНЫЙ ОПЫТ ОРГАНИЗАЦИИ РАБОЧЕГО ПРОЦЕССА И ДОСУГА КОЛЛЕКТИВА.",
                    }
                ]
            },
        ]
    }
}