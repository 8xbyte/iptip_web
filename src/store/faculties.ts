import FullstackDevelopmentQr from '@/assets/fullstack-development-qr.svg'
import ComputerDesignQr from '@/assets/computer-design-qr.svg'
import NanoelectronicsQr from '@/assets/nanoelectronics-qr.svg'
import LaserEngineeringQr from '@/assets/laser-engineering-qr.svg'
import TechnologyOfArtisticProcessingOfMaterialsQr from '@/assets/technology-of-artistic-processing-of-materials-qr.svg'
import DigitalMeasuringTechnologiesQr from '@/assets/digital-measuring-technologies-qr.svg'
import ModernAndPromisingMaterialsQr from '@/assets/modern-and-promising-materials-qr.svg'
import InnovativeTechnologiesOfUnmannedSystemsQr from '@/assets/innovative-technologies-of-unmanned-systems-qr.svg'
import PhysicsAndTechnologyOfNanosystemsQr from '@/assets/physics-and-technology-of-nanosystems-qr.svg'
import MixedRealityEnvironmentDesignQr from '@/assets/mixed-reality-environment-design-qr.svg'
import OpticalElectronicInformationMeasuringQr from '@/assets/optical-electronic-information-measuring-qr.svg'
import DigitalAndAdditiveTechnologiesInMechanicalEngineeringQr from '@/assets/digital-and-additive-technologies-in-mechanical-engineering-qr.svg'

import IndustrialProgrammingMasterQr from '@/assets/industrial-programming-master-qr.svg'
import LaserOpticalElectronicDevicesAndSystemsMasterQr from '@/assets/laser-optical-electronic-devices-and-systems-master-qr.svg'
import DesignVisualizationOfIndustrialProductsMasterQr from '@/assets/design-visualization-of-industrial-products-master-qr.svg'
import ComputerDesignMasterQr from '@/assets/computer-design-master-qr.svg'
import DigitalAndAdditiveTechnologiesInMechanicalEngineeringMasterQr from '@/assets/digital-and-additive-technologies-in-mechanical-engineering-master-qr.svg'
import GraphicDesignMasterQr from '@/assets/graphic-design-master-qr.svg'
import MicroAndNanoelectronicsTechnologiesAndDevicesMasterQr from '@/assets/micro-and-nanoelectronics-technologies-and-devices-master-qr.svg'
import MetrologicalExpertiseAndAccreditationMasterQr from '@/assets/metrological-expertise-and-accreditation-master-qr.svg'
import OpticalTechnologiesMasterQr from '@/assets/optical-technologies-master-qr.svg'
import PhysicsAndTechnologyOfNanosystemsMasterQr from '@/assets/physics-and-technology-of-nanosystems-master-qr.svg'

import { IFaculty } from '@/interfaces/faculty'

