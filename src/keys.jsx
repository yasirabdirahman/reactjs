// const fruits = ['Apple', 'Banana', 'Chery' ];

// const FruitList = () => {
//     return (
//         <ul>
//             {fruits.map((fruit) => (
//                 <li key={fruit}>{fruit}</li>
//             ))}
//         </ul>
//     );
// };

// export default FruitList;




const todos = [
    { id: 1, text: 'learn react' },
    { id: 2, text: 'build projects' },
];

const TodoList = () => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
};


export default TodoList;