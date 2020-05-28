module.exports = {
    token: "XXXXX", //token bot | توكن البوت
	
	prefix: "XXXX", //prefix bot | برفكس البوت
	
	idbot: "XXXX", //Bot ID | ايدي البوت

    hostedBy: true,

	basiclang: "en", //basic lang | اللغة الاساسية
	
	auth: {
		support: "XXXX" //support server URL | رابط سيرفر السيبورت
	},

	status: [
		{
			name: `%ghelp | ManageGift's on {server} servers`,
			type: "LISTENING"
		},// الحالات | status
		{
			name: "https://github.com/Hadi-Koubeissi/GiveawayBoT.",
			type: "PLAYING"
		}
	],

	embeds: {
        color: "#FF4500", //Embed color | لون الامبد
        footers: "🎁 ManageGift's | http://managegift.ga" //Embed footer | الكتابة لي تكون اخر الامبد
    },

    events: {
        addcolor: "#DC143C", //The color of the event add | لون الامبد
		remcolor: "RED" //The color of the event remove  
		
    },

    reaction: "🎉", //Reaction to the giveaways if you in the console you see 'unknown emoji' that's what this emoji is not recognized by Discord | الايموجي الي بس تضغط عليها يصير القيف اوي اذا طلع لك ايرور بالكونسول يعني الايموجي ما تعرف بالديسكورد

    grole: "Giveaway Manger", //If the member doesn't have permission to handle messages he can still use the giveaways commands if he has the role configured right here | اذا سويت الرتبة واعطيتها لحد يصير يقدر يسوي قيف اوي ويستخدم جميع اوامر البوت بدون صلاحيات

    //all emojis in ManageGift support server | الاينوحيات بتلقوها بروم في السيبورت سيرفر الخاص بالبوت
	emojis: {

	success: "XXXX",

	error: "XXXX",
	
	gift: "XXXX",

	end: "XXXX",

	time: "XXXX",

	hoste: "XXXX",

	ping: "XXXX",

	link: "XXXX",

	add: "XXXX",

	vote: "XXXX",

	supp: "XXXX",

	command: "XXXX",

	featured: "XXXX",

	right: "XXXX",

	stats: "XXXX",

	ver: "XXXX",
	
	info: "XXXX"
	}

}