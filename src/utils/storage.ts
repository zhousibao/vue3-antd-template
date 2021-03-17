import Lstorage from '@zhousibao/localstorage';
const LS = Lstorage('vue3_antd_template:')
export default LS

// import CreateStorage from "@zhousibao/localstorage";
// const prefix = "prefix";
// const LS = CreateStorage(prefix); // prefix 默认为空
// LS.setItem(key, value, expire); // expire => second秒数
// LS.getItem(key);
// LS.removeItem(key);
// LS.clear();