const objects = [
	{
			id: 1,
			displayName: 'Object John',
			date: '12-10-2020',
			enabled: true,
			relation: null
	},
	{
			id: 2,
			displayName: 'Object Kate',
			date: '06-21-2020',
			enabled: false,
			relation: {
					relationId: 1
			}
	},
	{
			id: 3,
			displayName: 'Object Bob',
			date: '04-03-2020',
			enabled: true,
			relation: {
					relationId: 1
			}
	},
	{
			id: 4,
			displayName: 'Object Alex',
			date: '12-12-2021',
			enabled: false,
			relation: null
	},
	{
			id: 5,
			displayName: 'Object Pooja',
			date: '07-30-2019',
			enabled: true,
			relation: {
					relationId: 4
			}
	},
	{
			id: 6,
			displayName: 'Object Scott',
			date: '02-15-2021',
			enabled: true,
			relation: {
					relationId: 2
			}
	},
	{
			id: 7,
			displayName: 'Object Sergey',
			date: '01-06-2020',
			enabled: true,
			relation: {
					relationId: 5
			}
	},
	{
			id: 8,
			displayName: 'Object Adhey',
			date: '03-21-2021',
			enabled: true,
			relation: {
					relationId: 5
			}
	},
	{
			id: 9,
			displayName: 'Object Travis',
			date: '08-10-2021',
			enabled: true,
			relation: {
					relationId: 1
			}
	},
	{
			id: 10,
			displayName: 'Object Artem',
			date: '09-24-2021',
			enabled: false,
			relation: {
					relationId: 4
			}
	},
	{
			id: 11,
			displayName: 'Object Stuart',
			date: '04-01-2020',
			enabled: true,
			relation: {
					relationId: 7
			}
	},
	{
			id: 12,
			displayName: 'Object Keith',
			date: '05-08-2020',
			enabled: true,
			relation: {
					relationId: 10
			}
	},
	{
			id: 13,
			displayName: 'Object Bill',
			date: '10-17-2020',
			enabled: true,
			relation: {
					relationId: 9
			}
	},
	{
			id: 14,
			displayName: 'Object Chuck',
			date: '04-15-2020',
			enabled: true,
			relation: null
	},
	{
			id: 15,
			displayName: 'Object Joel',
			date: '12-09-2020',
			enabled: true,
			relation: null
	},
	{
			id: 16,
			displayName: 'Object Tim',
			date: '01-12-2020',
			enabled: true,
			relation: {
					relationId: 15
			}
	},
	{
			id: 17,
			displayName: 'Object Kevin',
			date: '09-05-2020',
			enabled: true,
			relation: {
					relationId: 7
			}
	},
	{
			id: 18,
			displayName: 'Object Jessica',
			date: '07-19-2021',
			enabled: true,
			relation: {
					relationId: 12
			}
	},
	{
			id: 19,
			displayName: 'Object Monica',
			date: '02-08-2021',
			enabled: true,
			relation: {
					relationId: 14
			}
	},
	{
			id: 20,
			displayName: 'Object Tony',
			date: '09-05-2020',
			enabled: true,
			relation: {
					relationId: 7
			}
	}
];


// Task1  Необходимо получить отсортированный массив объектов по дате.

const objectsMap = objects.map((item, index) => {
	return {
			date: item.date
	};
});
console.log(objectsMap)

//Вот вариант где отсортировал массив от старой даты к новой дате
 const sortDate = objects.sort((a, b) => {
  a = a.date.split('-').reverse().join('');
  b = b.date.split('-').reverse().join('');
  return a > b ? 1 : a < b ? -1 : 0;
});

//Task 2 Необходимо получить массив объектов которые имеют enabled: true

let objectEnabled = objects.filter((item) => item.enabled);
console.log(objectEnabled);

// Task 3  Необходимо получить объект объектов собранных по месяцам и годам. 

const newObj = objects.reduce((acc, item) => {
	const [day, month, year] = item.date.split("-");
	if (year in acc) {
			if (month in acc[year]) {
					return {...acc, [year]: {...acc[year], [month]: [...acc[year][month], item] } };
			}

			return {...acc, [year]: {...acc[year], [month]: [item] } }
	}

	return {...acc,
			[year]: {

					[month]: [item]
			}
	};
}, {});

console.log(newObj);

//Task 4 Необходимо получить массив объектов которым необходимо заменить relationId на полный объект данных.

const result = objects.reduce((acc, item) => {
	if (item.relation != null) {
			let searched = objects.find(inner => inner.id === item.relation.relationId)

			return [...acc,
					{
							...item,
							relation: {
									relationId: searched
							}
					}]
	}
	return acc
}, [])
console.log(result)

// Task 5 Необходимо получить массив объектов у которых есть relation.

let hasRelation  = objects.filter((item) => item.relation)
console.log(hasRelation);

// TAsk 6 .Необходимо получить получить объект в котором сформировать данные по relation объектам.
const result1 = objects.reduce((acc, item) => {

	if (item.relation != null) {
			if (item.relation.relationId in acc) {
					return {
							...acc, [item.relation.relationId]:
									[...acc[item.relation.relationId], item]
					};

			}
			return {...acc, [item.relation.relationId]: [item]};

	}
	return acc;


}, {});
console.log(result1)

//Task 7. Необходимо получить массив объектов чья дата приходится на 2020 год и поменять ему ключ enabled на true.

const result3 = objects.reduce((acc, item) => {
	let dateItems = item.date.split("-");
	let year = +dateItems[dateItems.length - 1];
	if (year === 2020) {
			return [...acc, { ...item, enabled: true }];
	}

	return acc;
}, []);

console.log(result3)

//Task 8. Необходимо получить массив объектов. Объект должен иметь значение enabled такое что если у него нет relation, то значение false. Если relation есть, то значение enbaled берется от того значение которое указано в объекте по ссылке relationId

let result4 = objects.map((item) => {

	if (item.relation !== null) {
			let searched = objects.find((inner) => inner.id === item.relation.relationId);
			return {
					...item,
					enabled: searched.enabled,
			}
	} else {
			return {
					...item,
					enabled: false
			}
	}
});

console.log(result4);

// Task  9. Необходимо получить понимание того, что есть ли у всех объектов relation
// или нет

let isRelationExist = objects.every(item => item.relation)
console.log(isRelationExist)

// Task  10. Необходимо получить понимание есть ли объекты с enabled: true
let hasEnabledTrue = objects.some((item) => item.enabled );
console.log(hasEnabledTrue)
