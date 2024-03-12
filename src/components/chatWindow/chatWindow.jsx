import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';



const CustomCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#FAFAFAFA',
    position: 'fixed',
    bottom: '8%', // Adjust these values based on your chat icon's position
    right: '2%',
    width: '300px', // Set the width of the chat card
    minHeight: '300px', // Set a max height for the chat card
    overflowY: 'auto',
    zIndex: 1000 // Make sure the card is above other content
}));




const ChatWindow = ({ toggleChat, showChat }) => {
    if (!showChat) return null;




    return (
        <CustomCard>
            <IconButton
                aria-label="close"
                onClick={toggleChat}
                sx={{
                    position: 'absolute',
                    left: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
            <CloseIcon  />
            </IconButton>
            <CardContent>
                {/* Your chat bot conversations go here */}
                <div className="chat-window" style={{textAlign: 'center'}}>
                <Chip size="medium" color='secondary' variant="outlined" label="Quickchat AI Coming Soon...">
                </Chip>
                </div>
            </CardContent>
        </CustomCard>
    );
};

export default ChatWindow;
