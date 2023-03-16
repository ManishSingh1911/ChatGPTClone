import NewChat from "./NewChat";

function SideBar() {
    const {} 
    return <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">

            <div>
                {/*New Chat*/}
                <NewChat/>

                <div>
                    {/* ModelSelection */}
                </div>

                {/* Map through the Chat Rows */ }
            </div>

        </div>
    </div>;
}

export default SideBar;