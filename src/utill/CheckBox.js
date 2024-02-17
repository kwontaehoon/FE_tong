export const checkBox = (check, setCheck, index, all) => {
    switch(true){
        case all: {
            const arr = Array(check.length).fill(check[0] ? false : true); return setCheck(arr);
        }
        case !all: {
            let arr = [...check];
            if(arr.filter(x=> x == true).length == check.length-2 && !arr[index]){
                arr = Array(check.length).fill(true);
                return setCheck(arr);
            }

            if(check[0]){
                arr[0] = false;
            }
            arr[index] = !arr[index];
            return setCheck(arr);
        }
    }
}