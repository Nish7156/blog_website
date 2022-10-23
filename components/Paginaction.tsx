// import React from 'react'

// type Pagination= 1 |-1

// function Paginaction({page,pageCount}:any) {

//     const isNextDisabled=():boolean=>{
//         return page >= pageCount;
//     }

//     const isPreviousDisabled=():boolean=>{
        
//         return page <= 1;
//     }

//     const handlePaginate= async(direaction:Pagination)=>{
//         if(direaction===1 && isNextDisabled()){
//             return ;
//         }

//         if(direaction===-1 && isPreviousDisabled()){
//             return;
//         }
//     }
//   return (
//     <div className='flex justify-center mt-24 '>
//         <button onClick={()=>handlePaginate(-1)} className={`${'w-24 px-2 py-2 ml-8 text-white bg-red-500 rounded-sm' } ${isPreviousDisabled() ? 'disabled': ''}`}>Previous</button>        

//         <button onClick={()=>handlePaginate(1)} className={`${'w-24 px-2 py-2 ml-8 text-white bg-green-500 rounded-sm' } ${isNextDisabled() ? 'disabled': ''}`}>Next</button>        
//     </div>
//   )
// }

// export default Paginaction