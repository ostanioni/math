const en = { text:`
<h3>I.I ALGORITHMS</h3>
<p>
  When we write a computer program, we are generally implementing
  a method that has been devised previously to solve some problem.
  This method is often independent of the particular computer to be
  used-it is likely to be equally appropriate for many computers and
  many computer languages. It is the method, rather than the computer
  program itself, that we must study to learn how the problem is being
  attacked. The term algorithm is used in computer science to describe
  a problem-solving method suitable for implementation as a computer
  program. Algorithms are the stuff of computer science: They are
  central objects of study in many, if not most, areas of the field.
</p>
<p>
  Most algorithms of interest involve methods of organizing the
  data involved in the computation. Objects created in this way are
  called data structures, and they also are central objects of study in
  computer science. Thus, algorithms and data structures go hand in
  hand. In this book we take the view that data structures exist as the
  byproducts or end products of algorithms, and thus that we must study
  them in order to understand the algorithms. Simple algorithms can
  give rise to complicated data structures and, conversely, complicated
  algorithms can use simple data structures. We shall study the properties
  of many data structures in this book; indeed, the book might well have
  been called Algorithms and Data Structures in C.
</p>
<p>
  When we use a computer to help us solve a problem, we typically
  are faced with a number of possible different approaches. For small
  problems, it hardly matters which approach we use, as long as we
  have one that solves the problem correctly. For huge problems (or
  applications where we need to solve huge numbers of small problems),
  however, we quickly become motivated to devise methods that use
  time or space as efficiently as possible.
</p>
<p>
  The primary reason for us to learn about algorithm design is
  that this discipline gives us the potential to reap huge savings, even
  to the point of making it possible to do tasks that would otherwise
  be impossible. In an application where we are processing millions of
  objects, it is not unusual to be able to make a program millions of
  times faster by using a well-designed algorithm. We shall see such an
  example in Section 1.2 and on numerous other occasions throughout
  the book. By contrast, investing additional money or time to buy and
  install a new computer holds the potential for speeding up a program
  by perhaps a factor of only 10 or 100. Careful algorithm design is
  an extremely effective part of the process of solving a huge problem,
  whatever the applications area.
</p>
<p>
  When a huge or complex computer program is to be developed,
  a great deal of effort must go into understanding and defining the
  problem to be solved, managing its complexity, and decomposing it
  into smaller subtasks that can be implemented easily. Often, many
  of the algorithms required after the decomposition are trivial to implement. In most cases, however, there are a few algorithms whose
  choice is critical because most of the system resources will be spent
  running those algorithms. Those are the types of algorithms on which
  we concentrate in this book. We shall study a variety of fundamental
  algorithms that are useful for solving huge problems in a broad variety
  of applications areas.
</p>
<p>
  The sharing of programs in computer systems is becoming more
  widespread, so, although we might expect to be using a large fraction
  of the algorithms in this book, we also might expect to have to implement 
  only a smaller fraction of them. However, implementing simple
  versions of basic algorithms helps us to understand them better and
  thus to use advanced versions more effectively. More important, the
  opportunity to reimplement basic algorithms arises frequently. The
  primary reason to do so is that we are faced, all too often, with 
  completely new computing environments (hardware and software) with
  new features that old implementations may not use to best advantage.
  In other words, we often implement basic algorithms tailored to our
  problem, rather than depending on a system routine, to make our 
  solutions more portable and longer lasting. Another common reason to
  reimplement basic algorithms is that mechanisms for sharing software
  on many computer systems are not always sufficiently powerful to allow 
  us to tailor standard programs to perform effectively on specific
  tasks (or it may not be convenient to do so), so it is sometimes easier
  to do a new implementation.
</p>
<p>
  Computer programs are often overoptimized. It may not be
  worthwhile to take pains to ensure that an implementation of a particular algorithm is the most efficient possible unless the algorithm is to
  be used for an enormous task or is to be used many times. Otherwise,
  a careful, relatively simple implementation will suffice: We can have
  some confidence that it will work, and it is likely to run perhaps five or
  10 times slower at worst than the best possible version, which means
  that it may run for an extra few seconds. By contrast, the proper choice
  of algorithm in the first place can make a difference of a factor of 100
  or 1000 or more, which might translate to minutes, hours, or even
  more in running time. In this book, we concentrate on the simplest
  reasonable implementations of the best algorithms.
</p>
<p>
  The choice of the best algorithm for a particular task can be
  a complicated process, perhaps involving sophisticated mathematical
  analysis. The branch of computer science that comprises the study of
  such questions is called analysis ofalgorithms. Many of the algorithms
  that we study have been shown through analysis to have excellent performance; 
  others are simply known to work well through experience.
  Our primary goal is to learn reasonable algorithms for important tasks,
  yet we shall also pay careful attention to comparative performance of
  the methods. We should not use an algorithm without having an idea
  of what resources it might consume, and we strive to be aware of how
  our algorithms might be expected to perform.
</p>
`
}
const ru = {text:`
<h3>1.1	АЛГОРИТМЫ </h3>
<p>
  Для написания компьютерной программы мы обычно используем метод, который
  уже был когда-то разработан для решения какой-либо задачи. Часто этот метод 
  не зависит от конкретного используемого компьютера - вполне вероятно, что он будет
  одинаково пригодным для многих компьютеров и многих компьютерных языков.
  Именно метод, а не сама программа должен быть исследован с тем, чтобы выяснить, 
  как подойти к решению задачи. Термин алгоритм используется в компьютерных науках 
  для описания метода решения задачи, пригодного для реализации в виде компьютерной 
  программы. Алгоритмы составляют основу теории вычислительных машин и систем: 
  они являются основными объектами изучения во многих, если не большинства ее областей.
</p>
<p>
  Большая часть представляющих интерес алгоритмов использует методы организации 
  данных, применяемых в вычислениях. Созданные таким образом объекты называются 
  структурами данных (data structures), и они также являются центральными объектами 
  изучения компьютерных наук. Следовательно, алгоритмы и структуры данных идут рука 
  об руку. В этой книге мы будем придерживаться точки зрения, согласно которой
  структуры данных существуют как промежуточные или конечные результаты выполнения 
  алгоритмов и, следовательно, обязаны мы их изучить, чтобы получить полное
  представление об алгоритме. Простые алгоритмы могут порождать сложные структуры
  данных и наоборот, сложные алгоритмы могут использовать простые структуры данных. 
  В этой книге будут изучены свойства многих структур данных; фактически книга
  вполне могла бы называться "Алгоритмы и структуры данных в языке С".
</p>
<p>
  Когда компьютер используется для решения той или иной задачи, мы, как правило, 
  сталкиваемся с рядом различных возможных подходов. При решении простых задач 
  выбор того или иного подхода вряд ли имеет особое значение, если только выбранный 
  подход приводит к правильному решению. Однако, при решении сложных задач (или в 
  приложениях, в которых приходится решать очень большое количество простых задач) 
  мы немедленно сталкиваемся с необходимостью разработки методов, в условиях которых 
  время или память используются с максимально возможной эффективностью.
</p>
<p>
  Основная побудительная причина изучения алгоритмов состоит в том, что это знание 
  этой предметной области позволяет обеспечить огромную экономию ресурсов,
  вплоть до получения решений задач, которые в противном случае были бы невозможны. 
  В приложениях, в которых обрабатываются миллионы объектов, часто оказывается
  возможным ускорить работу программы в миллионы раз, используя хорошо разработанный 
  алгоритм. Подобный пример приводится в разделе 1.2 и многих других разделах книги. 
  Для сравнения, дополнительные затраты денег или времени для приобретения и установки 
  нового компьютера потенциально позволяет ускорить работу программы всего лишь 
  в 10-100 раз. Тщательная разработка алгоритма - исключительно эффективная часть 
  процесса решения сложной задачи в любой области применения.
</p>
<p>
  При разработке очень большой или очень сложной компьютерной программы значительные 
  усилия должны быть направлены на понимание и постановку задачи, подлежащей 
  решению, оценку ее сложности и разбиение ее на менее сложные подзадачи,
  решения которых можно легко реализовать. Часто реализация многих из алгоритмов
  решения задач, полученных в результате разбиения, тривиальна. Однако в большинстве
  случаев существует несколько алгоритмов, выбор которых особенно важен, поскольку
  на их выполнения затрачивается существенная часть системных ресурсов. Именно
  этим типам алгоритмов уделяется основное внимание в данной книге. Мы изучим ряд
  основополагающих алгоритмов, которые полезны при решении сложных задач во
  многих областях применения.
</p>
<p>
  Совместное использование одних и тех же программ в различных компьютерных
  системах становится все более распространенным, поэтому, рассчитывая на 
  использование многих из рассмотренных в книге алгоритмов, мы в то же время 
  должны сознавать, что реализовывать нам удастся лишь немногие из них. 
  Тем не менее, реализация простых версий базовых алгоритмов позволяет лучше 
  их понять и, следовательно, эффективнее использовать и точнее настраивать 
  более развитые их версии. И что еще   важнее, повод для повторной реализации 
  базовых алгоритмов возникает очень часто.   Основная причина состоит в том, 
  что мы сталкиваемся, и очень часто, с совершенно новыми вычислительными 
  средами (аппаратными и программными) и с новыми свойствами, которые не 
  могут наилучшим образом использовать старые реализации этих алгоритмов. 
  Другими словами, чтобы наши решения были более переносимыми и дольше 
  сохраняли актуальность, мы часто пользуемся базовыми алгоритмами, 
  ориентированными на конкретное приложение, а не полагаемся на системные 
  подпрограммы. Другая часто возникающая причина повторной реализации 
  базовых алгоритмов заключается в том, что механизмы совместного использования 
  программ во многих компьютерных системах не всегда обладают достаточной мощностью, 
  чтобы позволить нам адаптировать стандартные программы для эффективного решения 
  специальных задач (либо вообще могут не подходить для их выполнения), поэтому иногда 
  гораздо легче разработать новую реализацию.
</p>
<p>
  Компьютерные программы часто чрезмерно оптимизированы. В некоторых случаях
  достижения максимальной эффективности реализации конкретного алгоритма не стоит
  затрачиваемых на это усилий, например, если алгоритм не предназначен для решения
  очень сложной задачи или не используется многократно. В отдельных случаях вполне
  достаточно аккуратной, сравнительно простой реализации: достаточно быть уверенным
  в ее работоспособности и в том, что, скорее всего, в худшем случае она будет 
  работать в 5—10 раз медленнее наиболее эффективной версии, что может означать 
  увеличе  ние времени выполнения на несколько дополнительных секунд. И напротив, 
  правильный выбор алгоритма может ускорить работу в 100-1000 и более раз, что может
  обеспечить экономию времени прогона алгоритма в минутах, часах и даже более того.
  В этой книге основное внимание уделяется простейшим приемлемым реализациям
  наилучших алгоритмов.
</p>
<p>
  Выбор наилучшего алгоритма решения конкретной задачи может оказаться слож¬
  ным процессом, подчас требующим сложного математического анализа. Направление
  компьютерных наук, занимающееся изучением подобных вопросов, называется анали¬
  зом алгоритмов (analysis of algorithm). Анализ многих изучаемых нами алгоритмов пока¬
  зывает, что для них характерна прекрасная производительность; о хорошей работе
  других известно просто из опыта их применения. Наша основная цель - изучение ал¬
  горитмов, пригодных для решения важных задач, хотя большое внимание будет уделе¬
  но также сравнительной производительности различных методов. Не следует использо¬
  вать алгоритм, не имея представления о ресурсах, которые могут потребоваться для
  его выполнения, поэтому мы стремимся заранее знать, какую производительность
  можно ожидать от того или иного алгоритма.
</p>
`
}
const p_1_1 = [
  en,
  ru
]

const Json = JSON.stringify(Introduction)
const fs = require('fs')
fs.writeFile('Introduction.json', Json, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});