// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: newScpt,
  async handle(
    ӄʀǟӄɨռʐ,
    chat,
    𝓜𝖎𝖟𝖚ӄ𝖎,
    Needs,
    ꜱɪᴛʀᴀᴘ,
    Clock,
    Ping,
    Timers,
    version
  ) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > ` + FinalName.toUpperCase() + `✔️`
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      const jsoncool = JSON.parse(
        fs.readFileSync(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`)
      );
      await jsoncool.push(𝓜𝖎𝖟𝖚ӄ𝖎.sender + "_" + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
      fs.writeFileSync(
        `./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`,
        JSON.stringify(jsoncool)
      );
      setTimeout(async (error) => {
        if (error) console.log(error);
        await jsoncool.splice(𝓜𝖎𝖟𝖚ӄ𝖎.sender + "_" + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        fs.writeFileSync(
          `./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`,
          JSON.stringify(jsoncool)
        );
      }, 10000);
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var MediaUrl = `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`;
      var MainText = `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, ${Timers} @${ꜱᴇɴᴅᴇʀeceived},

┌──────────────★
│🔑 𝐏𝐫𝐞𝐟𝐢𝐱: *${ᴋᴇɪ}*
│👑 𝐎𝐰𝐧𝐞𝐫: _🐙KrakinzKon_
│🍁 𝐀𝐝𝐝 𝐌𝐢𝐳𝐮𝐤𝐢: _${ᴋᴇɪ}request_
│☣️ 𝐋𝐢𝐜𝐞𝐧𝐬𝐞𝐝: Apache License Version 2.0
│🐙𝐆𝐑𝐎𝐔𝐏: ${_𝔏𝔞𝔟_.HASH}
│🦞𝐆𝐢𝐭𝐡𝐮𝐛: _${ᴋᴇɪ}repo_
│🍕 𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣! _many many more_
└───────〇


┌────◇🌾 𝐅.𝐀.𝐐
│
│• ɪ ᴀᴍ ʜᴜᴍᴀɴ? ʏᴇꜱ, & ᴍʏ ᴀᴄᴄᴏᴜɴᴛ ʜᴀꜱ ʙᴇᴇɴ ʀᴇ-ᴄᴏᴅᴇᴅ ᴛᴏ ʙᴇ ᴀʙʟᴇ ᴛᴏ ᴜꜱᴇ ᴍɪᴢᴜᴋɪ ʙᴏᴛ
│• ᴀᴍ ɪ ᴛʏᴘɪɴɢ ᴀʟʟ ᴛʜᴇꜱᴇ ᴍᴀɴᴜᴀʟʟʏ? ʜᴇʟʟ ɴᴏ. ɪᴛ ɪꜱ ᴀʟʟ ᴄᴏᴅᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ
│• ᴡʜᴀᴛ ɪꜱ ᴍɪᴢᴜᴋɪ? ɪᴛ ɪꜱ ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ.
│• ᴜɴ-ʟɪᴋᴇ ᴛᴇʟᴇɢʀᴀᴍ ᴀɴᴅ ᴅɪꜱᴄᴏʀᴅ ʜᴀᴠᴇ ᴛʜᴇɪʀ ᴏᴡɴ ʙᴏᴛꜱ, ᴍɪᴢᴜᴋɪ ᴜꜱᴇꜱ ɪᴛ'ꜱ ᴜꜱᴇʀ
│• ᴡʜʏ ᴀᴍ ɪ ꜱᴇɴᴅɪɴɢ ᴀʟʟ ᴛʜᴏꜱᴇ ᴛᴇxᴛꜱ ɪɴ ʏᴏᴜʀ ɢʀᴏᴜᴘ? ʙᴀᴋᴀ ᴛʜᴏꜱᴇ ᴡᴇʀᴇ ꜱᴇɴᴛ ᴀꜰᴛᴇʀ ʏᴏᴜʀ ʀᴏᴛᴛᴇɴ ᴀꜱꜱ ᴜꜱᴇᴅ ᴍɪᴢᴜᴋɪ ᴄᴏᴍᴍᴀɴᴅꜱ.
│• ʏᴏᴜ ᴀʀᴇ ᴅᴜᴍʙ ꜰᴜᴄᴋ ɪꜰ ʏᴏᴜ ᴅᴏɴ'ᴛ ᴜɴᴅᴇʀꜱᴛᴀɴᴅ ᴡʜᴀᴛ ɪꜱ ᴡʀɪᴛᴛᴇɴ ᴀʙᴏᴠᴇ
└───────〇

┌────◇❓ 𝐇𝐨𝐰 𝐓𝐨 𝐆𝐞𝐭 𝐌𝐢𝐳𝐮𝐤𝐢?
│
│• ᴊᴏɪɴ ᴍɪᴢᴜᴋɪ ɢʀᴏᴜᴘ.
│• ɪɴ ʙᴏᴛ'ꜱ ᴅᴍ: ${ᴋᴇɪ}ʀᴇQᴜᴇꜱᴛ _<ʏᴏᴜʀ ɢᴄ ʟɪɴᴋ>_
└───────〇
_ɪꜰ ʏᴏᴜ ᴅᴏ ɴᴏᴛ ꜰᴏʟʟᴏᴡ/ᴜɴᴅᴇʀꜱᴛᴀɴᴅ ᴛʜᴇɴ ᴡᴇ *ᴋʀᴀᴋɪɴᴢʟᴀʙ ᴅᴇᴠꜱ* ᴅᴏɴᴏᴛ ᴄᴀʀᴇ!_`;
      return Mizuki_Static.MGS(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, MainText, MediaUrl).catch(
        (ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat)
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
