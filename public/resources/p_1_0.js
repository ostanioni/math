const en = { text:`
<h2>CHAPTER ONE</h2>
<h1>Introduction</h1>
<p>  
  THE OBJECTIVE OF this book is to study a broad variety of 
  important and useful algorithms: methods for solving  problems 
  that are suited for computer implementation. We shall deal with many
  different areas of application, always concentrating on fundamental
  algorithms that are important to know and interesting to study. We
  shall spend enough time on each algorithm to understand its essential
  characteristics and to respect its subtleties. Our goal is to learn a large
  number of the most important algorithms used on computers today,
  well enough to be able to use and appreciate them.
</p>
<p>
  The strategy that we use for understanding the programs presented in this 
  book is to implement and test them, to experiment with
  their variants, to discuss their operation on small examples, and to try
  them out on larger examples similar to what we might encounter in
  practice. We shall use the C programming language to describe the
  algorithms, thus providing useful implementations at the same time.
  Our programs have a uniform style that is amenable to translation into
  other modem programming languages, as well.
</p>
<p>
  We also pay careful attention to performance characteristics of
  our algorithms, to help us develop improved versions, compare different 
  algorithms for the same task, and predict or guarantee performance
  for large problems. Understanding how the algorithms perform might
  require experimentation or mathematical analysis or both. We consider detailed 
  information for many of the most important algorithms,
  developing analytic results directly when feasible, or calling on results
  from the research literature when necessary.
</p>
`
}
const ru = {text:`
<h2>ГЛАВА 1</h2>
<h1>Введение</h1>
<p>
Цель этой книги - изучение широкого множества важных 
и полезных алгоритмов, то есть, методов решения задач, 
которые подходят для компьютерной реализации. Мы будем 
иметь дело с различными областями применения, всегда 
уделяя основное внимание фундаментальным алгоритмам, 
которые важно знать и интересно изучать. Мы затратим 
достаточное время на изучение каждого алгоритма, чтобы 
понять его основные характеристики и разобраться во всех 
его тонкостях. Наша цель - достаточно подробно изучить 
как можно больше самых важных алгоритмов, используемых 
в компьютерах в настоящее время, чтобы уметь ими 
пользоваться и дать оценку их сильным и слабым сторонам.
</p>
<p>
Стратегия, используемая для изучения программ, 
представленных в этой книге, заключается в их реализации и
тестировании, экспериментировании с различными их версиями, 
в анализе их работы на небольших примерах и в
попытках их выполнения применительно к более сложным
практическим задачам, с какими мы можем столкнуться
на практике. Для описания алгоритмов будет использован
язык программирования С, что также позволит получить
полезные программные реализации. Программы написаны
в единообразном стиле, который допускает также их перевод 
на другие современные языки программирования.
</p>
<p>
Значительное внимание также уделяется рабочим 
характеристикам алгоритмов, чтобы легче было 
разрабатывать более совершенствованные версий алгоритмов, 
сравнивать различные алгоритмы выполнения одной и той же
задачи и предсказывать или гарантировать их производительность 
при решении сложных задач. Чтобы понять, как работает тот 
или иной алгоритм, возможно, потребуется выполнить ряд 
экспериментов с ними или провести их математический анализ, 
либо и то, и другое. Мы рассмотрим подробную информацию,
касающуюся многих наиболее важных алгоритмов, причем, 
когда это целесообразно, аналитические выкладки приводятся 
непосредственно в тексте; в других случаях, необходимые 
результаты берутся из научных публикаций.
</p>
<p>
Чтобы продемонстрировать общий подход к разработке алгоритмических 
решений, в этой главе мы рассмотрим подробный пример, по условиям 
которого для решения конкретной задачи используются несколько 
алгоритмов. Рассматриваемая задача — это не просто модельная задача; 
это фундаментальная вычислительная задача, и решение, которое мы 
стремимся получить, должно быть пригодным для использования в 
различных приложениях. Мы начнем с простого решения, затем постараемся 
выяснить его рабочие характеристики, что поможет нам найти способы 
усовершенствовать алгоритм. Выполнив определенное число итераций этого 
процесса, получим эффективный и полезный алгоритм решения задачи. Этот 
пример служит своего рода прототипом использования одной и той же 
общей методологии на протяжении всей книги. Глава завершается кратким 
обсуждением содержания книги, включая описание основных ее частей и их 
взаимосвязь между собой.
</p>
`
}
const p_1_0 = [
  en,
  ru
]
const Json = JSON.stringify(p_1_0)
const fs = require('fs')
fs.writeFile('p_1_0.json', Json, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});