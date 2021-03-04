
import dayjs from "dayjs";

/**
 * @格式化地址
 */
export const formatUrl = (baseUrl: string, data = {}) => {
  const arr: any[] = [];
  for (const name in data) {
    arr.push(
      encodeURIComponent(name) + "=" + encodeURIComponent(data[name]),
    );
  }
  const params = arr.join("&")
  return `${baseUrl}?${params}`
}

/***
 * @格式化日期时间
 */
export const formatDate = (time, format = 'YYYY-MM-DD HH:mm:ss') => {
  if(time){
    return dayjs(time).format(format)
  }
}


/**
 * @拷贝
 * @param {string} value 字符串
 */
export const copy = (value: string) => {
    return new Promise((resolve) => {
        const input = document.createElement("input")
        input.setAttribute('readonly', 'readonly')
        input.setAttribute('value', value)
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input)
        resolve(true);
    })
}

