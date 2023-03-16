import SideBar from '../components/sidebar';
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className="flex">
            
          {/* Sidebar */}
          <div class>
          <SideBar/>
          </div>

          {/* ClientProvider - Notification */ }

          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );  
}
