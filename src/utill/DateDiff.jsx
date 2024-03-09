import moment from "moment"

export const dateDiff = (e) => {
    
    switch(true){
        case moment(new Date()).diff(e, 'day') > 0: return `${moment(new Date()).diff(e, 'day')}일전`;
        case moment(new Date()).diff(e, 'hour') >= 1: return `${moment(new Date()).diff(e, 'hours')}시간전`;
        case moment(new Date()).diff(e, 'minute') > 10: return `${moment(new Date()).diff(e, 'minute')}분전`;
        default: return <div className="text-ms">방금활동</div>;
    }
}