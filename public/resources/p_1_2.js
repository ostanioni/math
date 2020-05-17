const en = {text:`
<h3>1.2 A SAMPLE PROBLEM: CONNECTIVITY</h3>
<p>
  Suppose that we are given a sequence of pairs of integers, where each
  integer represents an object of some type and we are to interpret the
  pair p-q as meaning "p is connected to q." We assume the relation "is
  connected to" to be transitive: If p is connected to q, and q is connected
  to r, then p is connected to r. Our goal is to write a program to filter
  out extraneous pairs from the set: When the program inputs a pair
  p-q, it should output the pair only if the pairs it has seen to that point
  do not imply that p is connected to q. If the previous pairs do imply
  that p is connected to q, then the program should ignore p-q and
  should proceed to input the next pair. Figure 1.I gives an example of
  this process.
</p>
<p>
  Our problem is to devise a program that can remember sufficient
  information about the pairs it has seen to be able to decide whether or
  not a new pair of objects is connected. Informally, we refer to the task
  of designing such a method as the connectivity problem. This problem
  arises in a number of important applications. We briefly consider three
  examples here to indicate the fundamental nature of the problem.
</p>
<p>
  For example, the integers might represent computers in a large
  network, and the pairs might represent connections in the network.
  Then, our program might be used to determine whether we need to establish 
  a new direct connection for p and q to be able to communicate,
  or whether we could use existing connections to set up a communications path. 
  In this kind of application, we might need to process
  millions of points and billions of connections, or more. As we shall
  see, it would be impossible to solve the problem for such an application
  without an efficient algorithm.
</p>
<p>
  Similarly, the integers might represent contact points in an electrical network, 
  and the pairs might represent wires connecting the points.
  In this case, we could use our program to find a way to connect all the
  points without any extraneous connections, if that is possible. There
  is no guarantee that the edges in the list will suffice to connect all the
  points-indeed, we shall soon see that determining whether or not they
  will could be a prime application of our program.
</p>
<p>
  Figure 1.2 illustrates these two types of applications in a larger
  example. Examination of this figure gives us an appreciation for the
  difficulty of the connectivity problem: How can we arrange to tell
  quickly whether any given two points in such a network are connected?
</p>
<p>
  Still another example arises in certain programming environments where 
  it is possible to declare two variable names as equivalent.
  The problem is to be able to determine whether two given names are
  equivalent, after a sequence of such declarations. This application is an
  early one that motivated the development of several of the algorithms
  that we are about to consider. It directly relates our problem to a simple 
  abstraction that provides us with a way to make our algorithms
  useful for a wide variety of applications, as we shall see.
</p>
<p>
  Applications such as the variable-name-equivalence problem described in the 
  previous paragraph require that we associate an integer
  with each distinct variable name. This association is also implicit in the
  network-connection and circuit-connection applications that we have
  described. We shall be considering a host of algorithms in Chapters 10
  through 16 that can provide this association in an efficient manner.
  Thus, we can assume in this chapter, without loss of generality, that
  we have N objects with integer names, from 0 to N - 1.
</p>
<p>
  We are asking for a program that does a specific and well-defined
  task. There are many other related problems that we might want to
  have solved, as well. One of the first tasks that we face in developing
  an algorithm is to be sure that we have specified the problem in a
  reasonable manner. The more we require of an algorithm, the more
  time and space we may expect it to need to finish the task. It is
  impossible to quantify this relationship a priori, and we often modify
  a problem specification on finding that it is difficult or expensive to
  solve, or, in happy circumstances, on finding that an algorithm can
  provide information more useful than was called for in the original
  specification.
</p>
<p>
  For example, our connectivity-problem specification requires
  only that our program somehow know whether or not any given pair
  p-q is connected, and not that it be able to demonstrate any or all
  ways to connect that pair. Adding a requirement for such a specification 
  makes the problem more difficult, and would lead us to a different
  family of algorithms, which we consider briefly in Chapter 5 and in
  detail in Part 7.
</p>
<p>
  The specifications mentioned in the previous paragraph ask us
  for more information than our original one did; we could also ask
  for less information. For example, we might simply want to be able
  to answer the question: "Are the AI connections sufficient to connect
  together all N objects?" This problem illustrates that, to develop
  efficient algorithms, we often need to do high-level reasoning about
  the abstract objects that we are processing. In this case, a fundamental
  result from graph theory implies that all N objects are connected if
  and only if the number of pairs output by the connectivity algorithm
  is precisely N 1 (see Section 5.4). In other words, a connectivity
  algorithm will never output more than N - 1 pairs, because, once it
  has output N 1 pairs, any pair that it encounters from that point on
  will be connected. Accordingly, we can get a program that answers
  the yes-no question just posed by changing a program that solves the
  connectivity problem to one that increments a counter, rather than
  writing out each pair that was not previously connected, answering
  "yes" when the counter reaches N ~- 1 and "no" if it never does. This
  question is but one example of a host of questions that we might
  wish to answer regarding connectivity. The set of pairs in the input is
  called a graph, and the set of pairs output is called a spanning tree for
  that graph, which connects all the objects. We consider properties of
  graphs, spanning trees, and all manner of related algorithms in Part 7.
</p>
<p>
  It is worthwhile to try to identify the fundamental operations
  that we will be performing, and so to make any algorithm that we
  develop for the connectivity task useful for a variety of similar tasks.
  Specifically, each time that we get a new pair, we have first to determine
  whether it represents a new connection, then to incorporate the information 
  that the connection has been seen into its understanding about
  the connectivity of the objects such that it can check connections to be
  seen in the future. We encapsulate these two tasks as abstract operations by considering the integer input values to represent elements in
  abstract sets, and then design algorithms and data structures that can
  • Find the set containing a given item.
  • Replace the sets containing two given items by their union.
  Organizing our algorithms in terms of these abstract operations does
  not seem to foreclose any options in solving the connectivity problem,
  and the operations may be useful for solving other problems. Developing ever 
  more powerful layers of abstraction is an essential process
  in computer science in general and in algorithm design in particular,
  and we shall turn to it on numerous occasions throughout this book.
  In this chapter, we use abstract thinking in an informal way to guide us
  in designing programs to solve the connectivity problem; in Chapter 4,
  we shall see how to encapsulate abstractions in C code.
</p>
<p>
  The connectivity problem is easily solved in terms of the find
  and union abstract operations. After reading a new pair p-q from the
  input, we perform a find operation for each member of the pair. If
  the members of the pair are in the same set, we move on to the next
  pair; if they are not, we do a union operation and write out the pair.
  The sets represent connected components: subsets of the objects with
  the property that any two objects in a given component are connected.
  This approach reduces the development of an algorithmic solution for
  connectivity to the tasks of defining a data structure representing the
  sets and developing union and find algorithms that efficiently use that
  data structure.
</p>
<p>
  There are many possible ways to represent and process abstract
  sets, which we consider in more detail in Chapter 4. In this chapter,
  our focus is on finding a representation that can support efficiently
  the union and find operations that we see in solving the connectivity
  problem.
</p>
<p>
<h4>Exercises</h4>
  1.1 Give the output that a connectivity algorithm should produce when
  given the input 0-2,1-4,2-5,3-6,0-4,6-0, and 1-3.
  1.2 List all the different ways to connect two different objects for 
  the example in Figure I. I.
  1.3 Describe a simple method for counting the number of sets remaining
  after using the union and find operations to solve the connectivity problem as
  described in the text.
</p>
`
}
const ru = {text:`
<p>
  Предположим, что имеется последовательность пар целых чисел, 
  в которой каждое целое число представляет объект некоторого 
  типа, а пара p-q интерпретируется как "р связано с q". 
  Мы полагаем, что отношение "связано с" является транзитивным: 
  если р связано с q, a q связано с r, то р связано с r. 
  Задача состоит в написании программы, исключающей 
  лишние пары из этого множества: когда программа вводит 
  пару p-q, она должна выводить эту пару только в том случае, 
  если из просмотренные на текущий момент множества пар не 
  следует, что р связано с q. Если просмотренных ранее пар 
  следует, что р связано с q, то программа должна игнорировать 
  пару p-q и переходить к вводу следующей пары. Пример такого 
  процесса показан на рис. 1.1.
</p>
<p>
  Задача состоит в разработке программы, которая может запомнить 
  достаточный объем информации о просмотренных парах, чтобы решить, 
  связана ли новая пара объектов. Достаточно неформально задачу 
  разработки такого метода мы называем задачей связности (connectivity
  problem). Такая задача возникает в ряде важных приложений. 
  Мы коротко рассмотрим три примера, подтверждающие фундаментальный 
  характер этой задачи. Например, целые числа могли бы представлять 
  компьютеры в большой сети, а пары чисел могли бы представлять 
  соединения в сети. Тогда такой программой можно воспользоваться для 
  определения того, нужно ли устанавливать новое прямое соединение 
  между р и q, чтобы они имели возможность обмениваться информацией, 
  или же можно использовать существующие соединения, чтобы установить 
  коммутируемый канал связи между ними. В подобных приложениях может 
  потребоваться обработка миллионов точек и миллиардов или большего 
  числа соединений. Как мы увидим далее, решить подобную задачу
  для такого приложения невозможно, не имея эффективного алгоритма.
</p>
<p>
  Аналогично, целые числа могут представлять токоприемники электрической 
  сети, а пары этих чисел могут представлять связывающие их провода. 
  В этом случае программу можно было бы использовать для определения 
  способа соединения всех токоприемников без каких-либо избыточных соединений, 
  если это возможно. Не существует никакой гарантии того, что ребер списка 
  окажется достаточно для соединения всех точек - действительно, вскоре мы 
  увидим, что определение факта, так ли это, может стать основным применением 
  нашей программы.
</p>
<p>
  Рисунок 1.2 служит более сложным примером использования этих двух видов приложений. 
  Изучение этого рисунка дает представление о сложности задачи связности:
  как можно быстро выяснить, являются ли любые две заданные точки в такой сети 
  связанными?
</p>
<p>
  Еще один пример встречается в некоторых средах программирования, где имена
  каких-либо двух переменных можно объявлять эквивалентными. Задача заключается в
  том, чтобы после считывания некоторой последовательности таких объявлений 
  определить, являются ли два заданных имени эквивалентными. Это приложение — 
  одно из первых, давших начало разработке нескольких алгоритмов, которые мы 
  будем рассматривать. Как будет показано далее, оно устанавливает непосредственную 
  связь между рассматриваемой задачей и простой абстракцией, которая позволяет 
  нам использовать эти алгоритмы для широкого круга приложений.
</p>
<p>
  Такие приложения; как задача об эквивалентности имен переменных, описанная в
  предыдущем абзаце, требует, чтобы целое число с каждым отдельным именем 
  переменной было сопоставлено некоторое целое число. Такое сопоставление 
  подразумевается также в описанных выше приложениях, устанавливающих соединения 
  в сети и в электрической цепи. В главах 10-16 мы рассмотрим ряд алгоритмов, 
  которые могут эффективно построить такое сопоставление. Таким образом, в этой 
  главе без ущерба для общности изложения можно предположить, что имеется N объектов 
  с целочисленными именами от 0 до N -1.
</p>
<p>
  Нам требуется программа, которая выполняет конкретную, четко поставленную задачу. 
  Существует множество других задач, связанных с этой задачей, которые нам,
  возможно, придется решать. Одна из первых проблем, с которой приходится 
  сталкиваться при разработке того или иного алгоритма, связана с необходимостью 
  убедиться в том, что задана поставлена правильно. Как правило, чем больше требуется 
  от алгоритма, тем больше времени и объема памяти может потребоваться для решения задачи.
  Это соотношение невозможно заранее точно выразить в числах, и часто постановку
  задачи приходится менять, когда выясняется, что ее трудно решить, либо ее решение
  требует слишком больших затрат, либо когда, при удачном стечении обстоятельств,
  выясняется, что алгоритм может предоставить более полезную информацию, чем от
  него требовалось в первоначальной постановке.
</p>
<p>
  Например, приведенная выше постановка задачи связности требует только, чтобы
  программа каким-либо образом могла узнать, является ли данная пара p-q связанной,
  но не требует показать какой-либо один или все способы соединения этой пары. До¬
  бавление в постановку конкретного требования усложняет задачу и приводит к друго¬
  му семейству алгоритмов, которое мы кратко будет рассматривать в главе 5 и подроб¬
  но - в части 7.
</p>
<p>
  Описанная в предыдущем абзаце постановка задачи требуют больше информации,
  чем первоначальная постановка; можно также потребовать от нее меньше информации.
  Например, можно просто потребовать ответа на вопрос: "Достаточно ли М связей для
  соединения всех N объектов?”. Эта задача служит иллюстрацией того факта, что для
  разработки эффективных алгоритмов часто требуется обдумать вопросы, касающиеся
  обрабатываемых объектов, на высоких уровнях абстракции. В данном случае из 
  фундаментальных положений теории графов следует, что все N объектов связаны тогда и
  только тогда, когда количество пар, выданных алгоритмом решения задачи связности,
  в точности равно N -1 (см. раздел 5.4). Иначе говоря, алгоритм решения задачи 
  связности никогда не выдаст более N -1 пар, поскольку как только он выдаст более
  N - 1 пары, любая встретившаяся после этого пара уже будет связанной. 
  Соответственно, можно написать программу, отвечающую "да/нет" на только что 
  поставленный вопрос, изменив программу, которая решает задачу связности таким образом,
  чтобы она увеличивала значение специального счетчика, а не выдавала на выходе ранее 
  несвязанную пару, и отвечала "да", когда значение счетчика достигнет значения
  N- 1, и "нет”, если это не происходит. Этот вопрос - всего лишь один из множества
  вопросов, на которые мы хотели бы получить ответ, исследуя свойства связности графов. 
  Входное множество пар чисел называется графом (graph), а выходное множество
  пар — остовным деревом (spanning tree) этого графа, связывающим все объекты. 
  Свойства графов, остовных деревьев и всевозможные связанные с ними алгоритмы будут
  рассматриваться в части 7.
</p>
<p>
  Имеет смысл попытаться выявить базовые операции, использованные в алгоритме
  решения задачи связности и тем самым сделать любой алгоритм решения этой задачи
  полезным для решения ряда аналогичных задач. В частности, при получении каждой
  новой пары вначале необходимо определить, представляет ли она новое соединение,
  затем следует увязать информацию о том, что это соединение было просмотрено, в
  общую картину связности объектов таким образом, чтобы эта пара учитывалась при
  проверке последующих соединений в будущем. Мы инкапсулируем эти две задачи в
  виде абстрактных операций (abstract operation), полагая, что вводимые целочисленные
  значения представляют элементы в абстрактных множествах, а затем разработаем такие
  алгоритмы и структуры данных, которые могут:
  ■	находить множество, содержащее заданный элемент,
  ■	замещать множества, содержащие два данных элемента, их объединением.
</p>
<p>
  Организация алгоритмов в виде последовательности абстрактных операций, 
  по-видимому, не препятствует никаким вариантам решения задачи связности, 
  а сами эти операции могут оказаться полезными при решении других задач. 
  Разработка все более высоких уровней абстракции, обеспечивающими возрастающие 
  возможности, - основной процесс в компьютерных науках в целом и в разработке 
  алгоритмов в частности, и на протяжении этой книги мы будем обращаться к нему 
  неоднократно. В этой главе мы неформально воспользуемся абстрактным мышлением 
  в качестве руководящих принципов при разработке программ решения задачи связности; 
  как внедряются абстракции в программы на языке С, будет показано в главе 4.
</p>
<p>
  Задача связности легко решается посредством абстрактных операций find (поиск) и
  union (объединение). После считывания новой пары p-q из ввода мы выполняем 
  операцию find для каждого элемента пары. Если элементы пары находятся в одном наборе,
  мы переходим к следующей паре; если нет, то выполняем операцию union и записываем 
  эту пару. Множества представляют связные компоненты (connected component): это
  подмножества объектов, характеризующиеся тем, что любые два объекта в данной
  компоненте связаны. Этот подход сводит разработку алгоритмического решения задачи 
  связности к задачам определения структуры данных, представляющей эти множества, и 
  к разработке алгоритмов операций union и find, которые эффективно используют 
  эту структуру данных.
</p>
<p>
  Существует много возможных способов представления и обработки абстрактных
  множеств. В этой главе основное внимание уделяется поиску представления, которое
  может эффективно поддерживать операции union и find, требуемые для решения задачи
  связности.
</p>
<p>
  <h4>Упражнения</h4>
  1.1.	Приведите выходные результаты, которые должен вычислить алгоритм решения 
  задачи связности при заданном вводе 0-2, 1-4, 2-5, 3-6, 0-4, 6-0 и 1-3.
  1.2.	Перечислите все возможные способы связывания двух различных объектов,
  показанных в примере на рис. 1.1.
  1.3.	Опишите простой метод подсчета числа множеств, остающихся после выполнения 
  операций union и find при решении задачи связности, как описано в тексте.
</p>
`
}
const p_1_2 = [
  en,
  ru
]
const Json = JSON.stringify(Introduction)
const fs = require('fs')
fs.writeFile('Introduction.json', Json, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});