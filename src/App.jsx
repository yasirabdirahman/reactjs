import GreetingTitle from './GreetingTitle';

const App = () => {
  return (
    <div>
      <GreetingTitle />
    </div>
  );
};

export default App;






// import ToggleButton from './ToggleButton';


// const App = () =>{
//   return (
//     <div>
//       <ToggleButton />
//     </div>
//   );




    // example 3
//   const [name, setName] = useState('');

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={name} onChange={handleChange} />
//       <p>Hello, {name}!</p>
//     </div>
//   );


// example 1
// const [isVisible, setIsVisible] = useState(true);

// const Toggle = () => setIsVisible(!isVisible);
// return (
//     <div>
//         {isVisible && <p>This is visible</p>}
//         <button onClick={Toggle}>{isVisible ? 'Hide' : 'Show'} massage</button>
//     </div>
// );


// example 2

//   const [count , setCount] = useState(0);

// //   const increment = () => {
    
// //   };
//   return (
//     <div>
//         <p>you clicked {count}times</p>
//         <button onClick={() => setCount(count + 1)}>click me</button>
//         <button onClick={() => setCount(count - 1)}>ka jar</button>
//     </div>
//   )
