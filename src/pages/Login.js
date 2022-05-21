import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex h-screen bg-accent items-center justify-center">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-20">
                <div class="card-body">
                    <h2 className="text-2xl text-center font-bold mb-3">Login</h2>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" class="input input-bordered" />
                        <label class="label">
                            <Link to='/forget-password' class="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>
                    <div className="divider">OR</div>
                    <button className='btn btn-primary hover:btn-accent'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;