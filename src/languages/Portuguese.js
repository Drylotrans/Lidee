const Language = require("../structures/Language");

module.exports = class Portuguese extends Language {
    constructor() {
        super({
            // Global
            userNo: "Deve mencionar um usúario ou colocar seu ID.",
            userPerms: (permission) => `Você deve ter a permissão de \`${this.getConstant("permissions", permission)}\` para executar este comando.`,
            botPerms: (permission) => `Eu devo ter a permissão de \`${this.getConstant("permissions", permission)}\` para executar este comando.`,
            nsfwChannel: "Este comando so está funcionando em canal NSFW.",
            cooldown: (time) => `Deve esperar ${time} segundos para executar este comando.`,
            premiumOnly: "O servidor deve ser premium para executar este comando.",
            others: (number) => `e outros ${number} mas...`,
            roles: (number) => `Roles (${number})`,
            id: (id) => `ID: ${id}`,
            nothing: "Nada para mosrar...",
            // Ban Command
            banNo: "Não pode banir este membro.",
            ban: (member) => `O **${member}** foi banido do servidor com sucesso.`,
            banError: "Ocorreu um erro enquanto bania o usúario.",
            // Clear Command
            clearNumber: "Deve especificar quantas mensagens deseja apagar.",
            clearLimit: "Deve especificar um numero de 0 a 100.",
            clear: (number) => `Foram eliminadas ${number} mensagens.`,
            clearError: "Teve um erro enquanto tentava apagar as mensagens.",
            // Kick Command
            kickNo: "Não posso expulsar este membro do servidor.",
            kick: (member) => `O **${member}** foi expulso do servidor.`,
            kickError: "Teve um erro enquanto estava tentando expulsar o usúario.",
            // Mute Command
            muteNo: "Esse membro ja está mutado!",
            mute: (member) => `O **${member}** foi mutado com sucesso.`,
            // Unmute Command
            unmuteNo: "Esse membro não está mutado!",
            unmute: (member) => `O usúario **${member}** foi desmutado com sucesso.`,
            // User Command
            userPermissions: "Permissões de usúario",
            userCreated: "Conta criada em",
            userJoined: "entrou no servidor em",
            userActivity: "Atividade do usúario",
            userBoosting: "Boosteando desde",
            // Server Command
            serverVanityUrl: "URL de vaidade",
            serverCreated: "Servidor criado em",
            serverOwner: "Dono do servidor",
            serverVerification: "Nivel de verificação",
            serverExplicitContentFilter: "Filtro de conteúdo de mídia explícito",
            serverDescription: "Descrição do servidor",
            serverFeatures: "Características especiais",
            serverEmojis: "Emojis do servidor",
            serverEmojisNormal: "Emojis normais",
            serverEmojisAnimated: "Emojis animados",
            // Ping Command
            pingCalculating: "Pong! *calculando...*",
            ping: (ms) => `Pong! **${ms}ms**.`,
            // Premium Command
            premiumNo: (prefix) => `O servidor não possui premium!\n\nTem uma chave? Ative o premiu do servidor usando \`${prefix}premium [Llave]\`.`,
            premiumYes: (date) => `O servidor tem premium! ate **${date}**\npode usar comandos especias com premium.`,
            premium: (date) => `Foi melhorado o servidor! O servidor agora tem premium ate **${date}**.\nPode usar comandos especiais com premium.`,
            premiumInvalid: "A chave ingressada não é válida.",
            // Prefix Command
            prefix: (prefix) => `Meu prefixo neste servidor é \`${prefix}\`.`,
            prefixChange: (prefix) => `Pode trocar o prefixo do servidor usando: \`${prefix}prefix [Prefixo]\`.`,
            prefixChanged: (prefix) => `O prefixo neste servidor foi mudado para: \`${prefix}\`.`,
            // Language Command
            language: (language) => `O idioma em neste servidor é \`${language}\`.`,
            languageSupport: "Idioma suportados",
            languageActual: "Idioma atuais",
            languageChange: (prefix) => `Pode mudar o idioma usando: \`${prefix}language [Código do idioma]\`.`,
            languageChanged: (language) => `O idioma do server mudou para \`${language}\`.`,
            // Avatar Command
            avatar: "Link do resolução máxima",
            // Hug Command
            hug: (author, user) => `**${author}** abraçou **${user}** ༼ つ ◕_◕ ༽つ`,
            hugBot: "Não pode abraçar um bot.",
            // Slap Command
            slap: (author, user) => `**${author}** deu um tapa em **${user}** ',:)`,
            slapBot: "Não pode dar um tapa em um bot.",
            // Pat Command
            pat: (author, user) => `**${author}** acariciou **${user}** ᓚᘏᗢ`,
            patBot: "Não pode acariciar um bot.",
            // Kiss Command
            kiss: (author, user) => `**${author}** beijou **${user}** 🤍`,
            kissBot: "Não pode beijar um bot.",
            // Covid Command
            covidLastUpdate: "Últimas atualizações",
            covidStatsGlobal: "Estatísticas do COVID19 globalmente",
            covidStatsCountry: (country) => `Estatísticas do COVID19 em ${country}`,
            covidToday: "Novos casos de hoje",
            covidTodayRecovered: "Novas pessoas recuperadas hoje",
            covidTodayDeaths: "Novas mortes hoje",
            covidTotal: "Casos total",
            covidTotalRecovered: "Pessoas totalmente recuperadas",
            covidTotalDeaths: "Total de pessoas mortas",
            covidError: "Ocorreu um erro ao obter informações do COVID19",
            // Fortnite Command
            fortniteNo: "Deve colocar um nome de usúario no `shop` para mostrar a loja de hoje.",
            fortniteUserStats: (player, level) => `Estatísticas do jogador ${player} no Fortnite (Nivel: ${level})`,
            fortniteUserSolo: "Modo um jugador",
            fortniteUserDuo: "Modo duo",
            fortniteUserSquad: "Modo squad",
            fortniteUserWinrate: "Porcentagem de partidas ganhadas",
            fortniteUserKD: "KD",
            fortniteUserKills: "Assasinatos",
            fortniteUserMinutes: "Minutos jogados",
            fortniteUserMatchs: "Partidas jogadas",
            fortniteShop: "Loja diaria do Fortnite",
            fortniteShopDescription: "Descrição",
            fortniteShopType: "Tipo",
            fortniteShopRarity: "Raridade",
            fortniteShopPrice: "Preço",
            fortniteShopCurrency: "PaVos",
            fortniteShopItem: (current, max) => `Ítem ${current}/${max}`,
            // Osu Command
            osuNoMode: "Deve colocar um modo válido (`normal`, `taiko`, `catch` ou `mania`).",
            osuNoUser: "Deve colocar um nome de usúario válido.",
            osuStats: (player, mode) => `Estatísticas do jogador ${player} em osu!${mode}`,
            osuCountry: "País",
            osuLevel: "Nivel",
            osuPP: "Pontos de rendimentos",
            osuAccuracy: "Precisão",
            osuTotalScore: "Pontuação total",
            osuScores: "Pontuações"
        }, {
            permissions: {
                default: "permissões por defeito",
                ADMINISTRATOR: "administrador",
                CREATE_INSTANT_INVITE: "criar convite instantânio",
                KICK_MEMBERS: "expulsar membros",
                BAN_MEMBERS: "banir membros",
                MANAGE_CHANNELS: "administrar canais",
                MANAGE_GUILD: "administrar servidor",
                ADD_REACTIONS: "Adicionar reações",
                VIEW_AUDIT_LOG: "ver registro de auditoría",
                PRIORITY_SPEAKER: "falar prioridade",
                STREAM: "transmitir",
                VIEW_CHANNEL: "ver canal",
                SEND_MESSAGES: "enviar mensagens",
                SEND_TTS_MESSAGES: "enviar mensagens de texto a voz",
                MANAGE_MESSAGES: "administrar mensagens",
                EMBED_LINKS: "inserir links",
                ATTACH_FILES: "anexar arquivos",
                READ_MESSAGE_HISTORY: "ler historico de mensagens",
                MENTION_EVERYONE: "mencionar a todos",
                USE_EXTERNAL_EMOJIS: "usar emojis externos",
                VIEW_GUILD_INSIGHTS: "ver resumo do servidor",
                CONNECT: "conectar em canais de voz",
                SPEAK: "falar em canais de voz",
                MUTE_MEMBERS: "silenciar membros",
                DEAFEN_MEMBERS: "mutar membros",
                MOVE_MEMBERS: "mover membros",
                USE_VAD: "usar a atividade de voz",
                CHANGE_NICKNAME: "mudar apelidio",
                MANAGE_NICKNAMES: "administrar apelidios",
                MANAGE_ROLES: "administrar roles",
                MANAGE_WEBHOOKS: "administrar webhooks",
                MANAGE_EMOJIS: "administrar emojis"
            },
            serverFeatures: {
                ANIMATED_ICON: "icones animado",
                BANNER: "banner",
                COMMERCE: "comercio",
                DISCOVERABLE: "reconocible",
                FEATURABLE: "destacable",
                INVITE_SPLASH: "image de invites",
                NEWS: "noticias",
                PARTNERED: "partnerizado",
                PUBLIC: "público",
                PUBLIC_DISABLED: "público desativado",
                VANITY_URL: "URL de vaidade",
                VERIFIED: "verificado",
                VIP_REGIONS: "regiões VIP",
                WELCOME_SCREEN_ENABLED: "exibição de bem vindo habilitada"
            },
            activities: {
                PLAYING: "Jogando a",
                STREAMING: "Transmitindo",
                LISTENING: "Escutandodo",
                WATCHING: "Vendo",
                CUSTOM_STATUS: "Estado personalizado"
            },
            verificationLevels: {
                NONE: "Sem restrições.",
                LOW: "Eles devem ter um e-mail confirmado na conta do Discord.",
                MEDIUM: "Deve ter um endereço de e-mail confirmado e permanecer no Discord por mais de 5 minutos.",
                HIGH: "Eles devem ter um e-mail verificado, estar registrado no Discord por mais de 5 minutos e ser um membro deste servidor por mais de 10 minutos.",
                VERY_HIGH: "Eles devem ter um e-mail confirmado, estar no Discord por mais de 5 minutos, ser membro deste servidor por mais de 10 minutos e ter um telefone verificado na conta do Discord."
            },
            explicitContentFilter: {
                DISABLED: "Não analise nenhum conteúdo multimídia.",
                MEMBERS_WITHOUT_ROLES: "Analise o conteúdo multimídia de membros que não pertencem à função",
                ALL_MEMBERS: "Analise o conteúdo multimídia de todos os membros."
            },
            time: {
                seconds: (seconds) => `${seconds} segundos`,
                second: (second) => `${second} segundo`,
                minutes: (minutes) => `${minutes} minutos`,
                minute: (minute) => `${minute} minuto`,
                hours: (hours) => `${hours} horas`,
                hour: (hour) => `${hour} hora`,
                days: (days) => `${days} dias`,
                day: (day) => `${day} dia`,
                weeks: (weeks) => `${weeks} semanas`,
                week: (week) => `${week} semana`,
                months: (months) => `${months} meses`,
                month: (month) => `${month} mes`,
                years: (years) => `${years} anos`,
                year: (year) => `${year} ano`,
                ago: (date) => `faz ${date}`,
                within: (date) => `dentro de ${date}`,
                elapsed: (time) => `Tempo decorrido: **${time}**.`,
                left: (time) => `Tempo restante: **${time}**.`
            }
        }, {
            // Help Command
            title: "Ayuda",
            description: (name, prefix, links) => `Olá, eu sou ${name}. Estou aqui para ajudá-lo em tudo o que você deseja fazer, você pode obter informações do servidor e/ou usuários, também pode se divertir jogando jogos incorporados a mim com seus amigos ou apenas executar a parte administrativa.\n\nMi meu prefixo neste servidor é \`${prefix}\` mas você pode me mencionar como um substituto para o prefixo. \nAbaixo, você encontrará categorias diferentes com os diferentes comandos que possuo, cada uma começando com o prefixo mencionado.\n\nDeseas deseja informações mais detalhadas sobre um comando? use \`${prefix}help [Comando]\`.\n\nInformações úteis: ${links}`,
            categories: ["Informações", "Entretenimento", "Interação", "Configuração", "Administração", "NSFW"],
            footer: (count) => `${count} comandos disponiveis`,
            usage: "Uso",
            aliases: "Alias",
            // Commands Description
            banDescription: "Banir um membro por ID ou menção, o motivo pode ser adicionado.",
            softbanDescription: "Banir um membro por ID ou menção ao excluir mensagens por dias de idade, um motivo pode ser adicionado.",
            clearDescription: "Exclua as mensagens de acordo com a quantidade especificada entre 1 e 100.",
            kickDescription: "Expulsar um membro, o motivo pode ser adicionado.",
            muteDescription: "Mutar um membro por tempo inderteminado.",
            unmuteDescription: "Desmutar um membro mutado",
            helpDescription: "Mostrar essa mensagem",
            userDescription: "Mostrar informações detalhadas de um usúario.",
            serverDescription: "Mostrar informações detalhadas de um servidor.",
            pingDescription: "Mostrar a latencia do bot e a API do discord.",
            prefixDescription: "Mostrar e mudar as configurações do prefixo no servidor.",
            languageDescription: "Mostrar e mudar as configurações do idioma no servidor.",
            premiumDescription: "Mostrar e estabelecer as configurações do servidor.",
            avatarDescription: "Mostrar o avatar de um membro por ID, menção ou o seu.",
            hugDescription: "Abrace um usuário por ID ou menção.",
            slapDescription: "Bata em um membro por ID ou menção",
            patDescription: "Acaricia um membro por ID ou menção.",
            kissDescription: "Beijar um membro por ID ou menção.",
            fortniteDescription: "Exibir informações da loja de hoje ou de um jogador Fortnite",
            osuDescription: "Mostrar informações sobre um osu player!",
            // Commands Usage
            banUsage: (prefix) => `${prefix}ban <Membro> [Razón]\n${prefix}ban @Deivid#0045\n${prefix}ban 123123123123123123 >:[`,
            softbanUsage: (prefix) => `${prefix}softban <Miembro> <Antiguedad de mensagens em dia para apagar> [Razón]\n${prefix}softban @Deivid#0045 1\n${prefix}ban 123123123123123123 1 >:[`,
            clearUsage: (prefix) => `${prefix}clear <Cantidad 1-100>\n${prefix}clear 10`,
            kickUsage: (prefix) => `${prefix}kick <Membro> [Razón]\n${prefix}kick @Someone#0001\n${prefix}ban 123123123123123123 Esta fazendo spam? sim? Beem, expulsado.`,
            muteUsage: (prefix) => `${prefix}mute <Membro>\n${prefix}mute @Free#7870\n${prefix}mute 123123123123123123`,
            unmuteUsage: (prefix) => `${prefix}unmute <Membro>\n${prefix}unmute @Free#7870\n${prefix}unmute 123123123123123123`,
            helpUsage: (prefix) => `${prefix}help [Comando]`,
            userUsage: (prefix) => `${prefix}user`,
            serverUsage: (prefix) => `${prefix}server`,
            pingUsage: (prefix) => `${prefix}ping`,
            prefixUsage: (prefix) => `${prefix}prefix [Prefix]\n${prefix}prefix\n${prefix}prefix !`,
            languageUsage: (prefix) => `${prefix}language [Language]\n${prefix}language\n${prefix}linguagem em`,
            premiumUsage: (prefix) => `${prefix}premium [Key]\n${prefix}premium AValidKeyHere`,
            avatarUsage: (prefix) => `${prefix}avatar <Membro>\n${prefix}avatar @Free#7870`,
            hugUsage: (prefix) => `${prefix}hug <Membro>\n${prefix}hug @Deivid#045`,
            slapUsage: (prefix) => `${prefix}slap <Membro>\n${prefix}slap @Free#7870`,
            patUsage: (prefix) => `${prefix}pat <Membro>\n${prefix}pat @Free#7870`,
            kissUsage: (prefix) => `${prefix}kiss <Membro>\n${prefix}kiss @Deivid#0045`,
            covid19Usage: (prefix) => `${prefix}covid19 [País]\n${prefix}covid19\n${prefix}covid19 Mexico`,
            fortniteUsage: (prefix) => `${prefix}fortnite <shop|Jogador> [Objeto de tienda]\n${prefix}fortnite shop\n${prefix}fortnite shop 4\n${prefix}fortnite Drylotranz`,
            osuUsage: (prefix) => `${prefix}osu <normal|taiko|catch|mania> <Jogador>\n${prefix}osu normal Motxi`
        });

        this.displayName = "portuguese";
        this.nativeName = "português";
        this.languageCode = "pt";
        this.flag = "🇧🇷";
    }
}