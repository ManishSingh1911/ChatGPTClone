"use client";

import { collection, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

type Props = {
    chatId : string;
};
function Chat({chatId}: Props) {
  const {data: session} = useSession();
  
  const [messages] = useCollection(session && query(
    collection(db, "users", session?.user?.email!, "chats", chatId, "messages"),
    
  ))

  return <div className="flex-1">
   

  </div>;
  
}

export default Chat;