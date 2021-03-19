'use strict';

// Higher-Order Funtions - Arrays

const companies = [
	{name: "Company One", category: "Finance", start: 1981, end: 2003},
	{name: "Company Two", category: "Retail", start: 1992, end: 2008},
	{name: "Company Three", category: "Auto", start: 1999, end: 2007},
	{name: "Company Four", category: "Retail", start: 1989, end: 2010},
	{name: "Company Five", category: "Technology", start: 2009, end: 2014},
	{name: "Company Six", category: "Finance", start: 1987, end: 2010},
	{name: "Company Seven", category: "Auto", start: 1986, end: 1996},
	{name: "Company Eight", category: "Technology", start: 2011, end: 2016},
	{name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// //without for - each
for(let i = 0; i < companies.length; i++){
	console.log(companies[i])
}

//FOR - EACH
companies.forEach(function(company){
	console.log(company)
})


// //without filter
const canDrink = [];

for(let i = 0; i < ages.length; i++){
	if(ages[i] >= 21){
		canDrink.push(ages[i])
	}
}
console.log(canDrink)

//FILTER
const canDrinkFilter = ages.filter(function(age){
	if(age >= 21)
	return true;
})
console.log(canDrinkFilter)

//using arrow functions
const canDrinkFilterArrow = ages.filter(age => age >= 21);
console.log(canDrinkFilterArrow)

// Filter retail companies
const retailCompany = companies.filter(function(companies){
	if(companies.category === 'Retail'){
		return true;
	}
})
console.log(retailCompany)

//using arrow functions
const retailCompanyArrow = companies.filter(company => company.category === 'Retail');
console.log(retailCompanyArrow)

//MAP
// Create array of company names
const companyNames = companies.map(function(company){
	return company.name;
})
console.log(companyNames)

//using arrow function
const companyNamesArrow = companies.map(company => `${company.name} - [From ${company.start} to ${company.end}]`)
console.log(companyNamesArrow)

//SORT
//Sort companies by start year
const sortedCompanies = companies.sort(function(company1, company2){
	if(company1.start > company2.start){
		return 1;
	}else{
		return -1;
	}
})
console.log(sortedCompanies);

const sortedCompanies1 = companies.sort((comp1, comp2) => (comp1.start > comp2.start ? 1 : -1));
console.log(sortedCompanies1)

//Sort ages
const sortAges1 = ages.sort(); //sort until get a one digit of 
console.log(sortAges1)

const sortAges = ages.sort((num1, num2) => num1 - num2);
console.log(sortAges)


//REDUCE

//Get sum of ages
//without using reduce
let ageSum = 0;
for(let i = 0; i < ages.length; i++){
	ageSum += ages[i];
}
console.log(ageSum);

// using reduce
const ageSumReduce = ages.reduce(function(sum, age){
	return sum + age;
}, 0);
console.log(ageSumReduce)

//using arrow function
const ageSumReduceArrow = ages.reduce((sum, age) => sum + age, 0);
console.log(ageSumReduceArrow)


//get total years for all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears)


//combined methods
const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((age1, age2) => age1 - age2)
.reduce((age1, age2) => age1 + age2, 0);

console.log(combined)