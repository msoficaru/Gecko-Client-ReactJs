// import React, { useState } from 'react';


// /*
// method: get | set
// key: string
// data: obj
// type: local | session
// */
// export function  usePersistentStorage(method, key, data, type) {
//     const [state, setState] = useState(data);
//     const dataToBeStored = JSON.stringify(data);

   

//     switch (method) {
//       case 'get':
//         if (type === local) {
//           setState(localStorage.getItem(key));
//           break;
//         } else if (type === "session") {
//           setState(sessionStorage.getItem(key));
//           break;
//         }

//       case 'set':
//         if (type === local) {
//           localStorage.setItem(key);
//         } else if (type === "session") {
//           return sessionStorage.setItem(key);
//         }
//         default:
//             break;
//     }
//     return state;
// }