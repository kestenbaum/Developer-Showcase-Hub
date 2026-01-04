import React from 'react';
import { Button, Field } from "@/components/UI";

const Page = () => {
    return (
        <div
            className="w-full bg-amber-50 flex items-center justify-center"
            style={{ height: 'calc(100vh - 48px)' }}
        >
           <div className="max-w-5xl mx-auto">
               <form action="">
                   <Field
                        label="Username"
                        name="username"
                        placeholder="Write username..."
                   />
                   <Field
                       label="Password"
                       name="password"
                       placeholder="Write password..."
                       type="password"
                   />
                   <Button>Send</Button>
               </form>
           </div>
        </div>
    );
};

export default Page;