const faculties: Array<IFaculty> = [
    {
        id: 1,
        passingScore: 274,
        qrUrl: FullstackDevelopmentQr,
        type: 'Бакалавриат',
        date: '09.03.02',
        direction: 'IT-направление',
        institute: 'Информационные системы и технологии',
        name: 'Фуллстек разработка',
        description:
            'В рамках профиля ведётся подготовка специалистов, которые умеют производить разработку программного обеспечения с использованием различных языков программирования: С++, Python, Javascript, Go, C# и др., а также с применением разнообразных паттернов и фреймворков',
        price: 288000,
        budgetPlaces: 140,
        exams: [
            [
                {
                    name: 'Профильная математика',
                    shortName: 'Математика (профиль)',
                    minScore: 39
                }
            ],
            [
                {
                    name: 'Русский язык',
                    minScore: 40
                }
            ],
            [
                {
                    name: 'Информатика',
                    minScore: 47
                }
            ]
        ],
        practicePlaces: [
            'АО «Ситроникс»',
            'ПАО «Ростелеком»',
            'АО «Российские космические системы»',
            'ПАО «Группа Астра»'
        ],
        professions: [
            'Программист',
            'Разработчик',
            'Аналитик',
            'Тестировщик',
            'Системный администратор'
        ]
    },
    {
        id: 2,
        passingScore: 258,
        qrUrl: ComputerDesignQr,
        type: 'Бакалавриат',
        date: '09.03.02',
        direction: 'IT-направление',
        institute: 'Информационные системы и технологии',
        name: 'Компьютерный дизайн',
        price: 259500,
        budgetPlaces: 51,
        description:
            'В рамках профиля ведётся подготовка специалистов, которые знают, как оформлять проекты в медиа среде (разработка дизайна сайтов, промо-страниц, лэндингов), создавать логотипы, баннеры, инфографику и другие графические составляющие дизайна web-проекта',
        exams: [
            [
                {
                    name: 'Профильная математика',
                    shortName: 'Математика (профиль)',
                    minScore: 39
                }
            ],
            [
                {
                    name: 'Русский язык',
                    minScore: 40
                }
            ],
            [
                {
                    name: 'Информатика',
                    minScore: 44
                }
            ]
        ],
        practicePlaces: [
            'АО «Атомэнергопроект»',
            'ООО «Архитекция»',
            'ООО «Агм-Про»',
            'ООО «Гернет»'
        ],
        professions: ['Веб-дизайнер', 'UI/UX дизайнер', 'Дизайнер интерфейсов']
    },
    {
        id: 3,
        passingScore: 239,
        qrUrl: NanoelectronicsQr,
        type: 'Бакалавриат',
        date: '11.03.04',
        direction: 'IT-направление',
        institute: 'Электроника и наноэлектроника',
        name: 'Наноэлектроника',
        price: 240000,
        budgetPlaces: 28,
        description:
            'В рамках профиля ведётся подготовка специалистов в сфере моделирования, проектирования, технологий изготовления современных элементов электроники. Такие специалисты умеют моделировать, проектировать, конструировать и эксплуатировать электронные приборы, устройства, установки различного функционального назначения',
        exams: [
            [
                {
                    name: 'Профильная математика',
                    shortName: 'Математика (профиль)',
                    minScore: 39
                }
            ],
            [
                {
                    name: 'Русский язык',
                    minScore: 40
                }
            ],
            [
                {
                    name: 'Информатика',
                    minScore: 44
                },
                {
                    name: 'Физика',
                    minScore: 39
                }
            ]
        ],
        practicePlaces: [
            'НПП «Пульсар»',
            'АО «Росэлектроника»',
            'ИСВЧПЭ РАН',
            'ГК «Микрон»',
            'АО «Плутон»',
            'ФГУП «НПЦАП»',
            'НПО Торий',
            'Завод «Авангард»'
        ],
        professions: [
            'Инженер-электронщик',
            'Инженер-проектировщик',
            'Инженер-исследователь'
        ]
    },
    {
        id: 4,
        passingScore: 213,
        qrUrl: LaserEngineeringQr,
        type: 'Бакалавриат',
        date: '12.03.05',
        direction: 'Инженерное направление',
        institute: 'Лазерная техника и лазерные технологии',
        name: 'Лазерная инженерия',
        price: 240000,
        budgetPlaces: 39,
        description:
            'В рамках профиля ведётся подготовка специалистов, которые способны создавать модели лазерных, оптических, оптико-электронных, механических блоков, узлов и деталей, используя системы автоматизированного проектирования',
        exams: [
            [
                {
                    name: 'Профильная математика',
                    shortName: 'Математика (профиль)',
                    minScore: 39
                }
            ],
            [
                {
                    name: 'Русский язык',
                    minScore: 40
                }
            ],
            [
                {
                    name: 'Физика',
                    minScore: 39
                }
            ]
        ],
        practicePlaces: [
            "АО «НПО 'Орион'»",
            "АО «НИИ 'Полюс' имени М.Ф. Стельмаха»",
            'ФГУП ВНИИ ОФИ',
            "ООО НТО 'ИРЭ-Полюс'",
            "АО «НПК 'СПП'»"
        ],
        professions: [
            'Инженер-конструктор',
            'Инженер-исследователь',
            'Инженер оптико-электронных приборов',
            'Специалист по фотонике'
        ]
    },
    {
        id: 5,
        passingScore: 192,
        qrUrl: TechnologyOfArtisticProcessingOfMaterialsQr,
        type: 'Бакалавриат',
        date: '29.03.04',
        direction: 'Творческое направление',
        institute: 'Технология художественной обработки материалов',
        name: 'Технология художественной обработки материалов',
        price: 259500,
        budgetPlaces: 30,
        description:
            'В рамках профиля ведётся подготовка специалистов, которые умеют составлять художественные композиции, разрабатывать эскизы художественно-промышленных изделий, использовать материалы и современные технологии художественной обработки материалов, выполнять реальные практические работы',
        exams: [
            [
                {
                    name: 'Профильная математика',
                    shortName: 'Математика (профиль)',
                    minScore: 39
                }
            ],
            [
                {
                    name: 'Русский язык',
                    minScore: 40
                }
            ],
            [
                {
                    name: 'Творческий экзамен',
                    minScore: 30
                }
            ]
        ],
        practicePlaces: [
            'АО «Атомэнергопроект»',
            'ООО «Архитекция»',
            'ООО «Агм-Про»',
            'ООО «Гернет»'
        ],
        professions: [
            'Инженер-технолог',
            'Инженер-технолог интерьеров',
            'Промышленный дизайнер',
            'Ювелир-модельер 3D'
        ]
    },
    {
        id: 6,
        passingScore: 208,
        qrUrl: DigitalMeasuringTechnologiesQr,
        type: 'Бакалавриат',
        date: '27.03.01',
        direction: 'Инженерное направление',
        institute: 'Стандартизация и метрология',
        name: 'Цифровые измерительные технологии',
        price: 240000,
        budgetPlaces: 25,
        description:
            'В рамках профиля ведётся подготовка специалистов в области цифровых измерительных технологий, стандартизации, контроля качества и испытаний продукции в различных отраслях. Специалисты обладают знаниями в области метрологического обеспечения цифровых измерительных технологий, выбора средств измерений, оценки точности и достоверности результатов измерений',
        exams: [
            [
                {
                    name: 'Профильная математика',
                    shortName: 'Математика (профиль)',
                    minScore: 39
                }
            ],
            [
                {
                    name: 'Русский язык',
                    minScore: 40
                }
            ],
            [
                {
                    name: 'Информатика',
                    minScore: 44
                },
                {
                    name: 'Физика',
                    minScore: 39
                }
            ]
        ],
        practicePlaces: [
            'ФГБУ «ВНИИМС»',
            'ФГУП «ВНИИОФИ»',
            'ФБУ «Ростест-Москва»',
            'ПАО «Мосэнерго»',
            'АО «Российские космические системы»'
        ],
        professions: [
            'Инженер по метрологии',
            'Специалист по стандартизации и сертификации',
            'Специалист по метрологии',
            'Инженер ОТК'
        ]
    },
    {
        id: 7,
        passingScore: 186,
        qrUrl: ModernAndPromisingMaterialsQr,
        type: 'Бакалавриат',
        date: '22.03.01',
        direction: 'Инженерное направление',
        institute: 'Материаловедение и технологии материалов',
        name: 'Современные и перспективные материалы',
        price: 240000,
        budgetPlaces: 32,
        description:
            'В рамках профиля ведётся подготовка уникальных специалистов для различных отраслей промышленности, которые будут владеть комплексом знаний в области материаловедения, включая не только металлы и сплавы на их основе, но и неметаллические материалы и композиционные материалы',
        exams: [
            [
                {
                    name: 'Профильная математика',
                    shortName: 'Математика (профиль)',
                    minScore: 39
                }
            ],
            [
                {
                    name: 'Русский язык',
                    minScore: 40
                }
            ],
            [
                {
                    name: 'Химия',
                    minScore: 39
                },
                {
                    name: 'Физика',
                    minScore: 39
                }
            ]
        ],
        practicePlaces: [
            'АО «Композит»',
            'ПАО «Туполев»',
            'ВНИИНМ имени А.А. Бочвара',
            'НИИ Стали',
            'АО «ОКБ КП»'
        ],
        professions: [
            'Инженер-технолог',
            'Инженер-исследователь',
            'Инженер-конструктор',
            'Научный сотрудник'
        ]
    },
    {
        id: 8,
        passingScore: 243,
        qrUrl: InnovativeTechnologiesOfUnmannedSystemsQr,
        type: 'Бакалавриат',
        date: '27.03.05',
        direction: 'IT-направление',
        institute: 'Инноватика',
        name: 'Инновационные технологии беспилотных систем',
        price: 259500,
        budgetPlaces: 25,
        description:
            'В рамках профиля ведётся подготовка специалистов, которые способны применять инновационные технологии для управления беспилотными системами, проектировать и эксплуатировать цифровую инфраструктуру для управления беспилотными системами',
        exams: [
            [
                {
                    name: 'Профильная математика',
                    shortName: 'Математика (профиль)',
                    minScore: 39
                }
            ],
            [
                {
                    name: 'Русский язык',
                    minScore: 40
                }
            ],
            [
                {
                    name: 'Информатика',
                    minScore: 44
                },
                {
                    name: 'Физика',
                    minScore: 39
                }
            ]
        ],
        practicePlaces: [
            'Министерство транспорта Российской Федерации',
            'Транспортно-логистические компании',
            'Транспортно-экспедиционные компании',
            'Центры по организации дорожного движения (ЦОДД)'
        ],
        professions: [
            'Специалист по проектированию и эксплуатации беспилотной инфраструктуры',
            'Руководитель проектов в сфере беспилотных систем',
            'Инженер по тестированию беспилотных аппаратов и инфраструктуры'
        ]
    },
    {
        id: 9,
        passingScore: 222,
        qrUrl: PhysicsAndTechnologyOfNanosystemsQr,
        type: 'Бакалавриат',
        date: '28.03.01',
        direction: 'Инженерное направление',
        institute: 'Нанотехнологии и микросистемная техника',
        name: 'Физика и технологии наносистем',
        price: 281000,
        budgetPlaces: 35,
        description:
            'В рамках профиля ведётся подготовка специалистов в области моделирования, проектирования, технологий изготовления современных элементов микро- и наносистемной техники',
        exams: [
            [
                {
                    name: 'Профильная математика',
                    shortName: 'Математика (профиль)',
                    minScore: 39
                }
            ],
            [
                {
                    name: 'Русский язык',
                    minScore: 40
                }
            ],
            [
                {
                    name: 'Физика',
                    minScore: 39
                }
            ]
        ],
        practicePlaces: [
            'НПП «Пульсар»',
            'ИСВЧПЭ РАН',
            'АО «Плутон»',
            'НПО «Торий»',
            'АО «Росэлектроника»'
        ],
        professions: [
            'Инженер-проектировщик',
            'Инженер-исследователь',
            'Инженер-электронщик'
        ]
    },
    {
        id: 10,
        passingScore: 277,
        qrUrl: MixedRealityEnvironmentDesignQr,
        type: 'Бакалавриат',
        date: '54.03.01',
        direction: 'Творческое направление',
        institute: 'Дизайн',
        name: 'Дизайн сред смешанной реальности',
        price: 404000,
        budgetPlaces: 6,
        description:
            'В рамках профиля ведётся подготовка специалистов, которые знают современные концепции и требования в области дизайна, создают логотипы и фирменные стили; владеют средствами визуальной коммуникации',
        exams: [
            [
                {
                    name: 'Творческий экзамен',
                    shortName: 'Творческий экзамен',
                    minScore: 30
                }
            ],
            [
                {
                    name: 'Русский язык',
                    minScore: 40
                }
            ],
            [
                {
                    name: 'Англ. яз.',
                    minScore: 30
                },
                {
                    name: 'История',
                    minScore: 35
                },
                {
                    name: 'Обществознание',
                    minScore: 45
                }
            ]
        ],
        practicePlaces: [
            'АО «Атомэнергопроект»',
            'ООО «Архитекция»',
            'ООО «Агм-Про»',
            'ООО «Гернет»'
        ],
        professions: [
            'Специалист по дизайну графических и пользовательских интерфейсов',
            'Графический дизайнер'
        ]
    },
    {
        id: 11,
        type: 'Бакалавриат',
        date: '27.03.02',
        direction: 'Инженерное направление',
        institute: 'Управление качеством',
        name: 'Управление качеством',
        description: 'Описание',
        exams: [
            [
                {
                    name: 'Профильная математика',
                    shortName: 'Математика (профиль)',
                    minScore: 39
                }
            ],
            [
                {
                    name: 'Русский язык',
                    minScore: 40
                }
            ],
            [
                {
                    name: 'Информатика',
                    minScore: 44
                },
                {
                    name: 'Физика',
                    minScore: 39
                }
            ]
        ],
        practicePlaces: [],
        professions: []
    },
    {
        id: 12,
        type: 'Бакалавриат',
        date: '09.03.02',
        direction: 'IT-направление',
        institute: 'Информационные системы и технологии',
        name: 'Технологии разработки платформенных бизнес-приложений',
        description: 'Описание',
        exams: [
            [
                {
                    name: 'Профильная математика',
                    shortName: 'Математика (профиль)',
                    minScore: 39
                }
            ],
            [
                {
                    name: 'Русский язык',
                    minScore: 40
                }
            ],
            [
                {
                    name: 'Информатика',
                    minScore: 44
                }
            ]
        ],
        practicePlaces: [],
        professions: []
    },
    {
        id: 13,
        passingScore: 202,
        qrUrl: OpticalElectronicInformationMeasuringQr,
        type: 'Специалитет',
        wide: true,
        date: '12.05.01',
        direction: 'Инженерное направление',
        institute:
            'Электронные и оптико-электронные приборы и системы специального назначения',
        name: 'Оптико-электронные информационно-измерительные приборы и системы',
        price: 240000,
        budgetPlaces: 26,
        description:
            'В рамках специализации ведётся подготовка специалистов, которые хорошо знают свойства оптического, в том числе лазерного, излучения, основные оптические компоненты. Изучаются от простейших микроскопов и дальномеров до мощных лазерных технологических систем',
        exams: [
            [
                {
                    name: 'Профильная математика',
                    shortName: 'Математика (профиль)',
                    minScore: 39
                }
            ],
            [
                {
                    name: 'Русский язык',
                    minScore: 40
                }
            ],
            [
                {
                    name: 'Физика',
                    minScore: 39
                }
            ]
        ],
        practicePlaces: [
            "АО «НПО 'Орион'»",
            "АО «НИИ 'Полюс' имени М.Ф. Стельмаха»",
            'ФГУП ВНИИ ОФИ',
            "ООО НТО 'ИРЭ-Полюс'",
            "АО «НПК 'СПП'»"
        ],
        professions: [
            'Инженер оптико-электронных приборов',
            'Инженер-разработчик компьютерной оптики',
            'Оптик',
            'Инженер-оптотехник'
        ]
    },
    {
        id: 14,
        passingScore: 223,
        qrUrl: DigitalAndAdditiveTechnologiesInMechanicalEngineeringQr,
        type: 'Бакалавриат',
        date: '15.03.01',
        wide: true,
        direction: 'Инженерное направление',
        institute: 'Машиностроение',
        name: 'Цифровые и аддитивные технологии в машиностроении',
        price: 259500,
        budgetPlaces: 34,
        description:
            'В рамках профиля ведётся подготовка специалистов, которые владеют современными технологиями изготовления изделий в условиях цифрового машиностроительного производства, в том числе технологиями аддитивного производства',
        exams: [
            [
                {
                    name: 'Профильная математика',
                    shortName: 'Математика (профиль)',
                    minScore: 39
                }
            ],
            [
                {
                    name: 'Русский язык',
                    minScore: 40
                }
            ],
            [
                {
                    name: 'Информатика',
                    minScore: 44
                },
                {
                    name: 'Физика',
                    minScore: 39
                }
            ]
        ],
        practicePlaces: [
            'ЗАО «Станкопресс»',
            'ООО «Интегратор цифровых решений»',
            'Производственный комплекс «Салют» АО «ОДК»',
            'Институт машиноведения имени А. А. Благонравова РАН (ИМАШ РАН)'
        ],
        professions: [
            'Инженер-технолог',
            'Инженер-исследователь',
            'Инженер-технолог-программист',
            'Научный сотрудник'
        ]
    },
    {
        id: 15,
        passingScore: 60,
        qrUrl: IndustrialProgrammingMasterQr,
        type: 'Магистратура',
        date: '09.04.02',
        direction: 'IT-направление',
        institute: 'Информационные системы и технологии',
        name: 'Индустриальное программирование',
        price: 317000,
        budgetPlaces: 30,
        description:
            'В рамках программы ведётся подготовка специалистов, которые знают архитектурные, программные и бизнес-основы создания программного обеспечения для решения большинства индустриальных задач. Выпускники направления умеют разрабатывать и внедрять программное обеспечение с использованием различных языков программирования: С++, Javascript, C# и других, владеют принципами использования SQL и NoSQL баз данных, архитектурных паттернов программировании',
        exams: [
            [
                {
                    name: 'Высшая математика',
                    minScore: 30
                }
            ]
        ],
        practicePlaces: [
            'АО «Ситроникс»',
            'ПАО «Ростелеком»',
            'АО «Российские космические системы»'
        ],
        professions: [
            'Программист',
            'Разработчик',
            'Аналитик',
            'Тестировщик',
            'Системный администраторs'
        ]
    },
    {
        id: 19,
        // passingScore: 60,
        qrUrl: LaserOpticalElectronicDevicesAndSystemsMasterQr,
        type: 'Магистратура',
        date: '12.04.05',
        direction: 'Инженерное направление',
        institute: 'Лазерная техника и лазерные технологии',
        name: 'Лазерные оптико-электронные приборы и системы',
        price: 317000,
        budgetPlaces: 0,
        description:
            'В рамках профиля ведётся подготовка специалистов, которые знают современные методы компьютерного моделирования и проектирования, а также принципы работы основных лазерных оптико-электронных приборов. Они умеют разрабатывать компьютерные модели, функциональные схемы, технические задания на проектирование, трёхмерные модели, а также защищать предлагаемые технические решения',
        exams: [
            [
                {
                    name: 'Высшая математика',
                    minScore: 30
                }
            ]
        ],
        practicePlaces: [
            'АО «НИИ “Полюс” имени М.Ф. Стельмаха»',
            'АО «НПО “Орион”»',
            'ФГУП «ВНИИ ОФИ»',
            'ООО «НТО “ИРЭ-Полюс”»',
            'АО «Лыткаринский завод оптического стекла»'
        ],
        professions: [
            'Инженер-исследователь оптических и лазерных систем',
            'Инженер-конструктор оптического и лазерного оборудования',
            'Инженер-технолог производства оптической и лазерной техники',
            'Инженер-метролог',
            'Инженер-программист'
        ]
    },
    {
        id: 23,
        passingScore: 98,
        qrUrl: DesignVisualizationOfIndustrialProductsMasterQr,
        type: 'Магистратура',
        date: '29.04.04',
        direction: 'Творческое направление',
        institute: 'Технология художественной обработки материалов',
        name: 'Дизайн-визуализация промышленных изделий',
        price: 317000,
        budgetPlaces: 20,
        description:
            'В рамках профиля ведётся подготовка специалистов, которые способны реализовывать художественные проекты на базе знаний новых и традиционных материалов. Они умеют применять современные технологии компьютерного проектирования, 3D моделирования, декорирования и формообразования',
        exams: [
            [
                {
                    name: 'Теория и практика дизайна',
                    minScore: 15
                }
            ],
            [
                {
                    name: 'Творческое портфолио',
                    minScore: 15
                }
            ]
        ],
        practicePlaces: [
            'АО «Атомэнергопроект»',
            'ООО «Архитекция»',
            'ООО «Агм-Про»',
            'ООО «Гернет»'
        ],
        professions: [
            'Ведущий инженер-технолог',
            'Ведущий инженер-конструктор',
            '3D дизайнер'
        ]
    },
    {
        id: 16,
        passingScore: 60,
        qrUrl: ComputerDesignMasterQr,
        type: 'Магистратура',
        date: '09.04.02',
        direction: 'IT-направление',
        institute: 'Информационные системы и технологии',
        name: 'Компьютерный дизайн',
        price: 317000,
        budgetPlaces: 19,
        description:
            'В рамках профиля ведётся подготовка специалистов, которые имеют навыки для работы дизайнером в области медиапространства, навыки работы в сфере UI/UX-дизайна, навыки согласования дизайн-проекта с заказчиком. Выпускники проводят сбор и анализ статистической информации цифровых продуктов в дизайне; умеют решать прямые задачи, направленные на формирование и разработку объектов web-дизайна и игровой среды',
        exams: [
            [
                {
                    name: 'Высшая математика',
                    minScore: 30
                }
            ]
        ],
        practicePlaces: [
            'АО «Атомэнергопроект»',
            'ООО «Архитекция»',
            'ООО «Гернет»',
            'ООО «Агм-Про»'
        ],
        professions: [
            'Руководитель отдела контента',
            'Руководитель группы разработки',
            'Арт-директор',
            'Ведущий проектировщик интерфейсов'
        ]
    },
    {
        id: 20,
        passingScore: 45,
        qrUrl: DigitalAndAdditiveTechnologiesInMechanicalEngineeringMasterQr,
        type: 'Магистратура',
        date: '15.04.01',
        direction: 'Инженерное направление',
        institute: 'Машиностроение',
        name: 'Цифровые и аддитивные технологии в машиностроении',
        price: 317000,
        budgetPlaces: 11,
        description:
            'Выпускники умеют решать вопросы использования научных достижений при получении изделий в условиях высокотехнологичного, в том числе аддитивного, производства. Они также способны решать современные проблемы машиностроительного производства, проводить сравнительный анализ различных технологических процессов; вести научно-исследовательские работы в области аддитивных и других инновационных технологий в машиностроении',
        exams: [
            [
                {
                    name: 'Высшая математика',
                    minScore: 30
                }
            ]
        ],
        practicePlaces: [
            'ЗАО «Станкопресс»',
            'ООО «Интегратор цифровых решений»',
            'НПЦ «Газотурбостроения "САЛЮТ"»',
            'ФГБУ «Институт машиноведения имени А.А. Благонравова» ИМАШ РАН'
        ],
        professions: [
            'Инженер-технолог',
            'Инженер-исследователь',
            'Научный сотрудник'
        ]
    },
    {
        id: 24,
        passingScore: 112,
        qrUrl: GraphicDesignMasterQr,
        type: 'Магистратура',
        date: '54.04.01',
        direction: 'Творческое направление',
        institute: 'Дизайн',
        name: 'Графический дизайн',
        price: 550000,
        budgetPlaces: 20,
        description:
            'В рамках профиля ведётся подготовка специалистов в области дизайна информационного и визуального пространства, промышленного и графического дизайна. Такие специалисты знают современные тенденции проектно-художественного творчества в сфере дизайна, методики и практики дизайн-технологий и проектной работы',
        exams: [
            [
                {
                    name: 'Теория и практика дизайна',
                    minScore: 15
                }
            ],
            [
                {
                    name: 'Творческое портфолио',
                    minScore: 15
                }
            ]
        ],
        practicePlaces: [
            'АО «Атомэнергопроект»',
            'ООО «Архитекция»',
            'ООО «Агм-Про»',
            'ООО «Гернет»'
        ],
        professions: ['3D-дизайнер', 'Ведущий дизайнер', 'Арт-директор']
    },
    {
        id: 17,
        passingScore: 57,
        qrUrl: MicroAndNanoelectronicsTechnologiesAndDevicesMasterQr,
        type: 'Магистратура',
        date: '11.04.04',
        direction: 'Инженерное направление',
        institute: 'Электроника и наноэлектроника',
        name: 'Технологии и устройства микро- и наноэлектроники',
        price: 317000,
        budgetPlaces: 12,
        description:
            'В рамках профиля ведётся подготовка специалистов в области моделирования, проектирования, технологий изготовления современных элементов электроники. Они знают современные и перспективные технологические процессы изготовления элементной базы электроники. В ходе обучения много внимания и времени уделяется методам и программам компьютерного моделирования и проектирования',
        exams: [
            [
                {
                    name: 'Высшая математика',
                    minScore: 30
                }
            ]
        ],
        practicePlaces: [
            'НПП «Пульсар»',
            'ИСВЧПЭ РАН',
            'АО «Плутон»',
            'АО «Росэлектроника»',
            'НПО «Торий»'
        ],
        professions: [
            'Инженер-электронщик',
            'Инженер-проектировщик',
            'Инженер-исследователь'
        ]
    },
    {
        id: 21,
        passingScore: 80,
        qrUrl: MetrologicalExpertiseAndAccreditationMasterQr,
        type: 'Магистратура',
        date: '12.04.02',
        direction: 'Инженерное направление',
        institute: 'Стандартизация и метрология',
        name: 'Метрологическая экспертиза и аккредитация',
        price: 317000,
        budgetPlaces: 12,
        description:
            'В рамках направления ведётся подготовка специалистов в области метрологической экспертизы и аккредитации. Выпускники способны выявлять закономерности и тенденции развития системы метрологического обеспечения; прогнозировать способы решения проблем, связанных с обеспечением единства измерений в наукоёмких областях, включая использование фундаментальных свойств источников синхротронного излучения. Они также умеют составлять аналитические обзоры и справки',
        exams: [
            [
                {
                    name: 'Высшая математика',
                    minScore: 30
                }
            ]
        ],
        practicePlaces: [
            'ФГБУ «ВНИИМС»',
            'ФГУП «ВНИИОФИ»',
            'Центр сертификации микроэлектроники',
            'Центр сертификации микроэлектроники',
            'ФБУ «Ростест-Москва»',
            'ФБУ «Ростест-Москва»'
        ],
        professions: [
            'Инженер по метрологии',
            'Техник-метролог',
            'Инженер-испытатель средств измерения и контроля',
            'Специалист по метрологии'
        ]
    },
    {
        id: 18,
        passingScore: 62,
        qrUrl: MicroAndNanoelectronicsTechnologiesAndDevicesMasterQr,
        type: 'Магистратура',
        date: '12.04.02',
        direction: 'Инженерное направление',
        institute: 'Оптотехника',
        name: 'Оптические технологии',
        price: 317000,
        budgetPlaces: 13,
        description:
            'В рамках программы ведётся подготовка специалистов в области разработки и эксплуатации современных прецизионных технологий в волоконной оптике, оптоэлектронике и точном приборостроении. Они знают современные оптоволоконные технологии, лазерные технологии резки и обработки оптических материалов. Специалисты умеют формулировать задачи научного исследования в области оптотехники, выбирать оптимальные методы экспериментальных исследований, проводить измерения с выбором технических средств и обработкой результатов, защищать приоритеты и новизну полученных результатов исследований',
        exams: [
            [
                {
                    name: 'Высшая математика',
                    minScore: 30
                }
            ]
        ],
        practicePlaces: [
            'АО «МЗ “Сапфир”»',
            'ОАО «НПП “Геофизика-Космос”»',
            'ОАО «НИТС имени В.Ф. Солинова»',
            'ООО «Т8»',
            'ЗАО «Москабель-Фуджикура»'
        ],
        professions: [
            'Инженер-технолог',
            'Инженер-конструктор',
            'Инженер-исследователь'
        ]
    },
    {
        id: 22,
        passingScore: 45,
        qrUrl: PhysicsAndTechnologyOfNanosystemsMasterQr,
        type: 'Магистратура',
        date: '28.04.01',
        direction: 'Инженерное направление',
        institute: 'Нанотехнологии и микросистемная техника',
        name: 'Физика и технологии наносистем',
        price: 370000,
        budgetPlaces: 2,
        description:
            'В рамках профиля ведётся подготовка специалистов в области моделирования, проектирования, технологий изготовления современных элементов микро- и наносистемной техники. Они обладают глубокими знаниями физики работы элементов микро- и наносистемной техники и электроники, владеют методами и программами компьютерного моделирования в данной области',
        exams: [
            [
                {
                    name: 'Высшая математика',
                    minScore: 30
                }
            ]
        ],
        practicePlaces: [
            'НПП «Пульсар»',
            'ИСВЧПЭ РАН',
            'АО «Плутон»',
            'НПО «Торий»',
            'АО «Росэлектроника»'
        ],
        professions: [
            'Инженер-проектировщик',
            'Инженер-исследователь',
            'Инженер-электронщик'
        ]
    }
]

export default faculties
