const par_1_en = { 
label:'Preface',
text : `
<p>
THIS BOOK IS INTENDED to survey the most important computer algorithms in use today, 
and to teach fundamental techniques to
the growing number of people in need of knowing them. It can be
used as a textbook for a second, third, or fourth course in computer
science, after students have acquired basic programming skills and familiarity with computer systems, but before they have taken specialized
courses in advanced areas of computer science or computer applications. The book also may be useful for self-study or as a reference for
'people engaged in the development of computer systems or applications programs, since it contains implementations of useful algorithms
and detailed information on these algorithms' performance characteristics. The broad perspective taken makes the book an appropriate
introduction to the field.
</p>
<p>
I have completely rewritten the text for this new edition, and I
have added more than a thousand new exercises, more than a hundred
new figures, and dozens of new programs. I have also added detailed
commentary on all the figures and programs. This new material provides both coverage of new topics and fuller explanations of many of
the classic algorithms. A new emphasis on abstract data types throughout the book makes the programs more broadly useful and relevant in
modern object-oriented programming environments. People who have
read old editions of the book will find a wealth of new information
throughout; all readers will find a wealth of pedagogical material that
provides effective access to essential concepts.
</p>
<p>
Due to the large amount of new material, we have split the new
edition into two volumes (each about the size of the old edition) of
which this is the first. This volume covers fundamental concepts, data
structures, sorting algorithms, and searching algorithms; the second
volume covers advanced algorithms and applications, building on the
basic abstractions and methods developed here. Nearly all the material
on fundamentals and data structures in this edition is new.
</p>
<p>
This book is not just for programmers and computer-science students. Nearly everyone who uses a computer wants it to run faster
or to solve larger problems. The algorithms in this book represent
a body of knowledge developed over the last 50 years that has become indispensible in the efficient use of the computer, for a broad
variety of applications. From N -body simulation problems in physics
to genetic-sequencing problems in molecular biology, the basic methods described here have become essential in scientific research; and
from database systems to Internet search engines, they have become
essential parts of modern software systems. As the scope of computer
applications becomes more widespread, so grows the impact of many
of the basic methods covered here. The goal of this book is to serve
as a resource for students and professionals interested in knowing and
making intelligent use of these fundamental algorithms as basic tools
for whatever computer application they might undertake.
</p>
`,}
const par_2_en ={ 
label: 'Scope',
text:`
<p>
THE BOOK CONTAINS 16 chapters grouped into four major parts: fundamentals, data structures, sorting, and searching. The descriptions here
are intended to give readers an understanding of the basic properties
of as broad a range of fundamental algorithms as possible. Ingenious
methods ranging from binomial queues to patricia tries are described,
all related to basic paradigms at the heart of computer science. The
second volume consists of four additional parts that cover strings, geometry, graphs, and advanced topics. My primary goal in developing
these books has been to bring together the fundamental methods from
these diverse areas, to provide access to the best methods known for
solving problems by computer.
</p>
<p>
You will most appreciate the material in this book if you have had
one or two previous courses in computer science or have had equivalent
programming experience: one course in programming in a high-level
language such as C, Java, or C++, and perhaps another course that
teaches fundamental concepts of programming systems. This book
is thus intended for anyone conversant with a modern programming
language and with the basic features of modern computer systems.
References that might help to fill in gaps in your background are
suggested in the text.
</p>
<p>
Most of the mathematical material supporting the analytic results
is self-contained (or is labeled as beyond the scope of this book), so
little specific preparation in mathematics is required for the bulk of the
book, although mathematical maturity is definitely helpful.
</p>
`,}
const par_3_en = { 
label:'Use in the Curriculum',
text : `
<p>
THERE IS A GREAT DEAL of flexibility in how the material here can be
taught, depending on the taste of the instructor and the preparation
of the students. The algorithms described here have found widespread
use for years, and represent an essential body of knowledge for both
the practicing programmer and the computer-science student. There
is sufficient coverage of basic material for the book to be used for a
course on data structures, and there is sufficient detail and coverage of
advanced material for the book to be used for a course on algorithms.
Some instructors may wish to emphasize implementations and practical concerns; others may wish to emphasize analysis and theoretical
concepts.
</p>
<p>
A complete set of slide masters for use in lectures, sample programming assignments, interactive exercises for students, and other
course materials may be found via the book's home page.
</p>
<p>
An elementary course on data structures and algorithms might
emphasize the basic data structures in Part 2 and their use in the
implementations in Parts 3 and 4. A course on design and analysis of
algorithms might emphasize the fundamental material in Part 1 and
Chapter 5, then study the ways in which the algorithms in Parts 3
and 4 achieve good asymptotic performance. A course on software
engineering might omit the mathematical and advanced algorithmic
material, and emphasize how to integrate the implementations given
here into large programs or systems. A course on algorithms might
take a survey approach and introduce concepts from all these areas.
</p>
<p>
Earlier editions of this book have been used in recent years at
scores of colleges and universities around the world as a text for the
second or third course in computer science and as supplemental reading
for other courses. At Princeton, our experience has been that the
breadth of coverage of material in this book provides our majors with
an introduction to computer science that can be expanded upon in
later courses on analysis of algorithms, systems programming and
theoretical computer science, while providing the growing group of
students from other disciplines with a large set of techniques that these
people can immediately put to good use.
</p>
<p>
The exercises-most of which are new to this edition-fall into
several types. Some are intended to test understanding of material
in the text, and simply ask readers to work through an example or
to apply concepts described in the text. Others involve implementing
and putting together the algorithms, or running empirical studies to
compare variants of the algorithms and to learn their properties. Still
others are a repository for important information at a level of detail
that is not appropriate for the text. Reading and thinking about the
exercises will pay dividends for every reader.
</p>
`,}
const par_4_en = { 
label: 'Algorithms of Practical Use',
text: `
<p>
ANYONE WANTING TO USE a computer more effectively can use this book
for reference or for self-study. People with programming experience
can find information on specific topics throughout the book. To a large
extent, you can read the individual chapters in the book independently
of the others, although, in some cases, algorithms in one chapter make
use of methods from a previous chapter.
</p>
<p>
The orientation of the book is to study algorithms likely to be of
practical use. The book provides information about the tools of the
trade to the point that readers can confidently implement, debug, and
put to work algorithms to solve a problem or to provide functionality
in an application. Full implementations of the methods discussed are
included, as are descriptions of the operations of these programs on
a consistent set of examples. Because we work with real code, rather
than write pseudo-code, the programs can be put to practical use
quickly. Program listings are available from the book's home page.
</p>
<p>
Indeed, one practical application of the algorithms has been to
produce the hundreds of figures throughout the book. Many algorithms are brought to light on an intuitive level through the visual
dimension provided by these figures.
</p>
<p>
Characteristics of the algorithms and of the situations in which
they might be useful are discussed in detail. Although not emphasized,
connections to the analysis of algorithms and theoretical computer
science are developed in context. When appropriate, empirical and
analytic results are presented to illustrate why certain algorithms are
preferred. When interesting, the relationship of the practical algorithms being discussed to purely theoretical results is described. Specific information on performance characteristics of algorithms and implementations is synthesized, encapsulated, and discussed throughout
the book.
</p>
`,}
const par_5_en = { 
label: 'Programming Language',
text:`
<p>
THE PROGRAMMING LANGUAGE used for all of the implementations is C.
Any particular language has advantages and disadvantages; we use
C because it is widely available and provides the features needed for
our implementations. The programs can be translated easily to other
modern programming languages, since relatively few constructs are
unique to C. We use standard C idioms when appropriate, but this
book is not intended to be a reference work on C programming.
</p>
<p>
There are many new programs in this edition, and many of the
old ones have been reworked, primarily to make them more readily
useful as abstract-data-type implementations. Extensive comparative
empirical tests on the programs are discussed throughout the text.
</p>
<p>
Previous editions of the book have presented basic programs in
Pascal, C++, and Modula-3. This code is available through the book
home page on the web; code for new programs and code in new
languages such as Java will be added as appropriate.
</p>
<p>
A goal of this book is to present the algorithms in as simple and
direct a form as possible. The style is consistent whenever possible, so
that programs that are similar look similar. For many of the algorithms
in this book, the similarities hold regardless of the language: Quicksort
is quicksort (to pick one prominent example), whether expressed in
Algol-60, Basic, Fortran, Smalltalk, Ada, Pascal, C, PostScript, Java,
or countless other programming languages and environments where it
has proved to be an effective sorting method.
</p>
<p>
We strive for elegant, compact, and portable implementations,
but we take the point of view that efficiency matters, so we try to
he aware of the performance characteristics of our code at all stages
of development. Chapter 1 constitutes a detailed example of this
approach to developing efficient C implementations of our algorithms,
and sets the stage for the rest of the hook.
</p>
`,}
const par_6_en ={ 
label: 'Acknowledgments',
text:`
<p>
MANY PEOPLE GAVE ME helpful feedback on earlier versions of this book.
In particular, hundreds of students at Princeton and Brown have suffered through preliminary drafts over the years. Special thanks are due
to Trina Avery and Tom Freeman for their help in producing the first
edition; to Janet Incerpi for her creativity and ingenuity in persuading
our early and primitive digital computerized typesetting hardware and
software to produce the first edition; to Marc Brown for his part in
the algorithm visualization research that was the genesis of so many of
the figures in the book; and to Dave Hanson for his willingness to answer all of my questions about C. I would also like to thank the many
readers who have provided me with detailed comments about various
editions, including Guy Almes, Jon Bentley, Marc Brown, Jay Gischer,
Allan Heydon, Kennedy Lemke, Udi Manber, Dana Richards, John
Reif, M. Rosenfeld, Stephen Seidman, Michael Quinn, and William
Ward.
</p>
<p>
To produce this new edition, I have had the pleasure of working
with Peter Gordon and Debbie Lafferty at Addison-Wesley, who have
patiently shepherded this project as it has evolved from a standard
update to a massive rewrite. It has also been my pleasure to work with
several other members of the professional staff at Addison-Wesley. The
nature of this project made the book a somewhat unusual challenge
for many of them, and I much appreciate their forbearance.
</p>
<p>
I have gained two new mentors in writing this book, and particularly want 
to express my appreciation to them. First, Steve Summit
carefully checked early versions of the manuscript on a technical level,
and provided me with literally thousands of detailed comments, particularly 
on the programs. Steve clearly understood my goal of providing
elegant, efficient, and effective implementations, and his comments not
only helped me to provide a measure of consistency across the implementations, 
but also helped me to improve many of them substantially.
Second, Lyn Dupre also provided me with thousands of detailed comments on 
the manuscript, which were invaluable in helping me not only
to correct and avoid grammatical errors, but also-more importantto find a 
consistent and coherent writing style that helps bind together
the daunting mass of technical material here. I am extremely grateful
for the opportunity to learn from Steve and Lyn-their input was vital
in the development of this book.
</p>
<p>
Much of what I have written here I have learned from the teaching
and writings of Don Knuth, my advisor at Stanford. Although Don had
no direct influence on this work, his presence may be felt in the book,
for it was he who put the study of algorithms on the scientific footing
that makes a work such as this possible. My friend and colleague
Philippe Flajolet, who has been a major force in the development of
the analysis of algorithms as a mature research area, has had a similar
influence on this work.
</p>
<p>
I am deeply thankful for the support of Princeton University,
Brown University, and the Institut National de Recherce en Informatique et Automatique (INRIA), where I did most of the work on the
book; and of the Institute for Defense Analyses and the Xerox Palo
Alto Research Center, where I did some work on the book while visiting. Many parts of the book are dependent on research that has been
generously supported by the National Science Foundation and the Office of Naval Research. Finally, I thank Bill Bowen, Aaron Lemonick,
and Neil Rudenstine for their support in building an academic environment at Princeton in which I was able to prepare this book, despite
my numerous other responsibilities.
</p>
<p>
Robert Sedgewick
Marly-le-Roi, France, February, 1983
Princeton, New Jersey, January, 1990
Jamestown, Rhode Island, August, 1997
</p>
`,}
const par_7_en = {
label: 'Notes on Exercises',
text:`
<p>
CLASSIFYING EXERCISES IS an activity fraught with peril, because readers
of a book such as this come to the material with various levels of
knowledge and experience. Nonetheless, guidance is appropriate, so
many of the exercises carry one of four annotations, to help you decide
how to approach them.
</p>
<p>
Exercises that test your understanding of the material are marked
with an open triangle, as follows:
9.57 Give the binomial queue that results when the keys E A S Y 
QUE S T ION are inserted into an initially empty binomial queue. 
Most often, such exercises relate directly to examples in the text. They
should present no special difficulty, but working them might teach you
a fact or concept that may have eluded you when you read the text.
Exercises that add new and thought-provoking information to the
material are marked with an open circle, as follows:
014.20 Write a program that inserts N random integers into a 
table of size N /100 using separate chaining, then finds the length 
of the shortest and longest lists, for N lO3, 104 , 105 , and 106 • 
Such exercises encourage you to think about an important concept
that is related to the material in the text, or to answer a question that
may have occurred to you when you read the text. You may find it
worthwhile to read these exercises, even if you do not have the time to
work them through.
Exercises that are intended to challenge you are marked with a black
dot, as follows:
• 	8.46 Suppose that mergesort is implemented to split the file at 
a random position, rather than exactly in the middle. How many 
comparisons are used by such a method to sort N elements, on 
the average? 
Such exercises may require a substantial amount of time to complete,
depending upon your experience. Generally, the most productive approach is to work on them in a few different sittings.
A few exercises that are extremely difficult (by comparison with
most others) are marked with two black dots, as follows:
•• 15.29 Prove that the height of a trie built from N random bit­
strings is about 21g N. 
These exercises are similar to questions that might be addressed in the
research literature, but the material in the book may prepare you to
enjoy trying to solve them (and perhaps succeeding).
The annotations are intended to be neutral with respect to your
programming and mathematical ability. Those exercises that require
expertise in programming or in mathematical analysis are self-evident.
All readers are encouraged to test their understanding of the algorithms
by implementing them. Still, an exercise such as this one is straightforward for a practicing programmer or a student in a programming
course, but may require substantial work for someone who has not
recently programmed:
1.23 Modify Program 1.4 to generate random pairs of integers
between 0 and ]V - 1 instead of reading them from standard input,
and to loop until ]V - 1 union operations have been performed.
Run your program for]V 103 , 10\ 105, and 106and print out
the total number of edges generated for each value of N.
In a similar vein, all readers are encouraged to strive to appreciate
the analytic underpinnings of our knowledge about properties of algorithms. Still, an exercise such as this one is straightforward for a
scientist or a student in a discrete mathematics course, but may require
substantial work for someone who has not recently done mathematical
analysis:
1.13 Compute the average distance from a node to the root in
a worst-case tree of 2n nodes built by the weighted quick-union
algorithm.
There are far too many exercises for you to read and assimilate
them all; my hope is that there are enough exercises here to stimulate
you to strive to come to a broader understanding on the topics that
interest you than you can glean by simply reading the text.
`,}
const par_1_ru = { 
label:'Предисловие',
text:`
<p>
ЭТА КНИГА ЗНАКОМИТ вас с наиболее важными из применяемых на сегодняшний день
компьютерных алгоритмов, а также обучает, фундаментальным технологиям, которые 
непосредственно адресованы все возрастающему количеству разработчиков,
нуждающихся в подобных знаниях. Она может быть использована как учебник для студентов 
второго, третьего или четвертого курсов факультетов, связанных с компьютерными 
науками, после того как студенты овладели основными навыками и ознакомлены 
с компьютерными системами. Книга также может быть полезной для тех, кто
занимается самообразованием, или служить в качестве справочника для тех, кого 
интересует разработка компьютерных систем или прикладных программ, поскольку она
содержит программные реализации полезных алгоритмов и подробную информацию о
рабочих характеристиках этих алгоритмов. В более широкой перспективе эту книгу
можно рассматривать как подходящее введение в данную предметную область.
</p>
<p>
В новом издании текст был полностью переработан, в него было включено более
тысячи новых упражнений, более сотни новых рисунков и десятки новых программ.
Кроме того, все рисунки были снабжены подробными комментариями. Этот новый
материал охватывает как новые темы, так и более полно поясняет многие классические 
алгоритмы. Большое внимание, уделенное в книге абстрактным типам данных,
расширяет сферу применения приведенных программ и делает их более пригодными
для современных сред программирования. Читатели, знакомые с предыдущими изданиями 
книги, найдут в ней множество новой информации; каждый читатель найдет в
книге большой объем учебного материала, который позволит успешно изучить наиболее 
важные понятия.
</p>
<p>
Вследствие большого объема нового материала, мы разбили новое издание на два
тома (каждый примерно равен по объему предыдущему изданию), первый из них 
перед вами. Этот том охватывает фундаментальные понятия, структуры данных, алгоритмы
сортировки и алгоритмы поиска; во втором томе рассматриваются более развитые 
алгоритмы и более сложные приложения, построенные на базе абстракций и методов, 
разработанных в первом томе. Почти весь материал по основным принципам и структурам
данных, изложенный в этом издании, в предыдущих изданиях книги не рассматривался.
</p>
<p>
Эта книга адресована не только программистам и студентам, изучающим программирование 
и компьютерные науки. Практически каждый, кто пользуется компьютером, же
лает работать на нем быстрее или решать более сложные задачи. Алгоритмы, приведенные
в этой книге, представляют квинтэссенцию знаний, накопленную более чем за 50 лет, без
которых нельзя обойтись в многочисленных приложениях для эффективного использования 
компьютера. От задач моделирования систем из N тел в физике и до задач анализа 
генетического кода в молекулярной биологии, описанные здесь базовые методы стали 
важными составляющими современных научных исследований; от систем баз данных до
механизма поиска в Internet они стали базовыми компонентами современных 
программных систем. По мере того, как сфера применения компьютерных приложений
становится все шире, возрастает влияние многих из рассмотренных здесь базовых методов. 
Данная книга может быть использована как источник информации для студентов 
и профессионалов, заинтересованных в ознакомлении и эффективном использовании 
описанных фундаментальных алгоритмов как основных инструментальных средств
для любых компьютерных приложений, какие они намерены разрабатывать.
</p>
<p>
Графы и алгоритмы на графах активно проникают во все современные компьютерные 
приложения. В этой книге описаны широко известные методы решения задач
обработки графов, которые возникают на практике. Ее основная цель заключается в
том, чтобы сделать эти методы и основные принципы, составляющие их основу, 
доступными для все большего числа людей, которые в них нуждаются. Предлагаемый 
материал книги представлен таких образом, что сначала излагаются начальные сведения,
начиная с базовой информации и основных понятий, с постепенным переходом к
анализу классических методов, и завершается изучением современных технологий, 
которые все еще находятся на стадии разработки. Тщательно подобранные примеры,
подробные рисунки и завершенные программные реализации сопровождаются подробным 
описанием алгоритмов и приложений.
</p>
<p>
Книга исключительно полезна на ранних стадиях курса обучения компьютерным
наукам, сразу после того, как студенты получат основные навыки программирования
и ознакомятся с компьютерными системами, и в то же время перед тем, как приступят 
к изучению специальных курсов по современным областям компьютерных наук
или прикладных вычислительных систем. Эта книга будет полезна как материал для
самообразования или как справочное пособие для специалистов, занятых разработкой
компьютерных систем или компьютерных приложений, поскольку она содержит 
программные реализации полезных алгоритмов и подробные данные о рабочих 
характеристиках этих алгоритмов. Широкая перспектива, открывающаяся перед ними, делает
эту книгу подходящим введением в указанную выше область знаний.
</p>
<p>
Автор полностью переделал текст книги для этого издания и добавил несколько
тысяч упражнений, сотни новых иллюстраций, десятки новых программ и снабдил все
рисунки и программы развернутыми комментариями. Этот новый материал содержит
как описание новых тем, так и более полный анализ многих классических алгоритмов.
На протяжении всей книги основное внимание уделяется абстрактным типам данных,
которые существенно расширяют область применения программ и делают их использование 
более эффективным. Те, кто знаком с предыдущими изданиями настоящей
книги, найдут в ней много новой информации; все читатели найдут в ней массу 
полезного педагогического материала, который обеспечивает четкое понимание основных 
понятий.
</p>
<p>
Книга предназначена не только для программистов и студентов, изучающих компьютерные 
науки. Все, кто работает с компьютером, хотят работать быстрее и решать
все более крупные задачи. Алгоритмы, которые мы изучаем, представляют собой 
область знаний, быстро развивавшуюся в течение последних пятидесяти лет и ставшую
основой для эффективного использования компьютера на широком множестве приложений. 
Начиная с задач моделирования систем из N тел в физике и заканчивая задачами 
анализа генетического кода в молекулярной биологии, описанные здесь базовые
методы стали основной частью современных научных исследований; от систем баз
данных до механизмов поиска в Intenet они стали важной частью современных 
программных систем. По мере того, как сфера применения компьютерных приложений
становится все шире, возрастает значение многих из базовых алгоритмов, особенно
фундаментальных алгоритмов на графах, описание которых дано в этом томе. Назначение 
этой книги состоит в том, чтобы стать источником информации для студентов и
профессионалов, чтобы они понимали и при необходимости искусно использовали 
алгоритмы на графах в любом компьютерном приложении, каким бы оно ни было.
</p>
`,}
const par_2_ru = { 
label: 'Круг рассматриваемых вопросов',
text:`
<p>
КНИГА СОДЕРЖИТ 22 главы, сгруппированных в виде пяти основных частей: основные 
понятия, структуры данных, сортировка, поиск и алгоритмы на графах. 
Приведенные в ней описания призваны ознакомить читателей с основными свойствами 
максимально широкого круга фундаментальных алгоритмов. Описанные здесь алгоритмы
находят широкое применение на протяжении многих лет и являются существенно 
важными как для профессиональных программистов, так и для студентов, изучающих
компьютерные науки. Все описанные в книге хитроумные методы, от биномиальных
очередей до trie-деревьев, относятся к базовым концепциям, лежащим в основе
 компьютерных наук. Основной целью при написании этих книг было собрать воедино
фундаментальные методы из этих различных областей дискретной математики с целью
ознакомления с лучшими методами решения задач с помощью компьютера.
</p>
<p>
По достоинству вы сможете оценить собранный в книге материал, имея за плечами
курсы по изучению основных принципов разработки и анализа алгоритмов и опыт
программирования на языках высокого уровня, таких как C++, Java, или С. Эта книга 
предполагает наличие у читателя соответствующей подготовки. Данный том предполагает 
знание массивов, связных списков, абстрактных типов данных (АТД), в нем 
используются очереди по приоритету, таблицы символов, АТД объединения-поиска -
все эти понятия подробно рассматриваются в частях 1-4 (и во многих других 
комментариях к алгоритмам и структурах данных).
</p>
<p>
Базовые свойства графов и алгоритмов на графах разработаны на базе основных
понятий, в то же время для их полного понимания очень часто необходимо глубоко
погружаться в пучину сложных математических выкладок. Несмотря на то что 
обсуждение современных математических понятий носит конспективный характер, 
на уровне общих рассуждений и описаний, от читателя, тем не менее, требуется 
более высокая математическая подготовка, чем для работы с материалами, 
содержащимися в частях 1-4. Несмотря на это, читатели, обладающие различными 
уровнями математической подготовки, извлекут для себя немалую пользу из этой книги. 
К такому подходу вынуждает следующее обстоятельство: некоторые элементарные алгоритмы 
на графах, которые могут быть понятны и использоваться каждым, лишь немногим
отличаются от развитых алгоритмов, которые понимает далеко не каждый. Основная
цель в подобных случаях — поместить важные алгоритмы в контекст других методов, а
не требовать изучения всего математического материала. Однако строгий подход, на
котором настаивают высококвалифицированные математики, часто приводит нас к 
созданию хороших программ, в связи с чем автор стремился сохранить баланс между
формальным подходом, на котором настаивают теоретики, и изложением материала,
рекомендуемом практиками, не жертвуя при этом строгостью.
</p>
`,}
const par_3_ru ={ 
  label:'Использование материала в рамках учебных курсов',
  text:`
<p>
ЧТО КАСАЕТСЯ СТИЛЯ изложения материала, то в этом плане преподавателю предоставляется 
свобода в широких пределах, в зависимости от предпочтений преподавателя
и подготовки студентов. Описанные в книге алгоритмы широко использовались в течение 
многих лет, они представляют собой совокупность знаний, необходимых как
программисту-практику, так и студенту, изучающему теорию вычислительных систем.
В данной книге содержится объем основного материала, достаточный для того, чтобы
ее можно было использовать в качестве учебника по курсу алгоритмов и структурданных, 
в то же время она содержит достаточно материала, чтобы быть использован
ной в качестве учебника по курсу алгоритмов на графах. Возможно, одни преподаватели 
будут уделять основное внимание реализациям и практическим вопросам, а другие - 
анализу и теоретическим исследованиям.
</p>
<p>
Данная книга ориентирована на изучение алгоритмов, которые, скорее всего, 
будут использованы на практике. В ней содержится достаточно подробная информация
об инструментальных средствах, позволяющих читателям уверенно реализовывать, от
лаживать и запускать в работу алгоритмы решения различных задач или снабжать 
приложения необходимыми функциональными возможностями. В книгу включены полные
реализации рассматриваемых в ней методов, равно как и описание работы этих программ 
на специально подобранном множестве примеров. Поскольку мы работаем с
реальными программными кодами, а не пользуемся псевдокодами, эти программы
можно быстро запустить в работу в рамках практических приложений.
</p>
<p>
Действительно, одним из практических применений этих алгоритмов было создание
сотен иллюстраций для данной книги. Благодаря этим иллюстрациям, суть многих 
алгоритмов становится понятной на интуитивном уровне.
</p>
<p>
В книге подробно рассматриваются рабочие характеристики алгоритмов и ситуации, 
в которых эти алгоритмы могут быть полезны. В контексте прослеживается связь
с анализом алгоритмов и теорией вычислительных систем. Чтобы показать, почему
предпочтение отдается тому или иному алгоритму, там, где это уместно, приводятся
результаты эмпирических и аналитических исследований. В представляющих интерес 
случаях дается описание взаимосвязи между рассматриваемыми практическими алгоритмами
 и чисто теоретическими результатами. Специальная информация по рабочим
характеристикам алгоритмов и их реализациям обобщается, выделяется и обсуждается
на протяжении всей книги.
</p>
`,}
const par_4_ru ={
label:'Язык программирования',
text:`
<p>
ВО ВСЕХ РЕАЛИЗАЦИЯХ используется язык программирования С. Каждый конкретный
язык программирования имеет свои преимущества и недостатки; мы используем язык
С, так как он легко доступен и обладает свойствами, которые требуются для наших
приложений. Программные реализации можно легко перевести на любой другой современный
язык программирования, так как в языке С имеется лишь небольшое число конструкций,
характерных только для него. Мы используем стандартные идиомы
языка С там, когда в этом возникает необходимость, но назначение этой книги
состоит не в том, чтобы служить справочным пособием по программированию на С.
</p>
<p>
В эту редакцию книги включено множество новых программ, многие из старых
программ были переделаны, главным образом, в силу того, чтобы их можно было 
использовать как реализации абстрактных типов данных. Обширные эмпирические 
исследования и сравнения программ проводятся на протяжении всего текста книги.
</p>
<p>
Цель данной книги заключается в том, чтобы представить алгоритмы в максимально 
простой и понятной форме. Везде, где это возможно, мы стремились сохранить
этот стиль, чтобы сходные по выполняемым действиям программы выглядели похожими. 
Для многих алгоритмов в этой книге это подобие сохраняется независимо от языка: 
быстрая сортировка (если выбирать какой-либо яркий пример) так и остается бы
строй сортировкой независимо от того, какой язык выбран для реализации ее
алгоритма: Algol-60, Basic, Fortran, Smalltalk, Ada, Pascal, C, PostScript, Java 
или какой-то другой из бесчисленного множества языков и сред программирования,
 в которых она показала себя эффективным методом сортировки.
 </p>
 <p>
Мы стремимся к изящным, компактным, эффективным и переносимым реализациям, 
однако мы придерживаемся той точки зрения, что главное - это эффективность,
поэтому мы стараемся не упустить из виду рабочие характеристики создаваемых нами
программ на всех стадиях разработки.
</p>
`,}
const par_5_ru = { 
label:'Благодарности',
text: `
<p>
МНОГИЕ ЧИТАТЕЛИ прислали мне исключительно полезные отзывы о предыдущих изданиях 
этой книги. В частности, в течение ряда лет предварительные наброски книги
апробировались на сотнях студентов в Принстоне и Брауне. Особую благодарность 
хотелось бы выразить Трине Эйвери (Tina Avery) и Тому Фримену (Tom Freeman) за
оказанную помощь в выпуске первого издания; Джанет Инсерпи (Janet Incerpi) за
проявленные ею творческий подход и изобретательность, чтобы заставить аппаратные
и программные средства нашей примитивной и давно устаревшей компьютеризированной 
издательской системы напечатать первое издание книги; Марку Брауну (Mark Brown) 
за его участие в исследованиях по визуализации алгоритмов, которые во многом 
способствовали появлению в книге многочисленных рисунков, а также Дэйву
Хенсону (Dave Hanson) и Эндрю Эппелю (Andrew Appel) за их постоянную готовность 
ответить на мои вопросы, связанные с языками программирования. Я хотел бы
также поблагодарить многочисленных читателей, приславших отзывы на различные 
издания этой книги, в том числе Гая Олмсу, Джона Бентли, Марка Брауна, 
Джея Гришера, Аллана Хейдона, Кеннеди Лемке, Юди Манбер, Дану Ричардс, 
Джона Рейфа, М. Розенфельда, Стивена Сейдмана, Майка Квина и Вильяма Варда.
</p>
<p>
При подготовке нового издания я имел удовольствие работать с Питером Гордоном
(Peter Gordon), Дебби Лафферти (Debbie Lafferty) из издательства Addison-Wesley, 
которые терпеливо опекали этот проект с момента его зарождения. Большое удовольствие 
доставила мне совместная работа с другими штатными сотрудниками этого издательства. 
Характер проекта сделал подготовку издания данной книги несколько непривычной задачей
для многих из них, и я высоко ценю проявленную ими снисходительность.
</p>
<p>
В процессе написания этой книги я приобрел трех новых наставников и хочу особо 
выразить им свою признательность. Во-первых, Стиву Саммиту (Steve Summit), 
который внимательно проверил на техническом уровне первые варианты рукописи и
предоставил буквально тысячи подробных комментариев, особенно в отношении программ. 
Стив хорошо понимал мое стремление снабдить книгу изящными и эффективные 
реализациями, и его комментарии помогли мне не только обеспечить определенное 
единообразие реализаций, но и существенно улучшить многие из них. Во-вторых,
хочу поблагодарить Лин Дюпре (Lyn Dupre) за тысячи подробных комментариев в 
отношении рукописи, которые помогли не только избежать и исправить грамматические
ошибки, но и (что значительно важнее) выработать последовательный и связный стиль
написания, что позволило собрать воедино устрашающую массу технического материала. 
Я исключительно благодарен полученной возможности поучиться у Стива и Лин -
их вклад в разработку этой книги оказался решающим.
</p>
<p>
Многое из написанного здесь я узнал из лекций и трудов Дона Кнута (Don
Knuth) - моего наставника в Стэнфорде. Хотя непосредственно Дон и не участвовал
в написании этой книги, его влияние можно почувствовать на всем ее протяжении,
ибо именно он поставил изучение алгоритмов на научную основу, благодаря чему 
вообще стало возможным появление подобного рода книг. Мой друг и коллега Филлип
Флажоле (Philippe Flajolet), благодаря которому анализ алгоритмов стал вполне 
сформировавшейся областью исследований, оказал такое же влияние этот труд.
</p>
<p>
Я глубоко признателен за оказанную мне поддержку Принстонскому университету,
Брауновскому университету и Национальному институту исследований в области 
информатики и автоматики (INRIA - Institute de Recherche en Informatique and
Automatique), где я проделал большую часть работы над книгой, а также Институту
исследований проблем безопасности и Исследовательскому центру компании Xerox в
Пало-Альто, где была проделана часть работы во время моих визитов туда. В основу
многих глав этой книги положены исследования, которые щедро финансировались
Национальным научным фондом и Отделом военно-морских исследований. И в заключение, 
я благодарю Билла Боуэна (Bill Bowen), Аарона Лемоника (Aaron Lemonick) и
Нейла Руденштайна (Neil Rudenstine) за то, что они способствовали созданию в
Принстоне академической обстановки, в которой я получил возможность подготовить
эту книгу, несмотря на множество других возложенных на меня обязанностей.
</p>
<p>
Роберт Седжвик
Марли-де-Руа, Франция, февраль 1983 г.
Принстон, Нью-Джерси, январь 1990 г.
Джеймстаун, Род-Айленд, август 2001 г.
Адаму, Эндрю, Бретт, Робби и, в первую очередь, Линде посвящается.
</p>
`,}
const par_6_ru = {
label:'Примечания к упражнениям',
text:`
<p>
КЛАССИФИКАЦИЯ УПРАЖНЕНИЙ - это занятие, сопряженное с рядом трудностей, 
поскольку читатели такой книги, как эта, обладают различным уровнем знаний и опыта.
Тем не менее, определенное указание не помешает, поэтому многие упражнения помечены 
одним из четырех маркеров, дабы проще было выбрать соответствующий подход.
Упражнения, которые проверяют, насколько хорошо вы усвоили материал, помечены
незаполненным треугольником:
>	17.3. Составьте список неизоморфных циклов графа, представленного на рис. 17.1.
Например, если в вашем списке содержится цикл 3-4-5-3, в нем не могут находиться 
циклы 3-5-4-3, 4-5-3-4, 4-3-5-4, 5-3-4-5 или 5-4-3-5.
Чаще всего такие упражнения непосредственно связаны с примерами в тексте.
Они не должны вызывать особых трудностей, но их выполнение может прояснить
факт или понятия, которые, возможно, ускользнули из вашего внимания во время
чтения текста.
Упражнения, которые дополняют текст новой и требующей размышления информацией, 
помечены незаполненной окружностью:
о 18.6. Реализуйте DFS, используя свою независимую от представления АТД-функ-
цию для обработки списков ребер из упражнения 17.60.
Такие упражнения заставляют сосредоточиться на важных понятиях, связанных с
материалом, наложенным в тексте, или искать ответа на вопрос, который может 
возникнуть во время прочтения. Возможно, читатели сочтут полезным прочесть эти 
упражнения дбже при отсутствии времени для их выполнения.
Упражнения, которые имеют цель поставить перед читателями задачу, помечены
черной точкой:
•	19.2. Назовите пример крупного графа DAG, описывающего какую-нибудь деятельность, 
выполняемую в интерактивном режиме, возможно, графа, определяемого зависимостями, 
связывающими определения функций в крупной системе программного обеспечения, 
или связями каталогов в крупной файловой системе.
Для выполнения таких упражнений требуется потратить значительное время, в 
зависимости от опыта читателя. В общем случае, лучше всего выполнять их в несколько
приемов.
Несколько упражнений, которые особенно трудны (по сравнению с большинством
других) помечены двумя черными точками:
•• 20.77. Разработайте алгоритм, который при заданном множестве N точек на 
плоскости находит множество ребер, мощность которого пропорциональна N, и 
в котором наверняка содержится дерево MST. Этот алгоритм должен содержать 
достаточно легкие вычисления, чтобы можно было разработать компактную и
эффективную реализацию.
Эти упражнения аналогичны вопросам, которые могут ставиться в научной литературе,
однако материал книги может так подготовить читателей, что им доставит 
удовольствие попытаться ответить на них (а, возможно, и преуспеть в этом).
Мы старались, чтобы все пометки были безотносительны к программной и математической 
подготовке читателей. Те упражнения, которые требуют наличия опыта по
программированию или математическому анализу, очевидны. Мы настоятельно рекомендуем 
читателям проверить свое понимание алгоритмов, реализовав их. Тем не менее, 
упражнения, подобные приведенному ниже, просты для профессиональных программистов 
или студентов, изучающих программирование, но могут потребовать значительных усилий 
от тех, кто в последнее время по ряду причин программированием не занимался:
•	17.73. Напишите программу, которая генерирует V случайных точек на плоскости,
после чего строит граф, состоящий из ребер, соединяющих все пары точек, удаленных 
друг от друга на расстояние, не превышающее d (см. рис. 17.13 и программу 3.20). 
Определите, какое значение d следует выбрать, чтобы ожидаемое число
ребер было равно Е. Проведите тестирование полученной программы в соответствии с
изложенным в упражнении 17.64 (для низких уровней насыщенности) и в соответствии
с изложенным в упражнении 17.65 (для высоких уровней насыщенности).
Мы настоятельно рекомендуем всем читателям стремиться учитывать приводимые
нами аналитические обоснования свойств всех алгоритмов. С другой стороны, упражнения, 
подобные нижеследующему, не составляют сложности для профессионального
математика или студента, изучающего дискретную математику, однако наверняка потребуют 
значительных усилий от тех, кто давно не занимался математическим анализом:
•	18.3. Сколько существует путей обхода лабиринта, показанного на рис. 18.2 и 18.3,
при проведении исследования Тремо?
Книга снабжена большим количеством упражнений, чтобы всех их можно было
прочесть и усвоить; тем не менее, я надеюсь, что среди них достаточно таких, которые 
могут послужить мощным стимулом к углубленному пониманию интересующих их
вопросов, нежели простое чтение текста.
</p>
`,}
const Introduction = {
  en: [par_1_en, par_2_en, par_3_en, par_4_en, par_5_en, par_6_en, par_7_en],
  ru: [par_1_ru, par_2_ru, par_3_ru, par_4_ru, par_5_ru, par_6_ru,],
}
//export default Introduction
const Json = JSON.stringify(Introduction)
const fs = require('fs')
fs.writeFile('Introduction.json', Json, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});