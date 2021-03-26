import Box from './Box';
import Cat from './Cat';

const Room = () => {
    return (
        <div className="room">
            <Box><Cat name="Maru"/></Box>
            <Box><Cat name="Grumpy"/></Box>
        </div>
    );
};

export default Room;