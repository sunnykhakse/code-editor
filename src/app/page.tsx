
import Editor from "../app/components/editor/Editor";

export default function Home() {
  return (
    <div className="flex justify-center items-start h-screen">
      <div className="w-full max-w-8xl p-4 border">
          <div className="">
            <label htmlFor="comment" className="sr-only">
              Add your code
            </label>
            <div className="grid p-4 justify-items-end bg-gray-200 mb-4 border-gray-600 rounded">
              
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <label>Language</label>
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Select</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <label>Theme</label>
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Select</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                >
                  Run
                </button>
              </div>
            </div>
            <div>
              <Editor />
            </div>
          </div>
          <div className="flex justify-between pt-2">
            <div className="flex items-center space-x-5"></div>
            <div className="flex-shrink-0">
              
            </div>
          </div>
      
      </div>
    </div>
  );
}
