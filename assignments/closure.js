// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function gradmaHouse(){
   const gradmaKeyHideUnderneath = 'planter'
   function momHouse(){
     console.log(`Gradma\'s key is underneath the ${gradmaKeyHideUnderneath}`)
     const momKeyHideUnderneath = 'doorMat'
     function whereAreKeys(){
       console.log(`Dad, Gradma's key is underneath the ${gradmaKeyHideUnderneath} and Mom's key is underneath the ${momKeyHideUnderneath} `)
     }
     whereAreKeys()
   }
   momHouse()
}

gradmaHouse()

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
   let counter = 0
  // Return a function that when invoked increments and returns a counter variable.
   return function(){
    return ++counter 
   }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const myCounter = counter();
myCounter()//?
myCounter()//?


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
   let count = 0
   return {
     label:'count',
     increment:function(){
        return ++count
     },
     decrement:function(){
        return --count
     }
   }
};

const myCounterFactory = counterFactory()
myCounterFactory.increment() //?
myCounterFactory.increment() //?
myCounterFactory.increment() //?
myCounterFactory.decrement() //?
myCounterFactory.decrement() //?
myCounterFactory.decrement() //?
