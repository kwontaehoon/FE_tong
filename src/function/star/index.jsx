export const star = (score) => {

    const arr = Array(5).fill(0);

    switch(score){
        case 1: return arr.slice(0, 1).map((_, index) => <img key={index} src="/svg/Star.svg" style={{marginLeft: "-2px"}} />);
        case 2: return arr.slice(0, 2).map((_, index) => <img key={index} src="/svg/Star.svg" style={{marginLeft: "-2px"}} />);
        case 3: return arr.slice(0, 3).map((_, index) => <img key={index} src="/svg/Star.svg" style={{marginLeft: "-2px"}} />);
        case 4: return arr.slice(0, 4).map((_, index) => <img key={index} src="/svg/Star.svg" style={{marginLeft: "-2px"}} />);
        default: return arr.map((_, index) => <img key={index} src="/svg/Star.svg" style={{marginLeft: "-2px"}} />);
    }
}