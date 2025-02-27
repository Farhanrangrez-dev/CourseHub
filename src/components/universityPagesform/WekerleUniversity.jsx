import React from 'react'

const WekerleUniversity = () => {
  return (
    <>
   
    <nav className="bg-white shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                alt="Logo"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="!rounded-button bg-custom text-white px-4 py-2 text-sm font-medium">
              <i className="fas fa-bell mr-2" />
              Notifications
            </button>
            <div className="relative">
              <button className="flex items-center space-x-3">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young student with a friendly smile, wearing business casual attire, against a neutral background&width=32&height=32&orientation=squarish&flag=075f0de4-e78b-45a7-ba19-6b02caa61376&flag=462a0d29-7397-495f-b110-5edbeaaad23c"
                  alt=""
                />
                <span className="text-gray-700">John Smith</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            Application Progress
          </h1>
          <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
            In Progress
          </span>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center w-full">
            <div className="relative flex items-center justify-center">
              <div className="w-10 h-10 bg-custom text-white rounded-full flex items-center justify-center">
                <i className="fas fa-check" />
              </div>
              <span className="absolute mt-16 text-sm font-medium text-gray-500">
                Registration
              </span>
            </div>
            <div className="flex-1 h-1 mx-4 bg-custom" />
            <div className="relative flex items-center justify-center">
              <div className="w-10 h-10 bg-custom text-white rounded-full flex items-center justify-center">
                <i className="fas fa-check" />
              </div>
              <span className="absolute mt-16 text-sm font-medium text-gray-500">
                Application
              </span>
            </div>
            <div className="flex-1 h-1 mx-4 bg-custom" />
            <div className="relative flex items-center justify-center">
              <div className="w-10 h-10 bg-white border-2 border-custom text-custom rounded-full flex items-center justify-center">
                <span>3</span>
              </div>
              <span className="absolute mt-16 text-sm font-medium text-gray-500">
                Interview
              </span>
            </div>
            <div className="flex-1 h-1 mx-4 bg-gray-200" />
            <div className="relative flex items-center justify-center">
              <div className="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center">
                <span>4</span>
              </div>
              <span className="absolute mt-16 text-sm font-medium text-gray-500">
                Documents
              </span>
            </div>
            <div className="flex-1 h-1 mx-4 bg-gray-200" />
            <div className="relative flex items-center justify-center">
              <div className="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center">
                <span>5</span>
              </div>
              <span className="absolute mt-16 text-sm font-medium text-gray-500">
                Visa
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-16">
        <div className="col-span-2 space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Current Stage: Interview &amp; Offer Process
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-calendar-check text-custom mr-3" />
                  <span className="text-gray-700">University Interview Date</span>
                </div>
                <span className="text-sm text-gray-500">
                  Scheduled for July 15, 2024
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-file-contract text-custom mr-3" />
                  <span className="text-gray-700">Conditional Offer Letter</span>
                </div>
                <span className="text-sm text-yellow-600">Pending</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-money-check text-custom mr-3" />
                  <span className="text-gray-700">Tuition Fee Transfer</span>
                </div>
                <span className="text-sm text-yellow-600">
                  Awaiting Offer Letter
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Required Documents
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Passport Copy
                  </span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Uploaded
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  Original passport and color photocopy required
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Academic Documents
                  </span>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    Pending
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  All certificates with necessary attestations
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Financial Documents
                  </span>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    Pending
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  Bank statements and sponsor documents
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    English Proficiency
                  </span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    Uploaded
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  IELTS or equivalent certification
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Important Dates
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Interview Date
                  </p>
                  <p className="text-xs text-gray-500">University Interview</p>
                </div>
                <span className="text-sm text-gray-700">July 15, 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Document Deadline
                  </p>
                  <p className="text-xs text-gray-500">Embassy Submission</p>
                </div>
                <span className="text-sm text-gray-700">August 1, 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Semester Start
                  </p>
                  <p className="text-xs text-gray-500">Academic Calendar</p>
                </div>
                <span className="text-sm text-gray-700">September 1, 2024</span>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Need Help?</h2>
            <div className="space-y-4">
              <button className="!rounded-button w-full bg-custom text-white px-4 py-3 text-sm font-medium">
                <i className="fas fa-headset mr-2" />
                Contact Support
              </button>
              <button className="!rounded-button w-full border border-gray-300 text-gray-700 px-4 py-3 text-sm font-medium">
                <i className="fas fa-book mr-2" />
                View Guidelines
              </button>
              <button className="!rounded-button w-full border border-gray-300 text-gray-700 px-4 py-3 text-sm font-medium">
                <i className="fas fa-download mr-2" />
                Download Forms
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="bg-gray-50 mt-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            © 2024 University Application Portal. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fab fa-facebook" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </>
  )
}

export default WekerleUniversity