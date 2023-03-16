import Link from "next/link"

type Props = {
    id : string 
}

function ChatRow({id}: Props) {
  return     <Link
  
    href = {1/chat/${id}}
  >
        
    </Link>;
  
}

export default ChatRow;