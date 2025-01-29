
const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="bg-gray-300 dark:bg-gray-700 w-[400px] h-[400px] rounded-lg mb-4"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-8 w-3/4 rounded mb-2"></div>
          <div className="bg-gray-300 dark:bg-gray-700 h-6 w-1/2 rounded mb-4"></div>
          <div className="flex justify-center space-x-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-gray-300 dark:bg-gray-700 w-12 h-12 rounded-full"></div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-gray-300 dark:bg-gray-700 h-10 w-full rounded mb-4"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-gray-300 dark:bg-gray-700 h-16 w-full rounded mb-2"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeleton

