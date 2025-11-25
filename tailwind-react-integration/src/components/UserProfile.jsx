function UserProfile() {
  return (
   <div className="user-profile bg-gray-100 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto my-10 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300">

      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="John Doe"
        className="rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 mx-auto"
      />
      <h1 className="text-lg sm:text-xl md:text-2xl text-blue-800 my-4 font-semibold text-center">
        John Doe
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
