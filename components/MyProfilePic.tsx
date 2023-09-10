import React from 'react';
import Image from 'next/image';

function MyProfilePic() {
    return (
        <section>
            <Image
                className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                src={'/images/sdm.jpg'}
                width={200}
                height={200}
                alt="Seraj Helles"
                priority
            />
        </section>
    );
}

export default MyProfilePic;
