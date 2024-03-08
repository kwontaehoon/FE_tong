export const profile = (id) => {

    const arr = Array(5).fill(0);

    switch(id){
        case 1: return <img src="/svg/profile1.svg" className='w-10' />;
        case 2: return <img src="/svg/profile2.svg" className='w-10' />;
        case 3: return <img src="/svg/profile3.svg" className='w-10' />;
        case 4: return <img src="/svg/profile4.svg" className='w-10' />;
        case 5: return <img src="/svg/profile5.svg" className='w-10' />;
        case 6: return <img src="/svg/profile6.svg" className='w-10' />;
        case 7: return <img src="/svg/profile7.svg" className='w-10' />;
        default: return <img src="/svg/profile0.svg" className='w-10' />;
    }
}