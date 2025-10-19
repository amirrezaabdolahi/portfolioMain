


// export function middleware() {
//     // Prepare message for Telegram
//     const botToken = '8220114082:AAHWDukD9-BJKnB_iZnWoAC_42md2PvmBjg';
//     const chatId = '7348567354';

//     // Get device info from user agent
//     function notifyLogin(username) {
//         const userAgent = Navigator.userAgent || 'Unknown';

//         fetch('https://api.ipify.org?format=json')
//             .then(res => res.json())
//             .then(data => {
//                 const ip = data.ip || 'Unknown';
//                 const message = `New login detected:\nUser: ${username}\nDevice: ${userAgent}\nIP: ${ip}`;

//                 fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ chat_id: chatId, text: message })
//                 });
//             });
//     }

//     notifyLogin()
// }