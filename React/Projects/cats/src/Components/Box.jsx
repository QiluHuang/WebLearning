import { useState } from 'react';

const Box = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contents = children ? children : <div>Nothing</div>;

    console.log("running!");

    return (
        <div>
            <div> A box contains: {contents} </div>
            <button onClick={() => setIsOpen(!isOpen)}>
                The Box is {isOpen ? 'Open' : 'Closed'}
            </button>
        </div>
    );
};

export default Box;