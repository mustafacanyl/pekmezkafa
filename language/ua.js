//ukranian
let config = require(`../config.js`);
let emojis = require(`../emojis.json`)
let e = emojis;
let prefix = config.prefix;

module.exports = {
  start: {
    perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете зробити роль для використання цієї ролі:`,
    duration: `${e.error} Вкажіть коректний \`час\`, будь ласка!\n> Приклад: \`1d (1 день)\`, \`1h (1 година)\`, \`1m (1 хвилина)\`, \`1s (1 секунда)\`!`,
    argswinners: `${e.error} Вкажіть \`кількість переможців!\`\n> Приклад: \`${prefix}start 1h 4(4: кількість переможців) Nitro\``,
    prize: `${e.error} Додайте \`приз\`, будь ласка! \n> Приклад: ${prefix}start 1h 1 \`Nitro(Nitro: приз)\``
  },

  create: {
    perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете зробити роль для використання цієї ролі:`,
    channel: `${e.error} Ви повинні вказати \`правильний канал!\` \n> Приклад: ${prefix}start \`#giveawaychannel (giveawaychannel: канал для повідомлення)\` 1h 1 Nitro!.`,
    duration: `${e.error} Вкажіть коректний \`час\`, будь ласка! \n> Приклад: \`1d (1 день)\`, \`1h (1 година)\`, \`1m (1 хвилина)\`, \`1s (1 секунда)\`!.`,
    argswinners: `${e.error} Вкажіть \`кількість перемежців!\` \n> Приклад: \`${prefix}start #giveawaychannel 1h 4(4: кількість переможців) Nitro\``,
    prize: `${e.error} Додайте \`приз\`, будь ласка! \n> Приклад: ${prefix}start #giveawaychannel 1h 1 \`Nitro(Nitro: приз)\``,
    good: `${e.success} **Я розпочав \`розіграш\` в каналі:**`,

    giveaway: `${e.gift} **РОЗІГРАШ ПОЧАВСЯ** ${e.gift}`,
    giveawayEnded: `${e.end} **РОЗІГРАШ ЗАКІНЧИВСЯ** ${e.end}`,

    timeRemaining: `**ЗАКІНЧЕННЯ ЧЕРЕЗ ${e.time}:** **{duration}** !`,
    inviteToParticipate: (message) => `НАЖМІТЬ НА 🎉, ЩАБ ВЗЯТИ УЧАСТЬ!`,
    winMessage: (message) => `🎉 | Вітаєм, {winners}! Ти виграв: **{prize}**!`,
    embedFooter: `**РОЗІГРАШ**`,
    noWinner: `❌ Розіграш відмінено, тому що недостатньо учасників.`,
    hostedBy: `**ІНІЦІАТОР ${e.hoste}:** {user}`,
    winners: `ПЕРЕМОЖЦІВ`,
    endedAt: `ЗАКІНЧЕТЬСЯ В`,
  },

  units: {
    seconds: `секунд(и)`,
    minutes: `хвилин(и)`,
    hours: `годин(и)`,
    days: `день(ів)`,
  },

  end: {
    perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете зробити роль для використання цієї ролі:`,
    msg: `${e.error} Вкажіть коректний ID!`,
    err: `${e.error} Невідомий ID для розіграша:`,
    errmod: `${e.error} Цей розіграш закінчений або видалений!`,
    good: `${e.success} Розіграш буде закінчений через:`
  },

  reroll: {
    perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете зробити роль для використання цієї ролі:`,
    msg: `${e.error} Вкажіть коректний ID!`,
    err: `${e.error} Невідомий ID для розіграша:`,
    good: `:tada: Новий переможець(і): {winners}! Вітаємо!`,
    parts: `${e.error} В розіграші взяло участь недостатньо учасників!`
  },

  edit: {
    perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете зробити роль для використання цієї ролі:`,
    msg: `${e.error} Вкажіть коректний ID!`,
    time: `${e.error} Вкажіть коректний час \n> Приклад: \`1m, 1h, 1d\``,
    errtime: `${e.error} Розіграш не можете бути більше 10-ти днів.`,
    argswinners: `${e.error} Вкажіть \`кількість переможців!\`\n> Приклад: \`${prefix}start #giveawaychannel 1h 2(2: кількість переможців) Nitro\``,
    errwinners: `${e.error} В розіграші не можете бути більше 15-ти переможців.`,
    prize: `${e.error} додайте \`приз\`, будь ласка!\n> Приклад: ${prefix}start #giveawaychannel 1h 2 \`Nitro(Nitro: приз)\``,
    err: `${e.error} Невідомий ID для розіграша:`,
    good: `${e.success} В розіграш були внесені зміни. Зміни вступлять в силу через 5 секунд!`,
    errmod: `${e.error} Щось не так. Можливо цей розіграш був видалений або закінчений?!`
  },

  delete: {
    done: `${e.success} Розіграш був успішно відмінений.`
  },

  lang: {
    perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете зробити роль для використання цієї ролі:`,
    msg: `${e.error} будь ласка, вкажіть мову (\`ar\`, \`en\`, \`ru\`, \`ua\`)`,
    err: `${e.error} Вказана мова вже встановлена на сервері! Може Ви хочете встановити іншу?!`
  },

  set: {
    perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете зробити роль для використання цієї ролі:`,
    msg: `${e.error} Вкажіть розділ для зміни конфігурації! Параметр \`mention\` буде оповіщувать учасників коли розіграш буде починатися, \`logs\` для логів розіграшей, та \`role\` для видачі доступа до команд з розіграшами.`,
    args: `${e.error} Вкажіть \`on\` для активації або \`off\` для відключення.`,
    erroff: `${e.error} Дана функція вже відключена! Хочете її увімкнуть?`,
    erron: `${e.error} Дана функція вже включена! Хочете її відключить?`,
    mon: `${e.success} Я активую \`everyone\` для наступних розіграшів.`,
    moff: `${e.success} Я відключу \`everyone\` для наступних розіграшів.`,
    channel: `${e.error} Вкажіть канал для логування розіграшів!\n> Приклад: ${prefix}set logs \`#logs\` логи бота та команд.`,
    chon: `${e.success} Канал логування встановлений! Канал: `,
    role: `${e.error} Вкажіть коректну роль!\n> Приклад: ${prefix}set role \`@giveaways\` для встановки ролі.`,
    ron: `${e.success} Роль доступа до команд встановлена:`,
  },

  logs: {
    raddtitle: "Новий учасник",
    raddmsg1: "Учасник",
    raddmsg2: "подключився до розіграшу",
    rremtitle: "Минулий учасник",
    rremmsg1: "Учасник",
    rremmsg2: "зняв реакцію з розіграша",
  },

  invite: {
    main: `Головні посилання`,
    disc: `Введіть \`${prefix}invite copy\`, щоб отримати посилання!`,
    web: `${e.link} ManageGift's сайт`,
    inv: `${e.add} Запросити ManageGift's`,
    vote: `${e.vote} Голосувати за ManageGift's`,
    sup: `${e.supp} Сервер підтримки бота`
  },

  help: {
    title: `ManageGift's информація:`,
    /* translate this */
    disc: '● Here you can find all `ManageGift Commands`',
    giveawaycmd: `${e.givcmd} Giveaway commands - (6)`,
    featuredcmd: `${e.featured} Featured commands - (6)`,
    infocmd: `${e.info} Info commands - (4)`,
    ownerbot: `${e.owner} Owner bot commands - (2)`,
    link: `__${e.link} Посиланння:__`
  },

  stats: {
    title: `ManageGift's інформація:`,
    info: 'Це open-source проект для створення розіграшей с можливістю повной зміни конфігурації. Бот написаний на мові `javascript language` і розробив: ! -  HaDi KouBeIssI | 🇱🇧#4001! Перевод: LWJerri#3290',
    stats: `${e.stats} • __Статистика:__`,
    stat: `\`Серверів:\``,
    set: `\`Участників:\``,
    /* translate this */
    ch: `\`Channels:\``,
    ver: `${e.ver} • __Версія:__`,
    ram: `${e.ram} • __RAM__`,
    on: `${e.on} • __В мережі__`,
    for: `**Минуло часу з моменту запуска** `,
    moreinfo: `${e.info} • __Більше інформації:__`,
    comd: `\`Всього команд:\``,
    giv: `\`Всього розіграшів:\``,
  },

  prefixerror: `${e.error} Вкажіть бажаємий префікс!`,
  setprefix: `${e.success} Префікс був змінений на `,

  info: {
    ping: `> ${e.ping} Мій пінг `,
  },

  cooldown: {
    err: `${e.error} | **Ви повинні зачекати \`4 секунд(и)\` ${e.time}, щоб знову використати цю команду!**`
  },
  
  blacklist: {
    blacklist: `:lock: **Ви не можете використовувати \`ManageGift команди\`, тому що були додані до \`чорного списку!!\`**`
  }
}