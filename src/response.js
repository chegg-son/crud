/* eslint-disable object-shorthand */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */

// alhamdulillah berfungsi

// const customResponse = (statusCode, data, message, h) => {
//     const res = h.response(
//         {
//             status: statusCode,
//             message: message,
//             datas: data
//         }
//     )
//     res.code(statusCode) 
//     return res
// }

const customResponse = (statusCode, data, message, h) => {
    const oke = {
        status: statusCode,
        message: message,
        datas: data
    }
    return h.response(oke).code(statusCode)
}

module.exports = customResponse
