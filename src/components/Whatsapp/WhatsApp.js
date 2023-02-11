import React from 'react'

import { WhatsAppWidget} from 'react-whatsapp-widget';



const defaultProps = {
    companyName: 'Web Digital France',
    message: `Bonjour! 👋🏼 \n\nQue puis-je faire pour vous?`,
    replyTimeText: 'Répond dans la journée...',
    sendButtonText:'Envoyer',
    inputPlaceHolder:'Votre message...'
};


const WhatsApp = ({companyName = defaultProps.companyName,
        message = defaultProps.message,replyTimeText = defaultProps.replyTimeText, sendButton= defaultProps.sendButtonText, inputPlaceHolder=defaultProps.inputPlaceHolder }) => {
    

    return (
        <WhatsAppWidget  replyTimeText={replyTimeText} sendButtonText={sendButton} companyName={companyName}  message={message} phoneNumber="+33698393952" inputPlaceHolder={inputPlaceHolder}/>
    )
    }
export default WhatsApp
