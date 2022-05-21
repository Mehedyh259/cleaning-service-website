import React from 'react';
import BucketGirl from '../../assets/image/bucketgirl.png'

const Landing = () => {
    return (
        <>
            <div class="hero h-screen relative z-10 lg:h-[60vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row">

                    <div>
                        <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src={BucketGirl} class="h-full" alt='...' />
                    </div>
                </div>
            </div>

            <div className="shadow-lg bg-base-200 p-10 w-5/6 rounded-2xl mx-auto mt-[-30px] relative z-20">
                <h1 className="text-2xl mb-5 text-primary">Get free Estimate</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <input
                        type="text"
                        placeholder='type here'
                        className='input input-bordered w-full '
                    />
                    <input
                        type="text"
                        placeholder='type here'
                        className='input input-bordered w-full '
                    />
                    <input
                        type="text"
                        placeholder='type here'
                        className='input input-bordered w-full '
                    />
                    <input
                        type="text"
                        placeholder='type here'
                        className='input input-bordered w-full '
                    />
                    <input
                        type="text"
                        placeholder='type here'
                        className='input input-bordered w-full '
                    />
                    <input
                        type="text"
                        placeholder='type here'
                        className='input input-bordered w-full '
                    />
                    <input
                        type="text"
                        placeholder='type here'
                        className='input input-bordered w-full '
                    />
                    <input
                        type="text"
                        placeholder='type here'
                        className='input input-bordered w-full '
                    />
                </div>
                <button className='btn btn-primary mt-5'>Get a Quote</button>
            </div>

        </>
    );
};

export default Landing;