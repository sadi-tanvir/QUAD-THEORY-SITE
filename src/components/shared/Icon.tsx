import React from 'react'

export const RightArrowIcon = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className='text-[#6e7a87] w-5 h-5' fill="currentColor" height="16" width="10" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
        </>
    )
}

export const LeftArrowIcon = ({ activeStatus }: { activeStatus: number }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className={`${activeStatus === 0 ? 'text-[#a1a9b2]' : 'text-[#6e7a87]'} w-5 h-5`} fill="currentColor" height="16" width="10" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
        </>
    )
}

export const DownArrowIcon = ({ className = "" }: { className: string }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" height="16" width="14" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
        </>
    )
}

export const UserCircleIcon = ({ className = "" }: { className?: string }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" height="16" width="16" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" /></svg>
        </>
    )
}

export const SearchCircleIcon = ({ className = "" }: { className?: string }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
        </>
    )
}

export const LongRightArrowIcon = ({ className = "" }: { className?: string }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" height="16" width="16" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
        </>
    )
}

