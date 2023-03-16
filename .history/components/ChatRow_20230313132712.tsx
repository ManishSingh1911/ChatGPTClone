import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link"

type Props = {
    id : string 
}

function ChatRow({id}: Props) {
  return     <Link
  
    href = {`/chat/${id}`}
  >
    <ChatBubbleLeftIcon className="h"
        
    </Link>;
  
}

export default ChatRow;