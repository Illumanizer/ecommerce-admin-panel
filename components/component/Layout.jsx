import Sidebar from "./Sidebar"

const Layout = ({children}) => {
  return (
    <div key="1" className="flex h-full bg-gray-200">
      <Sidebar/>
      {children}
    </div>
  )
}

export default Layout
