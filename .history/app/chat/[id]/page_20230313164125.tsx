import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";

type Props = {
  params 
}

function ChatPage(props) {
  console.log(props);
  return ( <div className="flex flex-col h-screen overflow-hidden">
  <Chat/>
  <ChatInput />
  </div>
  );
  
}

export default ChatPage;