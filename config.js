module.exports = {
	   /* The token of your Discord Bot // توكن البوت الخاص فيك */
	   token: "NzY4ODAxODg4Nzc4NzE1MTU2.X5FwjQ.dZsgszgMy3cvLvW4PEflixe6SMo",
	   /* for the support server // رابط سيرفر الدعم الخاص فيك */
	   auth: {
			support: "", // URL for support server
			logs: "783059170437627954", // id of the logs channel on your server if the bot join new server
	},
    mongoDB: "mongodb+srv://botlist:kalashi123@cluster0.5xoxe.mongodb.net/test?retryWrites=true&w=majority", // The URl of the mongodb database
	prefix: "p!", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embeds: {
		    color: "#9AC1FF", // Embed color | لون الامبد
		    footers: "🎁 Present Bot's" // Embed footer | الكتابة لي تكون اخر الامبد
	},
	/* Bot's owner informations */
	owner: {
		   id: "714464777388294237", // The ID of the bot's owner
		   name: "Kalashi#0001" // The ID of the bot's owner
	},
	/* The Bot status */
	status: [
	        {
				name: `p!help | Present Bot's on {server} servers!`,
				type: "LISTENING"
			},
			
		],
        /* Default lang | اللغة الاساسية */
   	    basiclang: "en",
        /* color for embed log */
	    events: {
		        addcolor: "#DC143C", // The color of the event add | لون الامبد
		        remcolor: "RED" // The color of the event remove  
	    },
	    /* Giveaway settings */
	    giveaway: {
			hostedBy: true, // Why hosted gift | لماذا استضافت الهدية
			reaction: "🎉", // Reaction to the giveaways if you in the console you see 'unknown emoji' that's what this emoji is not recognized by Discord | الايموجي الي بس تضغط عليها يصير القيف اوي اذا طلع لك ايرور بالكونسول يعني الايموجي ما تعرف بالديسكورد
			grole: "Giveaway Manger", // If the member doesn't have permission to handle messages he can still use the giveaways commands if he has the role configured right here | اذا سويت الرتبة واعطيتها لحد يصير يقدر يسوي قيف اوي ويستخدم جميع اوامر البوت بدون صلاحيات
		},
	//logs for cmd bot
	logs: {
		command: "783059170437627954" //log To see who uses bot commands
	}
}
