# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: I think of jsx as a way to use javascript logic within html or maybe a way to use html inside javascript. There are several reserved names in javascript such as for and class therefore in JSX you must use htmlFor and className respectively. There are a few others that I will include in my researched answer.

Researched answer: JSX is a syntax extension to javascript. JSX solves the problem of having your rendering or UI logic separate from the actual html. You can now have javascript directly influence the rendering in the same place by separating things out in components and putting logic in simple curly bracers.

Some other differences is that JSX uses camel casing when specifying attributes. So class becomes className and tabindex becomes tabIndex. This is the case for all attributes. Other examples are onclick becomes onClick and onmouseover becomes onMouseOver.

All tags self close in JSX even divs and spans. You wouldn't want to do that but it is still possible. You must use the /> syntax to self close though.

Inline styles are written as objects inside the style tag. For example:
style={{color: "red"}}

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yarn is a packet manager just like npm which is node packet manager. Yarn adds node modules and also modifies package.json. The node modules are packets or snippets of code that help build out a project and gives the developer a lot of extra tools.



Researched answer: Yarn allows for people to upload packages that other people can use quickly and easily straight from the terminal just by typing in yarn install bla bla bla. Then you can use some really cool pieces of prebuilt code. 

The files that are edited are the node_modules based on what is in your package.json and also yarn.lock. Yarn.lock tries to satisfy all the dependencies listed in package.json files.

3. What is an anonymous function in JavaScript?

Your answer: An anonymous function is a function syntax that looks like ()=>{} which is often used in call back functions such as in .map .filter and so on. I just recently watched a video about the limitations of anonymous functions. My understanding is that it does not include the this that would live in a normal function call such as function name(){}. This means you shouldn't use an anonymous function to create a class, factory function, or maybe instantiate an object. 

Researched answer: Anonymous functions are functions without a name. Of course you can assign the function to a variable if you need to call it later but if you do not do that you can not call it anywhere else. An anonymous function not assigned to a variable must be enclosed in parentheses.

Anonymous functions can also be used as arguments in other functions. THis is how .map, .filter, and higher order functions work in general.

Something neat is you can immediately call an anonymous function by putting parentheses after it (()=>{})().

The major limitation of anonymous functions is that they can not be reused.

4. What is the difference between state values and props in React?

Your answer: State values are values tracked by react in order to decide when the DOM needs to be updated. We put variables in state that we want the user to influence. Things such as form data or text inputs. Maybe we put a toggle here so a modal will show up or go away. State can also hold important data we get back from an api so that we know to update the page when new information comes in.

Props are informational packets or functions we want our components to use. In this way if we are passing some state information through props the component will update on the DOM when state changes.

Researched answer: Props get passed to a component similar to a function parameter. State is something that is managed within a function. Whenever props or state are changed a rerendering occurs.

5. What is the DOM?

Your answer: The DOM is the document object model. This is what the browser displays. If something changes on the DOM the page must be updated. This is where react becomes so useful as it is able to only update specific parts of the DOM that are changed.

Researched answer: The DOM is a programming interface that represents the page in a way that it can be manipulated. It does this by representing the document as nodes and objects. In this way the programmer can access specific parts of the document and then manipulate them.

The virtual DOM or VDOM in react is a virtual representation of the DOM kept in memory. The VDOM is then synced up with the real DOM and any changes in the virtual DOM can then be reconciled with the actual DOM. So in React all you are doing is manipulating this VDOM then react behind the scenes does the work to make sure only the part of the VDOM that you changed gets updated in the real DOM creating a smoother user experience.

6. STRETCH: Which is the difference between a div and a span?

Your answer: I am not sure. Both are html tags. I think div might create a new node in the document object model while a span will be included within the current node.

I do know that you can create a span in the same line as other html tags and it will stay within that line. That is what made me thing about the above answer. If I put a new div it would create something on a new line while a span will keep the information on the same line.

Researched answer: I was way off in that node idea I think. But the difference is div is a block level element and span is an inline level element. Divs create a knew block to encapsulate information while Spans create a new inline element to encapsulate information. Divs take up the entire length of their block. The span tag is used to separate out elements on the same line for styling purposes. Like for a group of words in a paragraph. 

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Object oriented programming is the practice of storing all data and methods within objects. This style of programming will often use classes as the basis for developing their structure. object oriented programming allows for inheritance and the ability to quickly and easily pass stored information through different classes. Because a lot of the information is abstracted away in different classes it can be difficult to read and follow what is going on.

2. Ruby: Ruby is a dynamic open source programming language. In ruby everything is an object. This allows for every piece of code to have attached methods, even integers.

3. Implicit return: An implicit return is a return from a function without using the word return. Ruby has implicit returns on all functions. Ruby will implicitly return the last line of code within a function.

4. Ruby blocks: Ruby blocks are block of code that end in end. These can block in functions or loops or anything you can think of. It is basically a function but since everything is an object we will call them methods.

5. Ruby hashes: Ruby hashes are objects. They have key value pairs and can be iterated over like arrays but with specified keys rather than indexed. 
