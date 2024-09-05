const fs = require("fs");
const moment = require("moment-timezone");
const request = require("request");

module.exports.config = {
		name: "info",
		version: "1.0.1",
		aliases: ["beta1" ,"betas2"],
		role: 0,
		description: "Admin and Bot info.",
		cooldown: 5,
		hasPrefix: false,
};

module.exports.run = async function({ api, event, args }) {
		let time = process.uptime();
		let years = Math.floor(time / (60 * 60 * 24 * 365));
		let months = Math.floor((time % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
		let days = Math.floor((time % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
		let weeks = Math.floor(days / 7);
		let hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
		let minutes = Math.floor((time % (60 * 60)) / 60);
		let seconds = Math.floor(time % 60);
		const uptimeString = `${years > 0 ? `${years} years ` : ''}${months > 0 ? `${months} months ` : ''}${weeks > 0 ? `${weeks} weeks ` : ''}${days % 7 > 0 ? `${days % 7} days ` : ''}${hours > 0 ? `${hours} hours ` : ''}${minutes > 0 ? `${minutes} minutes ` : ''}${seconds} seconds`;

		const prefix = "/";
		const CREATORLINK = "https://www.facebook.com/profile.php?id=100030880666720&mibextid=ZbWKwL";
		const BOTCREATOR = "Mark Martinez";
		const BOTNAME = "TUTEL BOT";
		const FILESOWNER = "TUTEL";
		const juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
		const link = ["http://linda.hidencloud.com:25636/shoti"
								 ];

		const callback = () => {
				api.sendMessage({
						body: `➢ Admin and Bot Information

⁂ Bot Name: ${BOTNAME}
✧ Bot Admin: ${BOTCREATOR}
♛ Bot Admin Link: ${CREATORLINK}
❂ Bot Prefix: ${prefix}
✫ Files Owner: ${FILESOWNER}
➟ UPTIME ${uptimeString}
✬ Today is: ${juswa} 

➳ Bot is running ${hours}:${minutes}:${seconds}.
✫ Thanks for using my bot`,
						attachment: fs.createReadStream(__dirname + "/cache/owner_video.mp4")
				}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner_video.mp4"));
		};

		const linkIndex = Math.floor(Math.random() * link.length);
		request(encodeURI(link[linkIndex]))
				.on('error', (err) => {
						console.error('Error downloading video:', err);
						api.sendMessage('An error occurred while processing the command.', event.threadID, null, event.messageID);
				})
				.pipe(fs.createWriteStream(__dirname + "/cache/owner_video.mp4"))
				.on("close", callback);
};
