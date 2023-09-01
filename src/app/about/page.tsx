
import Image from 'next/image'

import profilePic from '/public/nunes.jpg'


export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="py-16 bg-white">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <Image
                                className="md:5/12 lg:w-5/12"
                                src={profilePic}
                                alt="Nunes"
                                width={180}
                                height={37}
                                priority
                            />
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Ricardo José Nunes</h2>
                            <p className="mt-6 text-gray-600">I’ve worked in the technology industry for over 12 years for many innovative solutions and challenges. And during that time, every single experience has given me learnings that I’m applying to transformation every day.</p>
                            <p className="mt-4 text-gray-600">This is a study of the NextJs framework. Here concepts and learning will be noted and I hope it will be a basis for other case studies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
