import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {
    id : string 
}

function ChatRow({id}: Props) {
  return <Link
      href= {`/chat/${id}`}

      <ChatBu
  

    ;
  
}

export default ChatRow;