import { PlusIcon } from "@heroicons/react/24/solid";

function NewChat() {
   const {data:session} = usesession();
   const createNewChat = async() => {

   }
  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
        <PlusIcon className="h-4 w-4"/>
        <p>New Chat</p></div>
  );
}

export default NewChat;