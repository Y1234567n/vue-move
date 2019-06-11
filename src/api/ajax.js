/* 这是利用axios封装ajax请求的模块 */
import axios from 'axios'
export default function ajax(url,data={},type='get') {
   return new Promise((resolve,reject)=>{
       let promise
        if (type==='get'){
            promise = axios.get(url, {params:data})
       }else {
            promise = axios.post(url, data)
        }
        promise.then((response)=>{
           resolve(response.data)
            }
        ).catch((error)=>{
              console.log('请求出错了',error.message)
            }
            )
    })

}