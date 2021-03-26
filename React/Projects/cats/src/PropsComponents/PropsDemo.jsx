// 第一种
// const Demo = ( props ) => {
//     return (
//         <div>
//             I like every kind of { props.description } { props.animal }
//         </div>
//     );
// };



// 第二种
// const Demo = ( { animal, description } ) => {
//     return (
//         <div>
//             I like every kind of { description } { animal }
//         </div>
//     )
// }



// 第三种
const Demo = ( { onClick, animal, description, children } ) => {
    return (
        <div onClick={onClick}>
            I like every kind of { description } { animal } 
            <p>{ children }</p>
        </div>
    )
}

export default Demo;