import React, { PropsWithChildren } from 'react'

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='lg:max-w-6xl md:px-0 px-10 mx-auto'>
            {children}
        </div>
    )
}

export default Wrapper
