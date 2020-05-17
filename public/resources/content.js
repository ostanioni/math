const ru = [      
    {"part": "Анализ",
     "chapters":[
        {"caption":"Введение",
         "paragraphs":[
            "Алгоритмы",
            "Пример задачи связности",
            "Алгоритм объединения-поиска",
            "Перспективы",
            "Обзор тем"
            ],
        },
        {"caption":"Принципы анализа алгоритмов",
         "paragraphs":[
            "Реализация и эмперический анализ",
            "Анализ алгоритмов",
            "Рост функций",
            "O-нотация",
            "Простейшие рекурсии",
            "Приемы анализа алгоритмов",
            "Гарантии, предсказания и ограничения"
         ],
        }
     ],
    },
    {   "part": "Структуры данных",
        "chapters":[
            {   
                "caption":"Элементарные структуры данных",
                "paragraphs": [
                    "Строительные блоки",
                    "Массивы",
                    "Связные списки",
                    "Обработка простых списков",
                    "Распеределение памяти под списки",
                    "Строки",
                    "Составные структуры данных"
                ],
            },
            {
                "caption":"Абстрактные типы данных",
                "paragraphs":[
                    "Абстрактные объекты и коллекции объектов",
                    "АТД стека магазинного типа",
                    "Примеры клиентских программ, использующих АТД стека",
                    "Реализация АТД стека",
                    "Создание нового АТД",
                    "Очереди FIFO и обощенные очереди",
                    "Повторяющиеся и индексные элементы",
                    "АТД первого класса",
                    "Пример использования АТД в приложениях",
                    "Перспективы"
                ]
            },
            {
                "caption":"Рекурсия и деревья",
                "paragraphs":[
                    "Рекурсивные алгоритмы",
                    "Разделяй и властвуй",
                    "Динамическое программирование",
                    "Деревья",
                    "Математические свойства бинарных деревьев",
                    "Обход дерева",
                    "Рекурсивные алгоритмы бинарных деревьев",
                    "Обход графа",
                    "Перспективы"
                ]
            }   
        ],
    },
    {   "part": "Сортировка",
        "chapters":[
            {
                "caption":"Элементарные методы сортировки",
                "paragraphs":[
                    "Правила игры",
                    "Сортировка выбором",
                    "Сортировка вставками",
                    "Пузырьковая сортировка",
                    "Характеристики производительности элементарных методов сортировки",
                    "Сортировка методом Шелла",
                    "Сортировка других типов данных",
                    "Сортировка по индексам и указателям",
                    "Сортировка связных списков",
                    "Метод распределяющего подсчета"
                ]
            },
            {
                "caption":"Быстрая сортировка",
                "paragraphs":[
                    "Базовый алгоритм",
                    "Характеристики производительности элементарных методов сортировки",
                    "Размер стека",
                    "Подфайлы небольших размеров",
                    "Метод разделения с вычислением медианы из трех элементов",
                    "Дублированные ключи",
                    "Строки и векторы",
                    "Выборка"
                ]
            },
            {
                "caption":"Сортировка и сортировка слиянием",
                "paragraphs":[
                    "Двухпутевое слияние",
                    "Абстрактное обменное слияние",
                    "Нисходящая сортировка слиянием",
                    "Усовершенствования базового алгоритма",
                    "Восходящая сортировка слиянием",
                    "Производительность сортировки слиянием",
                    "Реализация сортировки слиянием, ориентированная на связные списки",
                    "Возврат к рекурсии"
                ]
            },
            {
                "caption":"Очереди по приоритетам и пирамидальная сортировка",
                "paragraphs":[
                    "Элементарные реализации",
                    "Пирамидальная структура данных",
                    "Алгоритмы для сортирующих деревьев",
                    "Пирамидальная сортировка",
                    "Абстрактный тип данных очереди по приоритетам",
                    "Очередь по приоритетам для индексных элементов",
                    "Биномиальные очереди"
                ]
            },
            {
                "caption":"Поразрядная сортировка",
                "paragraphs":[
                    "Биты, байты и слова",
                    "Бинарная быстрая сортировка",
                    "Поразрядная сортировка MSD",
                    "Трехпутевая поразрядная быстрая сортировка",
                    "Поразрядная сортировка LSD",
                    "Рабочие характеристики поразрядных сортировок",
                    "Сортировки с сублинейным временем выполнения"
                ]
            },
            {
                "caption":"Методы сортировки специального назначения",
                "paragraphs":[
                    "Четно-нечетная сортировка слиянием Бэтчера",
                    "Сети сортировки",
                    "Внешняя сортировка",
                    "Различные реализации сортировки слиянием",
                    "Параллельная процедура сортировки слиянием"
                ]
            }
        ],
    },
    {   "part": "Поиск",
        "chapters":[
            {
                "caption":"Таблицы символов и деревья бинарного поиска",
                "paragraphs":[
                    "АТД таблицы символов",
                    "Поиск с использованием индексации по ключам",
                    "Последовательный поиск",
                    "Бинарный поиск",
                    "Деревья бинарного поиска",
                    "Характеристики производительности деревьев бинарного поиска",
                    "Реализация индексов при помощи таблиц символов",
                    "Вставка в корень в деревьях бинарного поиска",
                    "Реализация других функций АТД с помощью BST-дерева"
                ]
            },
            {
                "caption":"Сбалансированные деревья",
                "paragraphs":[
                    "Рандомизированные BST-деревья",
                    "Расширенные деревья бинарного поиска",
                    "Нисходящие 2-3-4-деревья",
                    "Красно-черные, или RB-деревья",
                    "Списки пропусков",
                    "Характеристики производительности"
                ]
            },
            {
                "caption":"Хэширование",
                "paragraphs":[
                    "Хэш-функции",
                    "Раздельное связывание",
                    "Линейное зондирование",
                    "Двойное хеширование",
                    "Динамические хеш-таблицы",
                    "Перспективы"
                ]
            },
            {
                "caption":"Поразрядный поиск",
                "paragraphs":[
                    "Деревья цифрового поиска",
                    "Trie-деревья",
                    "Patricia-деревья",
                    "Многопутевые trie-деревья и TST-деревья",
                    "Алгоритмы индексирования текстовых строк"
                ]
            }
        ],
    },
    {   "part": "Алгоритмы на графах",
        "chapters":[
            {
                "caption":"Свойства и типы графов",
                "paragraphs":[
                    "Глоссарий",
                    "АТД графа",
                    "Представление графа в виде матрицы смежности",
                    "Представление графа в виде списка смежных вершин",
                    "Вариации, расширения и затраты",
                    "Генераторы графов",
                    "Простые, эйлеровы и гамильтоновы пути",
                    "Задачи обработки графов"
                ]
            },
            {
                "caption":"Поиск на графах",
                "paragraphs":[
                    "Исследование лабиринта",
                    "Поиск в глубину",
                    "АТД-функции поиска на графе",
                    "Свойства лесов DFS",
                    "Отделимость и бисвязность",
                    "Поиск в ширину",
                    "Обощенный поиск на графах",
                    "Анализ алгоритмов на графах"
                ]
            },
            {
                "caption":"Орграфы и ориентированные ациклические графы",
                "paragraphs":[
                    "Глоссарий",
                    "Анатомия поиска DFS в орграфах",
                    "Достижимость и транзитивное замыкание",
                    "Отношения эквивалентсности и частичные порядки",
                    "Графы DAG",
                    "Топологическая сортировка",
                    "Достижимость в графе DAG",
                    "Сильные компоненты в орграфах",
                    "Еще раз о транзитивном замыкании",
                    "Перспективы"
                ]
            },
            {
                "caption":"Минимальные остовные деревья",
                "paragraphs":[
                    "Представления",
                    "Принципы, положенные в основу алгоритмов построения дерева MST",
                    "Алгоритм Прима и поиск по приоритету",
                    "Алгоритм Крускала",
                    "Алгоритм Борувки",
                    "Сравнения и усовершенствования",
                    "Эвклидово дерево MST"
                ]
            },
            {
                "caption":"Кратчайшие пути",
                "paragraphs":[
                    "Основные принципы",
                    "Алгоритм Дейкстры",
                    "Все кратчайшие пути",
                    "Кратчайшие пути в ациклических графах",
                    "Эвклидовы сети",
                    "Сведение",
                    "Отрицательные веса",
                    "Перспективы"
                ]
            },
            {
                "caption":"Потоки в сетях",
                "paragraphs":[
                    "Транспортные сети",
                    "Алгоритм поиска максимального потока методом аугментального пути",
                    "Алгоритм определения максимальных потоков методом выталкивания превосходящего потока",
                    "Сведение к максимальному потоку",
                    "Потоки минимальной стоимости",
                    "Сетевой симплексный алгоритм",
                    "Сведение к задаче о потоке минимальной стоимости",
                    "Перспективы"
                ]
            }
        ],
    }
]
const en = [      
    {"part": "Fundamentals",
      "chapters":[
        {
          "caption":"Introduction",
          "paragraphs":[
            "Algorithms",
            "A Sample Problem - Connectivity",
            "Union-Find Algorithms",
            "Perspective",
            "Summaru of Topics"
          ]
        },
        {
          "caption":"Principles of Algorithm Analysis ",
          "paragraphs":[
            "Implementation and Empirical Analysis",
            "Analysis of Algorithms",
            "Growth of Functions",
            "Big-Oh notation",
            "Basis Recurrences",
            "Examples of Algorithm Analysis",
            "Guarantees, Predictions, and Limitations"
          ]
        }
      ]
    },
    {"part": "Data Structures",
      "chapters":[
        {
          "caption":"Elementary Data Structures",
          "paragraphs":[
            "Buildings Blocks",
            "Arrays",
            "Linked Lists",
            "Elementary List Processing",
            "Memory Allocation for Lists",
            "Strings",
            "Compound Data Structures"
          ]
        },
        {
          "caption":"Abstract Data Types",
          "paragraphs":[
            "Abstract Object and Collections of Objects",
            "Pushdown Stack ADT",
            "Examples of Stack ADT",
            "Stack ADT Implementations",
            "Creation of a New ADT",
            "FIFO Queues and Generalized Queues",
            "Duplicate and Index Items",
            "First-Class ADT's",
            "Application-Based ADT Example",
            "Perspective"
          ]
        },
        {
          "caption":"Recursion and Trees",
          "paragraphs":[
            "Recursive Algorithms",
            "Divide and Conquer",
            "Dynamic Programming",
            "Trees",
            "Mathematical Properties of Trees",
            "Tree Traversal",
            "Recursive Binary-Tree Algorithms",
            "Graph Traversal",
            "Perspective"
          ]
        }
      ]
   },
   {"part": "Sorting",
    "chapters":[
      {
        "caption":"Elementary Sorting Methods",
        "paragraphs":[
          "Rules of the Game",
          "Selection Sort",
          "Insertion Sort",
          "Bubble Sort",
          "Perfomance Characteristics of Elementary Sorts",
          "Shellsort",
          "Sorting Other Types of Data",
          "Index and Pointer Sorting",
          "Sorting of Linked Lists",
          "Key-Indexed Counting"
        ]
      },
      {
        "caption":"Quicksort",
        "paragraphs":[
          "The Basic Algorith",
          "Perfomance Characteristics of Quicksort",
          "Stack Size",
          "Small Subfiles",
          "Median-of-Three Partitioning",
          "Duplicate Keys",
          "Strings and Vectors",
          "Selection"
        ]
      },
      {
      
        "caption":"Merging and Mergesort",
        "paragraphs":[
          "Two-Way Merging",
          "Abstract-In-place Merge",
          "Top-Down Mergesort",
          "Improvements to the Basic Algorithm",
          "Bottom-Up Mergesort",
          "Perfomance Chracteristics of Mergesort",
          "Linked-List Implementations of Mergesort",
          "Recursion Revisited"
        ]
      },
      {
        "caption":"Priority Queues and Heapsort",
        "paragraphs":[
          "Elementary Implementations",
          "Heap Data Structure",
          "Algorithms on Heaps",
          "Heapsort",
          "Priority-Queue ADT",
          "Priority Queues for Index Items",
          "Binomial Queues"
        ]
      },
      {
        "caption":"Radix Sorting",
        "paragraphs":[
          "Bits, Bytes, and Words",
          "Binary Quicksort",
          "MSD Radix Sort",
          "Three-Way Radix Quicksort",
          "LSD Radix Sort",
          "Perfomance Characteristics of Radix Sorts",
          "Sublinear-Time Sorts"
        ]
      },
      {
        "caption":"Special-Purpose Sorts",
        "paragraphs":[
          "Batcher's Odd-Even Mergesort",
          "Sorting Networks",
          "External Sorting",
          "Sort-Merge Implementation",
          "Parallel Sort/Merge"
        ]
      }
    ]
  },
  {"part": "Searching",
    "chapters":[
      {
        "caption":"Symbol Tables and BSTs",
        "paragraphs":[
          "Symbol-Table ADT",
          "Key-Indexed Search",
          "Sequential Search",
          "Binary Search",
          "Binary Search Trees (BSTs)",
          "Perfomance Characteristics of BSTs",
          "Index Implementations with Symbol Tables",
          "Insertion at the Root in BSTs",
          "BST Implementations of Other ADT Functions"
        ]
      },
      {
        "caption":"Balanced Trees",
        "paragraphs":[
          "Randomized BSTs",
          "Splay BSTs",
          "Top-Down-2-3-4 Trees",
          "Red-Black Trees",
          "Skip Lists",
          "Perfomance Characteristics"
        ]
      },
      {
        "caption":"Hashing",
        "paragraphs":[
          "Hash Functions",
          "Separate Chaining",
          "Linear Probing",
          "Double Hashing",
          "Dynamic Hash Tables",
          "Perspective"
        ]
      },
      {
        "caption":"Radix Search",
        "paragraphs":[
          "Digital Search Trees",
          "Tries",
          "Patricia Tries",
          "Multiway Tries and TSTs",
          "Text String Index Algorithms"
        ]
      },
      {
        "caption":"External Searching",
        "paragraphs":[
          "Rules of the Game",
          "Indexed Sequential Access",
          "B Trees",
          "Extendible Hashing",
          "Perspective"
        ]
      }
    ]
  }
  ]
const Content = {
    ru,
    en
}
export default Content