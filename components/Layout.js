export default function Layout({ children }) {
    return (<div className="bg-gray-50 min-h-screen">
                <div className="mx-auto container max-w-7xl relative">
                    {children}
                </div>
            </div>);
  }