import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-[#292727]">
        <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-700 via-blue-600 to-red-600 ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-pink-400 bg-[#292727] border-4"></div>
        </div>
    </div>

    );
};

export default Loading;

{/* <div class="flex items-center justify-center space-x-2 h-screen bg-[#292727]">
	<div class="w-10 h-10 rounded-full animate-pulse dark:bg-pink-600"></div>
	<div class="w-10 h-10 rounded-full animate-pulse dark:bg-pink-600"></div>
	<div class="w-10 h-10 rounded-full animate-pulse dark:bg-pink-600"></div>
</div> */}