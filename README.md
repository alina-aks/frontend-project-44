### Hexlet tests and linter status:
[![Actions Status](https://github.com/alina-aks/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/alina-aks/frontend-project-44/actions)

[![Quality gate status](https://sonarcloud.io/api/project_badges/measure?project=alina-aks_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=alina-aks_frontend-project-44)

# Brain Games

**Brain Games** — это набор консольных математических игр, разработанный на JavaScript. Проект включает несколько мини-игр, каждая из которых проверяет логическое мышление и навыки устного счёта.

Игроку необходимо правильно ответить на три вопроса подряд. При первой ошибке игра завершается, после чего можно начать заново.

## Игры

- **Brain Even** — определение чётности числа.
- **Brain Calc** — вычисление результата арифметического выражения.
- **Brain GCD** — поиск наибольшего общего делителя двух чисел.
- **Brain Progression** — поиск пропущенного числа в арифметической прогрессии.
- **Brain Prime** — определение простого числа.

## Требования

- Node.js 18+
- npm

## Установка

```bash
git clone https://github.com/alina-aks/frontend-project-44.git
cd frontend-project-44
npm install
npm link
```

## Запуск

```bash
brain-games
brain-even
brain-calc
brain-gcd
brain-progression
brain-prime
```