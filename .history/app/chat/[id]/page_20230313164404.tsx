import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";

type Props = {
  params: {
    id: string 
  }
}

function ChatPage({params: {id}} : Props) {
  console.log(props);
  return ( <div className="flex flex-col h-screen overflow-hidden">
  <Chat chatId={id}/>
  <ChatInput id={id}/>
  </div>
  );
  
}

export default ChatPage;