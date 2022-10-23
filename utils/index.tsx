export const debounce=(fn:any,timeout=3000)=>{
    let timer: NodeJS.Timeout | undefined;
    const debounced=(...args:any)=>{
        clearTimeout(timer);
        timer= setTimeout(()=>{
            fn.apply(this, args);
        },timeout)
    }
    return debounced;
}